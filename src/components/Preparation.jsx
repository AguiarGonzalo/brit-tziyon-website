import React from 'react';
import './Preparation.css';

const Preparation = () => {
    return (
        <section className="section preparation">
            <div className="container">
                <h2 className="section-title">הכנות לברית המילה</h2>

                <div className="prep-grid">
                    <div className="prep-card">
                        <h3>השקיית התינוק</h3>
                        <span className="subtitle">כ-45 דקות לפני טקס הברית</span>
                        <ol>
                            <li>להרתיח מים ולתת להם להתקרר.</li>
                            <li>להכין תמיסה: 2 כפיות סוכר + 50cc מים.</li>
                            <li>לערבב היטב עד שהסוכר נמס.</li>
                            <li>להשקות את התינוק בתמיסה כ-45 דק' לפני הטקס.</li>
                        </ol>
                    </div>

                    <div className="prep-card">
                        <h3>ציוד מומלץ להכנה מראש</h3>
                        <ul className="check-list">
                            <li>שמן תינוקות או שמן שקדים</li>
                            <li>ויטה מרפן (משחה או תרסיס)</li>
                            <li>בפנטן פלוס (אם צריך)</li>
                            <li>30 טיטולים</li>
                            <li>מגבונים לחים</li>
                        </ul>
                    </div>

                    <div className="prep-card important">
                        <h3>האם תינוקכם כשיר?</h3>
                        <ul className="alert-list">
                            <li><strong>דלקות עיניים:</strong> דורשת התייחסות מיוחדת.</li>
                            <li><strong>צהבת:</strong> יש לוודא שהתינוק בריא ומוכן.</li>
                            <li>
                                <strong>בעיה רפואית אחרת:</strong> יש להתייעץ עם רופא והמוהל לפני הברית.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Preparation;
