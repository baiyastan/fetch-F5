import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API = "https://dummyjson.com/products"
function Detail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    async function getProductById() {
        try {
            const res = await fetch(`${API}/${id}`)
            const data = await res.json()
            console.log(data);
            setProduct(data)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getProductById()
    }, [])

    return (
        <div>
            Detail
            <h1>{id}</h1>
            <img src={product.thumbnail} alt="" />
        </div>
    )
}

export default Detail
