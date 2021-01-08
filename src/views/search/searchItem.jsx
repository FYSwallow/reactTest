import React from 'react'

export default function SearchItem(props) {
    const { child_name, title, summary, url } = props.info
    return (
        <a className="search-item" href={url}>
            <div className="item-left">icon</div>
            <div className="item-right">
                <div className="item-name">{title}</div>
                <div className="item-tag">{child_name}</div>
                <p className="item-des">
                    {summary}
                </p>
            </div>
        </a>
    )
}