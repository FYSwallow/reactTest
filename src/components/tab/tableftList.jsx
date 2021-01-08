import React from 'react'

export default function TabLeftList(props) {
    const {activeIndex, index, content, handleClick} = props
    return (
        <li className={['tab-left-item', activeIndex === index ? 'active' : ''].join(' ')} onClick={() => handleClick({index, id: content.id})}>
            {content.name}
        </li>
    )
}