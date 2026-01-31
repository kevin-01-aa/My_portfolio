import Section from './Section';
import { content } from '../data/content';
import { FaCode, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const { skills } = content;

    return (
        <Section id="skills" className="skills-section">
            <h3>02. Skills</h3>

            <div className="skills-container">
                {skills.map((categoryData, index) => (
                    <div key={index} className="skills-category">
                        <div className="category-header">
                            <FaCode className="cat-icon" />
                            <h4>{categoryData.category}</h4>
                        </div>
                        <ul className="skills-list">
                            {categoryData.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
