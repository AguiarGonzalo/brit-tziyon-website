import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './About.css'
import aboutHighlight from '../assets/images/about-highlight.webp'
import aboutImage from '../assets/images/about-image.webp'
import aboutAction from '../assets/images/about-action.webp'
import aboutPortrait from '../assets/images/about-portrait.webp'
import aboutRabbi from '../assets/images/about-rabbi.webp'
import aboutEvent from '../assets/images/about-event.webp'
import aboutGrid1 from '../assets/images/about-grid-1.webp'
import aboutGrid2 from '../assets/images/about-grid-2.webp'
import aboutGrid3 from '../assets/images/about-grid-3.webp'
import aboutGrid4 from '../assets/images/about-grid-4.webp'
import babaSali from '../assets/images/gallery/baba-sali.webp'

import { ShieldCheck, Star, HeartHandshake, Sparkles } from 'lucide-react'

const About = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const features = [
        {
            title: "שקט נפשי לאמא ולתינוק",
            description: "למעלה מ-42 שנות ניסיון ולמעלה מ-17,000 בריתות של ניסיון ומקצועיות ואלפי המלצות.",
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

    const allImages = [
        { src: aboutHighlight, alt: "המוהל ציון שטרית מחזיק תינוק" },
        { src: babaSali, alt: 'הרב שטרית עם הבבא סאלי זצוק"ל', caption: 'הרב שטרית מלווה בברכת הרבנים, בראשם "הבבא סאלי" זצוק"ל, שסמך ידיו על ראשו וברכו להצלחה' },
        { src: aboutImage, alt: "המוהל ציון שטרית" },
        { src: aboutAction, alt: "בברית מילה" },
        { src: aboutRabbi, alt: "עם הרב באבא ברוך" },
        { src: aboutPortrait, alt: "ציון שטרית" },
        { src: aboutEvent, alt: "אירוע ברית" },
        { src: aboutGrid1, alt: "תמונת גלריה" },
        { src: aboutGrid3, alt: "תמונת גלריה" },
        { src: aboutGrid4, alt: "תמונת גלריה" },
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
                            <div
                                className="img-card main-img-large about-clickable"
                                onClick={() => setSelectedImage(allImages[0])}
                            >
                                <img src={aboutHighlight} alt="המוהל ציון שטרית מחזיק תינוק" />
                            </div>
                        </div>

                        {/* 3x3 Grid (Right Column) */}
                        <div className="gallery-sub-grid">
                            {allImages.slice(1).map((img, index) => (
                                <div
                                    key={index}
                                    className="img-card sub-img about-clickable"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img src={img.src} alt={img.alt} />
                            </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Text Container */}
                    <motion.div
                        className="about-text-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-text-content">
                            <p className="introduction">
                                נעים להכיר, שמי ציון שטרית.
                            </p>
                            <p>
                                אני מוהל מוסמך ומומחה עם ותק של <span className="highlight-gold">מעל 42 שנה</span>. במהלך השנים זכיתי להכניס <span className="highlight-gold">למעלה מ-17,000 תינוקות</span> בבריתו של אברהם אבינו.
                            </p>
                            <p>
                                אני רואה במקצוע שלי <span className="highlight-blue">שליחות קודש</span> ומקפיד על קלה כחמורה, הן בפן ההלכתי והן בפן הרפואי והסטרילי. אני מלווה את המשפחה ברגישות ובמקצועיות, מהרגע הראשון ועד להחלמה המלאה.
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

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="about-lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="about-lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="about-lightbox-close"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={24} />
                            </button>
                            <img src={selectedImage.src} alt={selectedImage.alt} />
                            {selectedImage.caption && (
                                <p className="about-lightbox-caption">{selectedImage.caption}</p>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default About
