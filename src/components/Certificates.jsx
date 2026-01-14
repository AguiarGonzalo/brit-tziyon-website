import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import './Certificates.css'

const Certificates = () => {
    const [certImages, setCertImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const loadImages = async () => {
            const imageModules = import.meta.glob('../assets/images/certificates/*.{png,jpg,jpeg,PNG,JPG}')
            const loadedImages = await Promise.all(
                Object.values(imageModules).map((importImage) => importImage())
            )
            setCertImages(loadedImages.map((module) => module.default))
        }
        loadImages()
    }, [])

    return (
        <section className="certificates-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2>תעודות והסמכות</h2>
                    <div className="divider"></div>
                    <p className="section-subtitle">מוהל מוסמך על ידי הרבנות הראשית ומשרד הבריאות</p>
                </motion.div>

                <div className="certs-grid">
                    {certImages.map((imgSrc, index) => (
                        <motion.div
                            key={index}
                            layoutId={`cert-${index}`}
                            className="cert-card interactive-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedImage({ src: imgSrc, id: index })}
                        >
                            <div className="image-overlay">
                                <ZoomIn className="zoom-icon" size={32} />
                            </div>
                            <motion.img
                                src={imgSrc}
                                alt={`תעודת הסמכה ${index + 1}`}
                                layoutId={`img-${index}`}
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
                                layoutId={`cert-${selectedImage.id}`}
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            >
                                <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                                    <X size={24} />
                                </button>
                                <motion.img
                                    src={selectedImage.src}
                                    alt="Selected Certificate"
                                    layoutId={`img-${selectedImage.id}`}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Certificates
