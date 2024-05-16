import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'

export default function Blog({ value, handleSearchKey, clearSearch, formSubmit }) {
    return (
        <div>
            <section className='blog'>
                <div className="container">
                    <h1>Blog</h1>
                    <div className="search-bar">
                        <form onSubmit={formSubmit}>
                            <input type="text"
                                onChange={handleSearchKey}
                                placeholder='Search By Category'
                                value={value}
                            />
                            {value && <span onClick={clearSearch}>x</span>}
                            <button>Go</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
