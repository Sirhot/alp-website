import React from 'react'
import "./Home.css"

export default function Home() {
    return (
        <div>
            <section className='home'>
                <div className="home-content">
                    <h1>Hi, I'm X</h1>
                    <h3>Illustrator</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt id soluta possimus modi? Aliquid, quos ullam et atque cumque dolor maxime saepe?</p>
                    <div className="btn-box">
                        <a href="#">Download CV</a>
                        <a href="#">Hire Me</a>
                    </div>
                </div>
                <div className="home-sci">
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-linkedin' ></i></a>
                    <a href="#"><i class='bx bx-envelope'></i></a>
                </div>
                <div className="home-image">
                    <img src="/assets/images/main-images/main-image.jpg" alt="main_image" />
                </div>
            </section>
        </div>
    )
}
