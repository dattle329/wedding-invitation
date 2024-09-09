import { useEffect, useState } from 'react';
import './Header.css';
import confetti from 'canvas-confetti';

export default function Header() {

    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-09-10T00:00:00');
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

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
            <div className="img-intro" id="img-intro">
                <div className="img-intro-main">
                    <img src="./src/assets/8.jpg" alt="" width="380px" height="380px" />
                    <img src="./src/assets/9.jpg" alt="" width="380px" height="380px" />
                </div>
                <h1>We are Getting Married</h1>
                <span>Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi.
                    Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó.
                    Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!</span>
                <span>Tuấn Đạt <p>&</p> Khánh Lan</span>
            </div>

            <div className="invitation">
                <div className="invitation-content">
                    <img src="./src/assets/wedding-invitation-bg.jpg" alt="" />
                    <div className="content">
                        <h2>Tuấn Đạt <small>&</small> Khánh Lan</h2>
                        <div className="invite-btn">
                            <button>GỬI LỜI CHÚC</button>
                            <button>XÁC NHẬN THAM DỰ</button>
                        </div>
                        <div className='date'>09 Tháng 9 2024</div>
                        <div className="countdown">
                            <div className='time-section'>
                                <div className="time">{timeLeft.days || '00'}</div>
                                <div className="label">Ngày</div>
                            </div>
                            <div className='time-section'>
                                <div className="time">{timeLeft.hours || '00'}</div>
                                <div className="label">Giờ</div>
                            </div>
                            <div className='time-section'>
                                <div className="time">{timeLeft.minutes || '00'}</div>
                                <div className="label">Phút</div>
                            </div>
                            <div className='time-section'>
                                <div className="time">{timeLeft.seconds || '00'}</div>
                                <div className="label">Giây</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
