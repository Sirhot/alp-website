import React from 'react'
import "./BlogPage.css"
import { useParams, Link } from 'react-router-dom'
import { blogList } from "../config/data"

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = React.useState(null);

    React.useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id))

        if (blog) {
            setBlog(blog)
        }
    }, []);

    return (
        <div>
            <section className="blogpage">
                <div className="container">
                    {blog ?
                        (<div className="blogpage-wrap">
                            <header>
                                <p className="blogpage-date">Published {blog.createdAt}</p>
                                <h1>{blog.title}</h1>
                                <div className="blogpage-sub">
                                    {blog.subCategory.map((category, index) => (
                                        <div className="chip"><p>{category}</p></div>
                                    ))}
                                </div>
                            </header>
                            <img src={blog.cover} alt="cover" />
                            <p className='blogpage-desc'>{blog.description}</p>

                        </div>) :
                        (<div className="empty-list">
                            <i class='bx bx-error-circle bx-lg'></i>
                            <p>Not Found</p>
                        </div>)
                    }
                    <Link className='blogpage-goback' to='/blog'>
                        <span>&#8592;</span> Go Back
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default BlogPage