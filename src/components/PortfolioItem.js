import React from 'react'
import { Link } from 'react-router-dom'

function PortfolioItem({ project: { id, cover } }) {
    return (
        <div className='project'>
            <img src={cover} alt="project" />
            <h2>Work {id}</h2>
            <div className="project-btns">
                <Link className='blog-item-link' to={`/portfolio/${id}`}><button type='button'>Details</button></Link>
            </div>
        </div>
    )
}

export default PortfolioItem