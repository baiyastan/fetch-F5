import React, { useState, useEffect } from 'react'

const API = "https://dummyjson.com/products"

function Profile() {
    const [list, setList] = useState([])

    async function getProducts() {
        try {
            const res = await fetch(API)
            const data = await res.json()

            console.log(data);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            Profile
        </div>
    )
}

export default Profile
