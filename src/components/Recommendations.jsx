import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import './Recommendations.css'

const Recommendations = () => {
    const [recImages, setRecImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const loadImages = async () => {
            const imageModules = import.meta.glob('../assets/images/recommendations/*.{png,jpg,jpeg,PNG,JPG}')
            const loadedImages = await Promise.all(
                Object.values(imageModules).map((importImage) => importImage())
            )
            setRecImages(loadedImages.map((module) => module.default))
        }
        loadImages()
    }, [])

    return (
        <section className="recommendations-section">
            <div className="container">
                <div className="section-header">
                    <h2>המלצות ותודות</h2>
                    <div className="divider"></div>
                    <p>מכתבי תודה ממשפחות ורבנים</p>
                </div>

                <div className="testimonials-grid gallery-mode">
                    {recImages.map((imgSrc, index) => (
                        <motion.div
                            key={index}
                            layoutId={`rec-${index}`}
                            className="testimonial-image-card interactive-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImage({ src: imgSrc, id: index })}
                        >
                            <div className="image-overlay">
                                <ZoomIn className="zoom-icon" size={32} />
                            </div>
                            <motion.img
                                src={imgSrc}
                                alt={`מכתב המלצה ${index + 1}`}
                                loading="lazy"
                                layoutId={`img-rec-${index}`}
                            />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="lightbox-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                className="lightbox-content"
                                layoutId={`rec-${selectedImage.id}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                                    <X size={24} />
                                </button>
                                <motion.img
                                    src={selectedImage.src}
                                    alt="Selected Recommendation"
                                    layoutId={`img-rec-${selectedImage.id}`}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Recommendations
