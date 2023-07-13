import React, { useState, useEffect } from 'react'
import './Card.css'
import Card from './Card'
import { NewHotelType } from '../types/hotel'
import Footer from './Footer'

interface IProps {
  hotels: NewHotelType[]
  isLoading: boolean
}


const Home = ({ hotels, isLoading }: IProps) => {

  return (
    isLoading ? (
      <section className='loading-section'>
        <div className="container">
          <p>Please wait! Loading ...</p>
          <div className="img-container">
            <img className='loading-img' src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif" alt="" />
          </div>
        </div>
      </section>
    ) : (
      <>
      <section>
        <div className="container">
          <h1>Hotels</h1>
          <div className="card-container">
            {hotels.map((hotel) => (
              <Card
                key={hotel.id}
                mykey={hotel.id}
                hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      </>
    )
  )
}

export default Home
