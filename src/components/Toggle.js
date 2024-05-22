import React from 'react'
import './Toggle.css'

function Toggle({ handleChange, theme }) {
    return (
        <div className="toggle-container">
            <div
                className={`toggle-switch ${theme ? 'active' : ''}`}
                onClick={handleChange}
            ></div>
        </div>
    )
}

export default Toggle