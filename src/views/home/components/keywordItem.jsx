import React from 'react'
import { Link } from 'react-router-dom'

export default function KeywordItem(props) {
    const { name, id } = props.info
    return (
        <Link tag="li"
            to={{
                pathname: '/search',
                query: {
                    keyword: name
                }
            }} style={{ color: 'black' }}>
            <div className='keyword-item'>{name}</div>
        </Link>

    )
}