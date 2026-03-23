import React from 'react'
import './Contact.css'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, date, time, message } = formData;

        const whatsappMessage = `שלום, אשמח לפרטים לגבי ברית מילה.%0A%0A*שם:* ${name}%0A*טלפון:* ${phone}%0A*תאריך משוער:* ${date}%0A*שעה מועדפת:* ${time || 'לא צוין'}%0A*הודעה:* ${message || 'ללא הודעה נוספת'}`;

        const whatsappUrl = `https://wa.me/972505323909?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');
    };

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

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3>השאירו פרטים ונחזור אליכם</h3>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="שם מלא"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="טלפון"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="input-label">תאריך משוער</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="date-input"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="input-label">שעה מועדפת</label>
                                <input
                                    type="time"
                                    name="time"
                                    className="time-input"
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="הודעה / הערות נוספות"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <FaWhatsapp /> שליחה ל-WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
