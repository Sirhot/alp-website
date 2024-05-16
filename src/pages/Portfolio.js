import React from 'react'
// if require method doesnt work: 
//     dont forget to install file-loader and url-loader
// npm install file-loader url-loader --save-dev

export default function Portfolio() {

    const [img, setImg] = React.useState("")
    const images = ["project1", "project2", "project3"]

    const clickHandler = (event) => {
        images.forEach(element => {
            if (element === event.target.name) {
                setImg(element)
            }
        });

    }

    return (
        <div>
            <section className="portfolio">
                <div className="container">
                    <h1>Portfolio</h1>
                    <div className="projects">
                        <div className="project">
                            <img src={require(`../images/project1.jpg`)} alt="project1" />
                            <h2>Work 1</h2>
                            <div className="project-btns">
                                <button type='button' name='project1' onClick={clickHandler}>Details</button>
                            </div>
                        </div>
                        <div className="project">
                            <img src={require('../images/project2.jpg')} alt="project2" />
                            <h2>Work 2</h2>
                            <div className="project-btns">
                                <button type='button' name='project2' onClick={clickHandler}>Details</button>
                            </div>
                        </div>
                        <div className="project">
                            <img src={require('../images/project3.jpg')} alt="project3" />
                            <h2>Work 3</h2>
                            <div className="project-btns">
                                <button type='button' name='project3' onClick={clickHandler}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                {img &&
                    <div id='focused-img'>
                        <div id='details'>
                            <img src={require(`../images/${img}.jpg`)} alt="dynamic"></img>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic alias, ducimus facere nihil est corporis. Blanditiis voluptatibus sint reiciendis quisquam, incidunt vitae quam voluptatum. Facere!</p>
                        </div>
                        <span onClick={() => (setImg(""))}>x</span>
                    </div>}
            </section >
        </div >
    )
}
