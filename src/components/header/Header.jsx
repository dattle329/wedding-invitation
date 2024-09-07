import { useEffect, useRef } from 'react';
import './Header.css';
import confetti from 'canvas-confetti';

export default function Header() {
    const canvasRefs = [useRef(null), useRef(null)];

    useEffect(() => {
        const [canvas1, canvas2] = canvasRefs.map(ref => ref.current);
        const ctx1 = canvas1.getContext('2d');
        const ctx2 = canvas2.getContext('2d');

        const setupCanvas = (canvas, ctx) => {
            const imgContent = canvas.parentElement;
            const width = imgContent.offsetWidth;
            const height = imgContent.offsetHeight;
            canvas.width = width;
            canvas.height = height;

            const imageSources = [
                './src/assets/1.jpg',
                './src/assets/2.jpg',
                './src/assets/3.jpg',
                './src/assets/4.jpg',
                './src/assets/5.jpg'
            ]; // Link đến các ảnh của bạn
            const imgWidth = 200; // Kích thước cố định của ảnh
            const imgHeight = 300;
            const maxImages = imageSources.length;

            // Tạo danh sách các ảnh để rơi
            const images = [];
            let nextImageIndex = 0;

            function createImage(src) {
                const img = new Image();
                img.src = src;
                return {
                    x: (nextImageIndex * (imgWidth + 10)) % (width - imgWidth), // Đảm bảo không chồng lên nhau
                    y: Math.random() * -height,
                    size: { width: imgWidth, height: imgHeight },
                    speed: 0.5,
                    img: img
                };
            }

            // Tạo các ảnh ban đầu
            function initializeImages() {
                for (let i = 0; i < maxImages; i++) {
                    images.push(createImage(imageSources[i % imageSources.length]));
                    nextImageIndex++;
                }
            }

            initializeImages();

            function drawImage(image) {
                ctx.drawImage(image.img, image.x, image.y, image.size.width, image.size.height);
            }

            function updateImages() {
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    image.y += image.speed;
                    if (image.y > height) {
                        // Khi ảnh rơi ra khỏi màn hình, đặt lại y và cập nhật vị trí x
                        image.y = -image.size.height;
                        image.x = (i * (imgWidth + 10)) % (width - imgWidth);
                    }
                }
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);
                updateImages();
                images.forEach(drawImage);
                requestAnimationFrame(animate);
            }

            animate();

            const handleResize = () => {
                canvas.width = imgContent.offsetWidth;
                canvas.height = imgContent.offsetHeight;
                // Điều chỉnh lại vị trí ảnh khi thay đổi kích thước
                images.forEach((image, index) => {
                    image.x = (index * (imgWidth + 10)) % (width - imgWidth);
                });
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        };

        // Setup canvas for both img-content divs
        setupCanvas(canvas1, ctx1);
        setupCanvas(canvas2, ctx2);
    }, [canvasRefs]);

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
                <canvas ref={canvasRefs[0]}></canvas>
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
                <canvas ref={canvasRefs[1]}></canvas>
            </div>
        </div>
        
        </>
    );
}
