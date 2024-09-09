import { useEffect } from 'react';
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
                <img src="./src/assets/6.png" alt="" width="300px" height="300px"/>
            </div>
            <div className="content">
                <h2>SAVE THE DAY</h2>
                <p>
                    <span>Chu Khánh</span>
                    <small>&</small>
                    <span>Milo</span>
                </p>
                <div className="wedding-date">
                    08 Tháng 9 2024
                </div>
                <button>Gửi tiền cho Khánh mua váy</button>
            </div>
            <div className="img-content">
                 <img src="./src/assets/7.webp" alt="" width="300px" height="300px" />
            </div>
        </div>
        <div className="img-intro">
            <div className="img-intro-main">
                <img src="./src/assets/khanhsky.jpg" alt="" width="380px" height="380px"/>
                <img src="https://www.jerrygreendogs.org.uk/wp-content/uploads/dogs-archive-header-1.png" alt="" width="380px" height="380px"/>
            </div>
            <h1>We are Getting Married</h1>
            <span>Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi. 
                Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó. 
                Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!</span>
            <span>Chu Khánh <p>&</p> Con chó</span>
        </div>
        
        <div className="invitation">
            <div className="invitation-content">
                <img src="https://people.com/thmb/QU8_FbTRBMqLaF6zBidIE-_ffIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1079x532:1081x534)/dog-weddng-record-092722-2000-064c5df4ab8448cfb76581cc8449fdcb.jpg" alt="" />
                <div className="content">
                    <span>Chu Khánh & Con chó</span>
                    <span>Trân trọng kính mời</span>
                    <span>Tới dự Lễ Thành Hôn của chúng tôi:</span>
                    <div className='date'>09.09.24 </div>
                </div>
            </div>
        </div>
        </>
    );
}
