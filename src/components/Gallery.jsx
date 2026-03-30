import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';
import babaSaliImg from '../assets/images/gallery/baba-sali.webp';

const BABA_SALI_CAPTION = 'הרב שטרית מלווה בברכת הרבנים, בראשם "הבבא סאלי" זצוק"ל, שסמך ידיו על ראשו וברכו להצלחה';

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
            const imageModules = import.meta.glob('../assets/images/gallery/*.webp');
            const loadedImages = await Promise.all(
                Object.entries(imageModules)
                    .filter(([path]) => !path.includes('baba-sali'))
                    .map(([, importImage]) => importImage())
            );
            const otherImages = loadedImages.map((module) => ({ src: module.default, caption: null }));
            // Insert baba-sali as the second image (index 1)
            const ordered = [
                otherImages[0],
                { src: babaSaliImg, caption: BABA_SALI_CAPTION },
                ...otherImages.slice(1)
            ].filter(Boolean);
            setImages(ordered);
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
                        ? images.map((img, index) => (
                            <motion.div
                                className={`gallery-item${img.caption ? ' gallery-item-featured' : ''}`}
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedImage({ src: img.src, caption: img.caption, index })}
                            >
                                <div className="gallery-overlay">
                                    <ZoomIn className="gallery-zoom-icon" size={32} />
                                </div>
                                <img src={img.src} alt={img.caption || `טקס ברית ${index + 1}`} loading="lazy" />
                                {img.caption && (
                                    <div className="gallery-item-caption">{img.caption}</div>
                                )}
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
                            <img src={selectedImage.src} alt={selectedImage.caption || `טקס ברית ${selectedImage.index + 1}`} />
                            {selectedImage.caption && (
                                <p className="gallery-lightbox-caption">{selectedImage.caption}</p>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
