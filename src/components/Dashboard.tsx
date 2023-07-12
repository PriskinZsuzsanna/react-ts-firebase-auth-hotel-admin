import React, { useEffect, useState } from 'react'
import { NewHotelType } from '../types/hotel';
import Star from '../assets/star.png'
import { deleteHotel } from "../config/controller";
import './Card.css'
import { useNavigate } from 'react-router-dom';
import CardDash from './CardDash';

interface IProps {
  email: string;
  displayName: string;
  hotels: NewHotelType[]
}

const Dashboard = ({ email, displayName, hotels }: IProps) => {

  const [myHotels, setMyHotels] = useState<NewHotelType[]>([])

  useEffect(() => {
    setMyHotels(getActuals())
  }, [])

  const getActuals = () => {
    return hotels.filter(hotel => hotel.displayName == displayName && hotel.email == email) || {}
  }

 


  return (
    <section>
      <div className="container">
        <h1>My Hotels</h1>
        <div className="card-container">
          {myHotels.map((hotel) => (
          <CardDash
          key={hotel.id}
          mykey={hotel.id}
          hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
