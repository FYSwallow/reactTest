import React from 'react'
import './index.css'

export default function TabContainer(props) {
    const {renderLeft, renderRight} = props

    return (
        <div className="tab-container">
            <div className="tab-left">
                <ul className="tab-left-list">
                    {renderLeft}
                </ul>
            </div>
            <div className="tab-right">
                <ul className="tab-right-list">
                    {renderRight}
                </ul>
            </div>
        </div>
    )
}