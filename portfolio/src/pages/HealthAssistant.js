import ScrollableSections from '../components/ScrollableSections';
import Ease from '../components/Ease';

const HealthAssistant = () => {
    const sections = [
        <>
            <div><code className="h1">Health Assistant</code></div>
            <Ease>
                <a href="https://health-assistant.giy.kim/" target="_blank" rel="noopener noreferrer">
                    <code className="p">health-assistant.giy.kim →</code>
                </a>
            </Ease>
        </>,
        <>
            <Ease>
                <code className="p">An AI-powered health assistant that helps you understand symptoms, medications, and general wellness questions through natural conversation.</code>
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

export default HealthAssistant;
