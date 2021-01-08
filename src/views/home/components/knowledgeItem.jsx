import React from 'react'

export default function knowledgeItem(props) {
    const { title, imgSrc, category } = props.info
    return (
        <div className='knowledge-item' title={title} category={category}>
            <img src={imgSrc} alt={title}/>
        </div>
    )
}