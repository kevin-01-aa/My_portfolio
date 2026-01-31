import Section from './Section';
import { content } from '../data/content';
import { FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
    const { education } = content;

    return (
        <Section id="about" className="about-section">
            <h3>01. Education</h3>
            <div className="education-grid">
                {education.map((edu, index) => (
                    <div key={index} className="edu-card">
                        <div className="edu-icon">
                            <FaGraduationCap />
                        </div>
                        <div className="edu-content">
                            <h4>{edu.degree}</h4>
                            <span className="school">{edu.school}</span>
                            <span className="year">{edu.year}</span>
                            <p>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default About;
