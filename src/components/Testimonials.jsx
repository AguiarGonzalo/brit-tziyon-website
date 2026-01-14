import React from 'react';
import './Testimonials.css';
import review1 from '../assets/images/review1.png';
import review2 from '../assets/images/review2.png';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials">
            <div className="container">
                <h2 className="section-title">המלצות חמות</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <img src={review1} alt="המלצה 1" />
                    </div>
                    <div className="testimonial-card">
                        <img src={review2} alt="המלצה 2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
