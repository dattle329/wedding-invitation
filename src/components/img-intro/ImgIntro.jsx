import './ImgIntro.css'

export default function ImgIntro() {
    return (
        <section id="couple">
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
        </section>
    )
}