import React from 'react'
import "./Portfolio.css"
import { portfolioList } from '../config/portfolio-data'
import PortfolioItem from '../components/PortfolioItem'
// if require method doesnt work: 
//     dont forget to install file-loader and url-loader
// npm install file-loader url-loader --save-dev

export default function Portfolio() {
    const portfolio = portfolioList
    return (
        <div>
            <section className="portfolio">
                <div className="container">
                    <h1>Portfolio</h1>
                    {!portfolio.length ?
                        <div className="empty-list">
                            <img src="/assets/images/13525-empty.gif" alt="empty" />
                        </div>
                        :
                        <div className="projects">
                            {portfolio.map(project => <PortfolioItem key={project.id} project={project} />)}
                        </div>
                    }
                </div>
            </section >
        </div >
    )
}
