import React from 'react'
import { Link } from 'react-router-dom'

function BlogItem({ blog: { id, description, title, createdAt, authorName, authorAvatar, category, cover } }) {
    return (
        <div className='blog-item'>
            <img src={cover} alt="cover" />
            <div className="chip"><p>{category}</p></div>
            <h3>{title}</h3>
            <p className="blog-item-desc">{description}</p>

            <footer>
                <div className="blog-item-author">
                    <img src={authorAvatar} alt="avatar" />
                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link className='blog-item-link' to={`/blog/${id}`}><i className='bx bx-right-arrow-alt bx-sm'></i></Link>
            </footer>
        </div>
    )
}

export default BlogItem