import React, { useState, useEffect } from 'react'

const API = "https://jsonplaceholder.typicode.com/users"
function Home() {
    const [count, setCount] = useState(2)
    const [list, setList] = useState([])

    async function getUsers() {
        try {
            const res = await fetch(API)
            const data = await res.json()
            console.log(data);
            setList(data)
        } catch (error) {
            console.log(error);

        }
    }

    // getUsers()
    useEffect(() => {
        getUsers()
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            Home
            <div>
                {
                    list.map((item) => (
                        <div key={item.id}>
                            <h4>{item.username}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
