import ScrollableSections from '../components/ScrollableSections';
import Ease from '../components/Ease';

const SteamScout = () => {
    const sections = [
        <>
            <div><code className="h1">Steam Scout</code></div>
            <Ease>
                <a href="https://steam-scout.giy.kim/" target="_blank" rel="noopener noreferrer">
                    <code className="p">steam-scout.giy.kim →</code>
                </a>
            </Ease>
        </>,
        <>
            <Ease>
                <code className="p">A RAG-powered search engine for discovering Steam games using natural language. Describe the kind of game you're looking for and get results that actually match your vibe.</code>
                <code className="p" style={{ marginTop: '16px', fontStyle: 'italic' }}>Work in progress.</code>
            </Ease>
        </>,
    ];

    return (
        <div style={{ height: '100%' }}>
            <ScrollableSections sections={sections} />
        </div>
    );
};

export default SteamScout;
