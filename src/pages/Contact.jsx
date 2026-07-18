import React, { useState, useEffect } from 'react'

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list"

function Contact() {
    const [list, setList] = useState([])

    const [data, setData] = useState({ title: "", category: "", avatar: "", price: 0 })

    function handleChange(e) {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    async function getProduct() {
        try {
            const res = await fetch(API)
            const data = await res.json()
            console.log(data);
            setList(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])


    async function createProduct() {
        try {
            const res = await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            console.log(res);

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "420px",
                gap: "20px",
                marginLeft: "70px",
                marginTop: "70px"


            }}>
                <input
                    style={{ height: "37px", borderRadius: "19px", }}
                    type="text"
                    placeholder='Title'
                    value={data.title}
                    name='title'
                    onChange={handleChange}
                />
                <input
                    style={{ height: "37px", borderRadius: "19px", }}
                    type="text"
                    placeholder='category'
                    value={data.category}
                    name='category'
                    onChange={handleChange}
                />
                <input
                    style={{ height: "37px", borderRadius: "19px", }}
                    type="text"
                    placeholder='avatar'
                    value={data.avatar}
                    name='avatar'
                    onChange={handleChange}
                />
                <input
                    style={{ height: "37px", borderRadius: "19px", }}
                    type="text"
                    placeholder='price'
                    value={data.price}
                    name='price'
                    onChange={handleChange}
                />

                <button style={{
                    background: "green",
                    color: "white",
                    borderRadius: "17px",
                    width: "70px",
                    height: "40px",
                    border: "none",
                    fontSize: "17px"

                }} onClick={createProduct}>Add</button>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                    gap: '20px',
                    padding: '20px',
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            >
                {
                    list.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #f0f0f0',
                                fontFamily: 'system-ui, sans-serif'
                            }}
                        >

                            <div style={{ width: '100%', height: '200px', backgroundColor: '#f8f9fa' }}>
                                <img
                                    src={item.avatar}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>


                            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', color: '#8c8c8c', margin: '0 0 6px 0', letterSpacing: '0.5px' }}>
                                    {item.category}
                                </h5>
                                <h4 style={{ fontSize: '18px', color: '#262626', margin: '0 0 12px 0', fontWeight: '600', lineHeight: '1.4' }}>
                                    {item.title}
                                </h4>
                                <p style={{ fontSize: '20px', fontWeight: '700', color: '#ff4d4f', margin: 'auto 0 0 0', paddingTop: '8px' }}>
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Contact
