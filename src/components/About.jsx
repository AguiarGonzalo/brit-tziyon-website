import { motion } from 'framer-motion'
import './About.css'
import aboutHighlight from '../assets/images/about-highlight.jpg'
import aboutImage from '../assets/images/about-image.jpg'
import aboutAction from '../assets/images/about-action.jpg'
import aboutPortrait from '../assets/images/about-portrait.jpg'
import aboutRabbi from '../assets/images/about-rabbi.jpg'
import aboutEvent from '../assets/images/about-event.jpg'
import aboutGrid1 from '../assets/images/about-grid-1.jpg'
import aboutGrid2 from '../assets/images/about-grid-2.jpg'
import aboutGrid3 from '../assets/images/about-grid-3.jpg'
import aboutGrid4 from '../assets/images/about-grid-4.jpg'

import { ShieldCheck, Star, HeartHandshake, Sparkles } from 'lucide-react'

const About = () => {
    const features = [
        {
            title: "שקט נפשי לאמא ולתינוק",
            description: "למעלה מ-40 שנות ניסיון ולמעלה מ-15,000 בריתות של ניסיון ומקצועיות ואלפי המלצות.",
            icon: <ShieldCheck size={40} strokeWidth={1.5} />
        },
        {
            title: "טקס מרגש ובלתי נשכח",
            description: "עריכת טקס חווייתי המשאיר רושם חיובי לכל המשפחה בשילוב שירים ופיוטים.",
            icon: <Star size={40} strokeWidth={1.5} />
        },
        {
            title: "ליווי מלא לאחר הברית",
            description: "זמינות לכל שאלה ובקשה בכל שלב. ביקור בית יום לאחר הברית לבדיקה והדרכה.",
            icon: <HeartHandshake size={40} strokeWidth={1.5} />
        },
        {
            title: "כלים סטריליים לכל תינוק",
            description: "כל תינוק מקבל ערכה סטרילית אישית הנפתחת אך ורק בזמן הברית.",
            icon: <Sparkles size={40} strokeWidth={1.5} />
        }
    ]

    return (
        <section className="about-section">
            <div className="container">
                <div className="about-header">
                    <h2>אודות המוהל ציון שטרית</h2>
                    <div className="divider"></div>
                </div>

                <div className="about-content-wrapper">
                    <motion.div
                        className="about-gallery-grid"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Main Large Portrait (Left Column) */}
                        <div className="gallery-main-col">
                            <div className="img-card main-img-large">
                                <img src={aboutHighlight} alt="המוהל ציון שטרית מחזיק תינוק" />
                            </div>
                        </div>

                        {/* 3x3 Grid (Right Column) - All 9 remaining images */}
                        <div className="gallery-sub-grid">
                            <div className="img-card sub-img">
                                <img src={aboutImage} alt="המוהל ציון שטרית" />
                            </div>
                            <div className="img-card sub-img">
                                <img src={aboutAction} alt="בברית מילה" />
                            </div>
                            <div className="img-card sub-img">
                                <img src={aboutRabbi} alt="עם הרב באבא ברוך" />
                            </div>
                            <div className="img-card sub-img">
                                <img src={aboutPortrait} alt="ציון שטרית" />
                            </div>
                            <div className="img-card sub-img">
                                <img src={aboutEvent} alt="אירוע ברית" />
                            </div>
                            <div className="img-card sub-img">
                                <img src={aboutGrid1} alt="תמונת גלריה" />
                            </div>
                            <div className="img-card sub-img">
                                <img src={aboutGrid2} alt="תמונת גלריה" />
                            </div>
                            <div className="img-card sub-img">
                                <img src={aboutGrid3} alt="תמונת גלריה" />
                            </div>
                            <div className="img-card sub-img">
                                <img src={aboutGrid4} alt="תמונת גלריה" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Container... */}
                    <motion.div
                        className="about-text-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-text-content">
                            <p>
                                <span className="highlight-text">נעים להכיר, שמי ציון שטרית.</span>
                            </p>
                            <p>
                                אני מוהל מוסמך עם ותק של <span className="gold-accent">מעל 40 שנה</span>. במהלך השנים זכיתי להכניס <span className="gold-accent">למעלה מ-15,000 תינוקות</span> בבריתו של אברהם אבינו.
                            </p>
                            <p>
                                אני רואה במקצוע שלי <strong>שליחות קודש</strong> ומקפיד על קלה כחמורה, הן בפן ההלכתי והן בפן הרפואי והסטרילי. אני מלווה את המשפחה ברגישות ובמקצועיות, מהרגע הראשון ועד להחלמה המלאה.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
