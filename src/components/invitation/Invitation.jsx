import { useEffect, useState } from 'react';
import './Invitation.css'

export default function Invitation() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-09-15T00:00:00');
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
    return (
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
    )
}