import React from 'react'
import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'

export default function Portfolio() {
    return (
        <div>
            <section className="portfolio">
                <div className="container">
                    <h1>Portfolio</h1>
                    <div className="projects">
                        <div className="project">
                            <img src={project1} alt="project1" />
                            <h2>Work 1</h2>
                            <div className="project-btns">
                                <a href="#">Details</a>
                            </div>
                        </div>
                        <div className="project">
                            <img src={project2} alt="project2" />
                            <h2>Work 2</h2>
                            <div className="project-btns">
                                <a href="#">Details</a>
                            </div>
                        </div>
                        <div className="project">
                            <img src={project3} alt="project3" />
                            <h2>Work 3</h2>
                            <div className="project-btns">
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
