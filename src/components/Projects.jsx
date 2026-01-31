import Section from './Section';
import { content } from '../data/content';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const { projects } = content;

    return (
        <Section id="projects" className="projects-section">
            <h3>04. Projects</h3>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="card-header">
                            <FaFolder className="folder-icon" />
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                            </div>
                        </div>

                        <div className="card-body">
                            <h4 className="project-title">{project.title}</h4>
                            <p className="project-desc">{project.description}</p>
                        </div>

                        <div className="card-footer">
                            <span className="project-tech">{project.tech}</span>
                            <span className="project-type">{project.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
