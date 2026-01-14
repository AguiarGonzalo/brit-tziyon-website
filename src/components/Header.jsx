import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <h1>המוהל ציון שטרית</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><button onClick={() => scrollToSection('about')}>אודות</button></li>
                        <li><button onClick={() => scrollToSection('testimonials')}>המלצות</button></li>
                        <li><button onClick={() => scrollToSection('gallery')}>גלריה</button></li>
                        <li><button onClick={() => scrollToSection('contact')}>צור קשר</button></li>
                    </ul>
                </nav>
                <div className="mobile-menu-toggle">
                    {/* Mobile menu icon implementation could go here */}
                </div>
            </div>
        </header>
    );
};

export default Header;
