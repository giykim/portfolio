import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./ScrollableSections.css";

const SCROLL_THRESHOLD = 800;
const FADE_OUT_DURATION = 250;
const FADE_IN_DURATION = 350;
const TOUCH_MULTIPLIER = 3;

const ScrollableSections = ({ sections }) => {
    const total = sections.length;
    const currentRef = useRef(0);
    const [current, setCurrentState] = useState(0);
    // trans: { to, outProgress (0→1), inProgress (0→1) }
    const [trans, setTrans] = useState(null);

    const scrollAccumRef = useRef(0);
    const outProgressRef = useRef(0);
    const toRef = useRef(null);
    const isTransitioningRef = useRef(false);
    const animFrameRef = useRef(null);
    const lastTouchYRef = useRef(null);

    const cancelAnim = useCallback(() => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    }, []);

    const setCurrent = useCallback((val) => {
        currentRef.current = val;
        setCurrentState(val);
    }, []);

    // Phase 2: next section mounted fresh here — animation triggers on mount
    const startFadeIn = useCallback((to) => {
        isTransitioningRef.current = true;
        const start = performance.now();
        const tick = (now) => {
            const inProgress = Math.min((now - start) / FADE_IN_DURATION, 1);
            setTrans({ to, outProgress: 1, inProgress });
            if (inProgress < 1) {
                animFrameRef.current = requestAnimationFrame(tick);
            } else {
                setCurrent(to);
                setTrans(null);
                scrollAccumRef.current = 0;
                outProgressRef.current = 0;
                toRef.current = null;
                isTransitioningRef.current = false;
            }
        };
        animFrameRef.current = requestAnimationFrame(tick);
    }, [setCurrent]);

    const animateOut = useCallback((to, fromProgress) => {
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;
        toRef.current = to;
        const duration = FADE_OUT_DURATION * (1 - fromProgress);
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min((now - start) / Math.max(duration, 1), 1);
            const outProgress = fromProgress + (1 - fromProgress) * t;
            outProgressRef.current = outProgress;
            setTrans({ to, outProgress, inProgress: 0 });
            if (t < 1) {
                animFrameRef.current = requestAnimationFrame(tick);
            } else {
                startFadeIn(to);
            }
        };
        animFrameRef.current = requestAnimationFrame(tick);
    }, [startFadeIn]);

    const animateTo = useCallback((to) => {
        if (to < 0 || to >= total) return;
        cancelAnim();
        isTransitioningRef.current = false;
        animateOut(to, outProgressRef.current);
    }, [total, cancelAnim, animateOut]);

    const animateBack = useCallback(() => {
        const startProgress = outProgressRef.current;
        const start = performance.now();
        const duration = 200;
        const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const outProgress = startProgress * (1 - t);
            outProgressRef.current = outProgress;
            if (outProgress > 0) {
                setTrans({ to: toRef.current, outProgress, inProgress: 0 });
                animFrameRef.current = requestAnimationFrame(tick);
            } else {
                scrollAccumRef.current = 0;
                outProgressRef.current = 0;
                toRef.current = null;
                setTrans(null);
            }
        };
        animFrameRef.current = requestAnimationFrame(tick);
    }, []);

    const applyDelta = useCallback((delta) => {
        if (isTransitioningRef.current) return;

        if (toRef.current === null) {
            const dir = delta > 0 ? 1 : -1;
            const to = currentRef.current + dir;
            if (to < 0 || to >= total) return;
            toRef.current = to;
            scrollAccumRef.current = Math.abs(delta);
        } else {
            const dir = toRef.current > currentRef.current ? 1 : -1;
            scrollAccumRef.current += delta * dir;

            if (scrollAccumRef.current <= 0) {
                scrollAccumRef.current = 0;
                outProgressRef.current = 0;
                toRef.current = null;
                setTrans(null);
                return;
            }
        }

        const outProgress = Math.min(scrollAccumRef.current / SCROLL_THRESHOLD, 1);
        outProgressRef.current = outProgress;
        setTrans({ to: toRef.current, outProgress, inProgress: 0 });

        if (outProgress >= 1) {
            startFadeIn(toRef.current);
        }
    }, [total, startFadeIn]);

    const handleScroll = useCallback((e) => {
        e.preventDefault();
        applyDelta(e.deltaY);
    }, [applyDelta]);

    const handleTouchStart = useCallback((e) => {
        lastTouchYRef.current = e.touches[0].clientY;
    }, []);

    const handleTouchMove = useCallback((e) => {
        e.preventDefault();
        const currentY = e.touches[0].clientY;
        const delta = (lastTouchYRef.current - currentY) * TOUCH_MULTIPLIER;
        lastTouchYRef.current = currentY;
        applyDelta(delta);
    }, [applyDelta]);

    const handleTouchEnd = useCallback(() => {
        lastTouchYRef.current = null;
        if (isTransitioningRef.current || toRef.current === null) return;
        if (outProgressRef.current >= 0.4) {
            animateOut(toRef.current, outProgressRef.current);
        } else {
            animateBack();
        }
    }, [animateOut, animateBack]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

    useEffect(() => () => cancelAnim(), [cancelAnim]);

    // Render only one section at a time:
    // - fade-out phase: current section fading out (next NOT mounted yet)
    // - fade-in phase: next section mounting fresh with active class (animation triggers)
    // - idle: current section with active class
    const renderSection = () => {
        if (!trans) {
            return (
                <div key={`s-${current}`} className="section" style={{ opacity: 1 }}>
                    {sections[current]}
                </div>
            );
        }
        if (trans.outProgress < 1) {
            return (
                <div key={`s-${current}`} className="section" style={{ opacity: 1 - trans.outProgress }}>
                    {sections[current]}
                </div>
            );
        }
        // fade-in: next section mounts here for the first time this visit
        return (
            <div key={`s-${trans.to}`} className="section" style={{ opacity: trans.inProgress }}>
                {sections[trans.to]}
            </div>
        );
    };

    return (
        <div className="scrollable-sections">
            {renderSection()}

            <div className="section-dots">
                {sections.map((_, index) => (
                    <button
                        key={index}
                        className={`dot${index === current ? ' active' : ''}`}
                        onClick={() => animateTo(index)}
                        aria-label={`Go to section ${index + 1}`}
                    />
                ))}
            </div>

            <button
                className="arrow-btn arrow-up"
                onClick={() => animateTo(current - 1)}
                disabled={current === 0}
                aria-label="Previous section"
            >
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <button
                className="arrow-btn arrow-down"
                onClick={() => animateTo(current + 1)}
                disabled={current === total - 1}
                aria-label="Next section"
            >
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </div>
    );
};

export default ScrollableSections;
