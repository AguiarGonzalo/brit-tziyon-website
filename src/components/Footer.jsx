import './Footer.css'
import { FaInstagram } from 'react-icons/fa'

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
                        <a href="tel:0505323909">050-5323909</a>
                        <a
                            href="https://www.instagram.com/p/DMIw4OWt7zA/?igsh=bnAzaGRrcjhqOHJr"
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
                    <p>© 2024 כל הזכויות שמורות - ברית ציון</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
