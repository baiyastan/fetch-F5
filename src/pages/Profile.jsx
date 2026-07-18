import React, { useState, useEffect } from 'react'
import Card from '../components/Card/Card'

const API = "https://dummyjson.com/products"

function Profile() {
    const [list, setList] = useState([])
    const [search, setSearch] = useState("")

    async function getProducts() {
        try {
            const res = await fetch(`${API}/search?q=${search}`)
            const data = await res.json()

            console.log(data);
            setList(data.products)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getProducts()
    }, [search])

    return (
        <div>
            <input
                type="text"
                placeholder='поиск'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "10px",
                    width: "300px",
                    fontSize: "18px",
                    borderRadius: "8px"
                }}
            />

            <div className='products'>
                {
                    list.length > 0 ? list.map((item) => (
                        <Card key={item.id} data={item} />
                    )) : (
                        <h3>Эч нерсе табылган жок</h3>
                    )
                }
            </div>
        </div>
    )
}

export default Profile
