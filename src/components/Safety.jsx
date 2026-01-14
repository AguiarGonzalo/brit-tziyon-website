import { motion } from 'framer-motion'
import { ShieldCheck, Activity, CheckCircle2, Stethoscope, Syringe } from 'lucide-react'
import './Safety.css'

const Safety = () => {
    return (
        <section className="safety-section">
            <div className="container">
                <div className="safety-content">

                    {/* Right Side: Content & List */}
                    <motion.div
                        className="safety-text-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="badge-container">
                            <span className="premium-badge">
                                <ShieldCheck size={16} />
                                סטנדרט רפואי מחמיר
                            </span>
                        </div>
                        <h2>בטיחות וסטריליות <span className="gold-text">מעל הכל</span></h2>
                        <p className="lead-text">
                            הבריאות של התינוק שלכם היא הדבר החשוב ביותר.
                            אני מקפיד על פרוטוקולים רפואיים מחמירים, שימוש בציוד מתקדם וסטריליזציה ברמה של חדר ניתוח.
                        </p>

                        <ul className="safety-feature-list">
                            {[
                                { text: "ערכה אישית וסטרילית (Autoclave) הנפתחת מולכם", icon: <CheckCircle2 /> },
                                { text: "שימוש בחומרים חד-פעמיים באישור משרד הבריאות", icon: <CheckCircle2 /> },
                                { text: "כפפות סטריליות וחיטוי יסודי לכל אורך הטקס", icon: <CheckCircle2 /> },
                                { text: "זמינות מקסימלית למעקב וביקורת ביום שאחרי", icon: <CheckCircle2 /> }
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="icon-wrapper">{item.icon}</span>
                                    <span className="feature-text">{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Left Side: Visual "Card" Element */}
                    <motion.div
                        className="safety-visual-col"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="sterility-card-3d">
                            <div className="card-floating-icon top-right">
                                <Activity strokeWidth={1.5} />
                            </div>
                            <div className="card-content">
                                <div className="shield-icon-large">
                                    <ShieldCheck strokeWidth={1} />
                                </div>
                                <h3>אחריות רפואית מלאה</h3>
                                <p>התחייבות לבטיחות מקסימלית ותנאים סניטריים מוקפדים, ממש כמו בחדר ניתוח.</p>
                                <div className="card-badge">
                                    <Stethoscope size={18} />
                                    <span>מוהל מוסמך</span>
                                </div>
                            </div>
                            {/* Decorative Background Blur */}
                            <div className="glow-effect"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Safety
