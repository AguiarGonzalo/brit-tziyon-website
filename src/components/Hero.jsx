import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-subtitle"
                >
                    מוהל מוסמך ומומחה
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    המוהל ציון שטרית
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    כ-42 שנות ניסיון בבריתות, מוהל מקצועי מומחה ובעל ידע כירורגי והלכתי רב.
                    מבצע בריתות באהבה ובמסירות, עם דגש על סטריליות מקסימלית וליווי אישי לכל אורך הדרך.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <a href="tel:0505323909" className="btn-primary">
                        התקשרו עכשיו: 050-5323909
                    </a>
                    <a href="#preparations" className="btn-secondary">
                        רשימת ציוד לברית
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
