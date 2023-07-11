import React, { useEffect, useState } from 'react'
import { NewHotelType } from '../types/hotel';
import Star from '../assets/star.png'
import { deleteHotel } from "../config/controller";
import './Card.css'
import { useNavigate } from 'react-router-dom';

interface IProps {
  email: string;
  displayName: string;
  hotels: NewHotelType[]
}

const Dashboard = ({ email, displayName, hotels }: IProps) => {

  const [myHotels, setMyHotels] = useState<NewHotelType[]>([])
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    setMyHotels(getActuals())
  }, [])

  const getActuals = () => {
    return hotels.filter(hotel => hotel.displayName == displayName && hotel.email == email) || {}
  }

  const navToEdit = (id:string) => {
    navigate(`/edit/${id}`)
}


  return (
    <section>
      <div className="container">
        <h1>Hotels</h1>
        <div className="card-container">
          {myHotels.map((hotel) => (
            <div className="card" key={hotel.id}>
              <h3>{hotel.title}</h3>
              <figcaption>
                <img src={hotel.imgSource} alt={hotel.title} />
                <div className="buttons">
                  <div className='stars'>
                    {hotel.stars?.split('').map((star) => (
                      <img className='star' src={Star} alt="" key={Math.random()} />
                    ))}
                  </div>
                  <div className="actions">
                    <button onClick={() => {navToEdit(`${hotel.id}`)}}>Edit</button>
                    <button onClick={() => deleteHotel(hotel.id, navigate)}>Delete</button>
                  </div>
                </div>
                <div className="card-text">
                  <p>{hotel.title}</p>
                  <p>{hotel.address}</p>
                </div>
                <button className='btn-per-night btn'>{hotel.perNight} $</button>

              </figcaption>
              <div className="details">
                <p className='title'>About Our Hotel: </p>
                <p>{hotel.description}</p>
                <button className='btn'>{hotel.feature}</button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
