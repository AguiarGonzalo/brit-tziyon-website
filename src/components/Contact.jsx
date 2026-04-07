import React from 'react'
import './Contact.css'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { CONTACT } from '../config'

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });

    const [phoneError, setPhoneError] = React.useState('');

    const validatePhone = (phone) => {
        // Remove spaces and dashes
        const cleaned = phone.replace(/[\s\-]/g, '')
        // Israeli phone: 10 digits starting with 0, or +972 format
        const israeliPhone = /^0[2-9]\d{7,8}$/.test(cleaned)
        const internationalPhone = /^\+?972[2-9]\d{7,8}$/.test(cleaned)
        return israeliPhone || internationalPhone
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (name === 'phone') {
            setPhoneError('')
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, date, time, message } = formData;

        if (!validatePhone(phone)) {
            setPhoneError('נא להזין מספר טלפון ישראלי תקין (לדוגמה: 050-1234567)')
            return
        }

        const text = [
            'שלום, אשמח לפרטים לגבי ברית מילה.',
            '',
            `*שם:* ${name}`,
            `*טלפון:* ${phone}`,
            `*תאריך משוער:* ${date}`,
            `*שעה מועדפת:* ${time || 'לא צוין'}`,
            `*הודעה:* ${message || 'ללא הודעה נוספת'}`,
        ].join('\n');

        const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

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
                                <a href={`tel:${CONTACT.phone}`} className="contact-link">{CONTACT.phoneDisplay}</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="icon"><FaWhatsapp /></span>
                            <div>
                                <h3>WhatsApp</h3>
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp}`}
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
                                    href={CONTACT.instagramUrl}
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
                                placeholder="טלפון (לדוגמה: 050-1234567)"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className={phoneError ? 'input-error' : ''}
                            />
                            {phoneError && (
                                <p className="field-error">{phoneError}</p>
                            )}
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
