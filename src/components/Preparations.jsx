import { motion } from 'framer-motion'
import { Share2 } from 'lucide-react'
import './Preparations.css'

const Preparations = () => {
    const whatToBring = [
        '4 חיתולי בד',
        '5 טיטולים',
        'בשמים (הדסים, נענע, ריחן וכדומה)',
        'יין / מיץ ענבים תירוש',
        'משחה ויטה מרפן Vita Merfen',
        'סירופ אקמולי + מזרק / נובימול',
        'שמן תינוקות / שמן שקדים',
        'כרית בינונית (רצוי קשה מעט)',
        '2 טליתות (לסנדק, אבי הבן)',
        'צלחת חול קטנה'
    ]

    const handleShare = async () => {
        const text = `רשימת ציוד לברית המילה - ברית ציון:\n\n${whatToBring.map(item => `- ${item}`).join('\n')}\n\nהרבה מצב רוח טוב\nנתראה בשמחות!`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'רשימת ציוד לברית',
                    text: text,
                })
            } catch (err) {
                console.log('Error sharing:', err)
            }
        } else {
            // Fallback to WhatsApp
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        }
    }

    return (
        <section className="preparations-section" id="preparations">
            <div className="container">
                <div className="section-header">
                    <h2>הכנות לברית המילה</h2>
                    <div className="divider"></div>
                    <p className="subtitle">רשימת ציוד והנחיות חשובות לקראת הטקס</p>
                </div>

                <div className="prep-grid">
                    {/* Instructions Column */}
                    <motion.div
                        className="prep-card instructions"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>הנחיות חשובות לפני הברית</h3>

                        <div className="alert-box top-alert">
                            <strong>חשוב!</strong>
                            <p>אין להאכיל את התינוק שעה ורבע לפני הברית.</p>
                        </div>

                        <div className="instruction-step">
                            <p>להשקות את התינוק כ-45 דקות לפני הברית.</p>
                        </div>

                        <h4 className="sub-instruction-title">אופן הכנת התמיסה:</h4>

                        <div className="instruction-step">
                            <span className="step-number">1</span>
                            <p>יש להרתיח 50cc מים + 2 כפיות סוכר רגיל.</p>
                        </div>
                        <div className="instruction-step">
                            <span className="step-number">2</span>
                            <p>לערבב היטב עד להמסה מלאה.</p>
                        </div>
                    </motion.div>

                    {/* Checklist Card */}
                    <div className="prep-card">
                        <div className="card-header-row">
                            <h3>מה להביא לברית?</h3>
                            <button onClick={handleShare} className="share-btn" title="שתף רשימה">
                                <Share2 size={18} />
                                שתף רשימה
                            </button>
                        </div>
                        <ul className="items-list">
                            {whatToBring.map((item, index) => (
                                <li key={index}>
                                    <label htmlFor={`item-${index}`}>{item}</label>
                                    <input type="checkbox" id={`item-${index}`} />
                                </li>
                            ))}
                        </ul>
                        <div className="checklist-footer">
                            <p>הרבה מצב רוח טוב</p>
                            <p className="highlight-gold">נתראה בשמחות!</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Preparations
