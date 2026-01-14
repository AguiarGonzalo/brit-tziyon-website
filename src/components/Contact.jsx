import './Contact.css'
import './Contact.css'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>צרו קשר</h2>
                        <p className="contact-desc">
                            אשמח לעמוד לרשותכם בכל שאלה או התייעצות לקראת הברית.
                        </p>

                        <div className="info-item">
                            <span className="icon">📞</span>
                            <div>
                                <h3>טלפון</h3>
                                <a href="tel:0505323909" className="contact-link">050-5323909</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="icon"><FaWhatsapp /></span>
                            <div>
                                <h3>WhatsApp</h3>
                                <a
                                    href="https://wa.me/972505323909"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    לחצו כאן להודעה
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="icon"><FaInstagram /></span>
                            <div>
                                <h3>Instagram</h3>
                                <a
                                    href="https://www.instagram.com/p/DMIw4OWt7zA/?igsh=bnAzaGRrcjhqOHJr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    עקבו אחרינו באינסטגרם
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="icon">📍</span>
                            <div>
                                <h3>אזורי פעילות</h3>
                                <p className="contact-text">מגיע לכל רחבי הארץ</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <h3>השאירו פרטים ונחזור אליכם</h3>
                        <div className="form-group">
                            <input type="text" placeholder="שם מלא" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="טלפון" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="input-label">תאריך משוער</label>
                                <input type="date" required className="date-input" />
                            </div>
                            <div className="form-group">
                                <label className="input-label">שעה מועדפת</label>
                                <input type="time" className="time-input" />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="הודעה / הערות נוספות" rows="4"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">שליחה</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
