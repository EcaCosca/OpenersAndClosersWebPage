import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductNavbar from '../components/ProductNavBar/ProductNavBar'


const electronicos = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            <Navbar />
            <ProductNavbar />
            <h1>Cerraderos Electrónicos</h1>

        </div>
    )
}

export default electronicos
