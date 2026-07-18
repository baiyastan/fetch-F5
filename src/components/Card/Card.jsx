import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card({ data }) {
    return (
        <div className='card'>
            <Link to={`/detail/${data.id}`}>
                <img src={data.thumbnail} alt="" />
            </Link>
            <h3>{data.title}</h3>
        </div>
    )
}

export default Card
