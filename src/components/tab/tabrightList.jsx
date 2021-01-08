import React from 'react'
import { Link } from 'react-router-dom'

export default function TabRightList(props) {
    const { content } = props
    return (
        <Link className='tab-right-item'
            to={{
                pathname: '/list',
                query: {
                    keyword: content.id
                }
            }} style={{ color: 'black' }}>
            <li>{content.name}</li>
        </Link>
    )
}