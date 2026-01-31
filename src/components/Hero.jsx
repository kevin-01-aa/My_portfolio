import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Hero.css';

const Hero = () => {
    const { hero } = content;

    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="greeting">Hi, I am</span>
                    <h1 className="name">{hero.name}</h1>
                    <h2 className="role">{hero.role}</h2>
                    <p className="tagline">{hero.tagline}</p>
                    <p className="hero-desc">{hero.description}</p>
                    <a href="#projects" className="btn hero-btn">{hero.cta}</a>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={hero.image} alt={hero.name} className="hero-img" />
                    <div className="hero-blob"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
