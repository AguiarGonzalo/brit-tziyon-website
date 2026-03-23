import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        const loadImages = async () => {
            const imageModules = import.meta.glob('../assets/images/gallery/*.{png,webp,jpg,jpeg,PNG,JPG}');
            const loadedImages = await Promise.all(
                Object.values(imageModules).map((importImage) => importImage())
            );
            setImages(loadedImages.map((module) => module.default));
        };
        loadImages();
    }, []);

    return (
        <section id="gallery" className="section gallery">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">גלריה</h2>
                    <div className="divider mx-auto"></div>
                </div>

                <div className="gallery-grid">
                    {images.length > 0
                        ? images.map((imgSrc, index) => (
                            <motion.div
                                className="gallery-item"
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedImage({ src: imgSrc, index })}
                            >
                                <div className="gallery-overlay">
                                    <ZoomIn className="gallery-zoom-icon" size={32} />
                                </div>
                                <img src={imgSrc} alt={`טקס ברית ${index + 1}`} loading="lazy" />
                            </motion.div>
                        ))
                        : Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="gallery-item skeleton" />
                        ))
                    }
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="gallery-lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="gallery-lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="gallery-lightbox-close"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={24} />
                            </button>
                            <img src={selectedImage.src} alt={`טקס ברית ${selectedImage.index + 1}`} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
