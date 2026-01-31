import Section from './Section';
import { content } from '../data/content';
import './Experience.css';

const Experience = () => {
    const { experience } = content;

    return (
        <Section id="experience" className="experience-section">
            <h3>03. Experience</h3>

            <div className="experience-list">
                {experience.map((exp, index) => (
                    <div key={index} className="exp-item">
                        <div className="exp-line"></div>
                        <div className="exp-content">
                            <h4>{exp.role} <span className="company">@ {exp.org}</span></h4>
                            <span className="exp-type">{exp.type}</span>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
