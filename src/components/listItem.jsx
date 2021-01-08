import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem() {
    return (
        <Link className="list-item"
            to={{
                pathname: '/list',
                query: {
                    
                }
            }} style={{ color: 'black' }}>
            <div className='list-item-name'>
                度密度检查
            </div>
        </Link>
    )
}