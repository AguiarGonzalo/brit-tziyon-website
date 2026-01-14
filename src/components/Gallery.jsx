import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const imageModules = import.meta.glob('../assets/images/gallery/*.{png,jpg,jpeg,PNG,JPG,psd}');
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

                {images.length > 0 ? (
                    <div className="gallery-grid">
                        {images.map((imgSrc, index) => (
                            <div className="gallery-item" key={index}>
                                <img src={imgSrc} alt={`טקס ברית ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center">טוען תמונות...</p>
                )}
            </div>
        </section>
    );
};

export default Gallery;
