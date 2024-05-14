import React from 'react'
import about_image from '../images/about.jpg'

export default function About() {
    return (
        <div>
            <section className="about">
                <div className="container">
                    <h1>About Me</h1>
                    <div className='details'>
                        <img src={about_image} alt="about_image" />
                        <div className="intro">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error sunt mollitia harum, ab distinctio molestiae sed eligendi soluta possimus a officia delectus. Animi optio, numquam assumenda quod adipisci molestiae eius?</p>
                            <div className="exp_school">
                                <div className="exp">
                                    <div>
                                        <i class='bx bx-trophy'></i>
                                        <p>Experience</p>
                                    </div>
                                    <p>2+ years</p>
                                    <p>Freelancer as Illusrator</p>
                                </div>
                                <div className="school">
                                    <div>
                                        <i class='bx bxs-graduation'></i>
                                        <p>Education</p>
                                    </div>
                                    <p>Bachelors Degree</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
