import { content } from '../data/content';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const { social } = content;

    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <h3>Contact Me</h3>
                <p>Feel free to reach out for collaborations or just a friendly hello!</p>

                <div className="social-links">
                    <a href={social.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href={social.email}><FaEnvelope /></a>
                </div>

                <div className="copyright">
                    Designed & Built by Kevin Johnson A A
                </div>
            </div>
        </footer>
    );
};

export default Footer;
