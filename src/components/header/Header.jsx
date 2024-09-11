import { useEffect, useState } from 'react';
import './Header.css';
import confetti from 'canvas-confetti';

export default function Header() {
    const fireworkEffect = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            angle: 90,
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            fireworkEffect();
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className='header-container'>
                <div className="img-content">
                    <img src="./src/assets/6.png" alt="" width="300px" height="300px" />
                </div>
                <div className="content">
                    <h2>SAVE THE DAY</h2>
                    <p>
                        <span>Tuấn Đạt</span>
                        <small>&</small>
                        <span>Khánh Lan</span>
                    </p>
                    <div className="wedding-date">
                        08 Tháng 9 2024
                    </div>
                    <button>Gửi tiền cho Lan mua váy</button>
                </div>
                <div className="img-content">
                    <img src="./src/assets/7.webp" alt="" width="300px" height="300px" />
                </div>
            </div>
        </>
    );
}
