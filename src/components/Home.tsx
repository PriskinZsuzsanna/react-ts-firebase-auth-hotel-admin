import React, { useState, useEffect } from 'react'
import './Card.css'
import Card from './Card'
import { NewHotelType } from '../types/hotel'

interface IProps {
  hotels: NewHotelType[]
}


const Home = ({hotels}: IProps) => {


  return (
    <section>
      <div className="container">
        <h1>Hotels</h1>
        <div className="card-container">
          {hotels.map((hotel) => (
            <Card
              hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
