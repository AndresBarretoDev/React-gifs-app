import React from 'react'

export const GifGridItem = ({id, url, title}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <div className="card__body">
                <p>{title}</p>
            </div>
        </div>
    )
}
