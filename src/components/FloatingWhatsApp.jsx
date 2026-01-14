import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/972505323909"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default FloatingWhatsApp;
