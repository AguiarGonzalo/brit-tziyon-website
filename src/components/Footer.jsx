import './Footer.css'
import { FaInstagram } from 'react-icons/fa'
import { CONTACT } from '../config'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>ברית ציון</h3>
                        <p>המוהל ציון שטרית - מוהל מוסמך ומומחה</p>
                    </div>
                    <div className="footer-contact">
                        <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
                        <a
                            href={CONTACT.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} כל הזכויות שמורות - ברית ציון</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
