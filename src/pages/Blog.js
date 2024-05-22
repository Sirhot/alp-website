import React from 'react'
import "./Blog.css"
import BlogItem from '../components/BlogItem'
import { blogList } from '../config/data'

export default function Blog() {
    const [blogs, setBlogs] = React.useState(blogList)
    const [searchKey, setSearchKey] = React.useState("")

    //Search
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const allBlogs = blogList
        const filteredBlogs = allBlogs.filter((blog) => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()))

        setBlogs(filteredBlogs)
    }

    const handleClearSearch = () => {
        setBlogs(blogList)
        setSearchKey("")
    }

    return (
        <div>
            <section className='blog'>
                <div className="container">
                    <h1>Blog</h1>
                    <div className="search-bar">
                        <form onSubmit={handleSearchSubmit}>
                            <input type="text"
                                onChange={(e) => setSearchKey(e.target.value)}
                                placeholder='Search By Category'
                                value={searchKey}
                            />
                            {searchKey && <span onClick={handleClearSearch}>x</span>}
                            <button><i class='bx bx-search bx-sm'></i></button>
                        </form>
                    </div>
                    {!blogs.length ?
                        <div className="empty-list">
                            <i class='bx bx-error-circle bx-lg'></i>
                            <p>Not Found</p>
                        </div>
                        :
                        <div className="blog-list">
                            {blogs.map(blog => <BlogItem key={blog.id} blog={blog} />)}
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}
