import React, { useEffect, useState } from 'react'
import { NewHotelType } from '../types/hotel'
import Star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'

interface IProps {
  hotel: NewHotelType
  mykey: any
}

const CardD = ({ hotel, mykey }: IProps) => {

  const [starArr, setStarArr] = useState([])
  let navigate = useNavigate()

  useEffect(()=> {
    setStarArr([])
    let arr:any = hotel.stars?.split(',')
    setStarArr(arr)
}, [])
console.log(starArr)

  const navBack = () => {
    navigate('/')
}

  return (
    <div className="card">
      <h3>{hotel.title}</h3>
      <figcaption>
        <img src={hotel.imgSource} alt={hotel.title} />
        <div className="card-text">
          <p>{hotel.title}</p>
          <p>{hotel.address}</p>
        </div>
        <button className='btn-per-night btn'>{hotel.perNight} $</button>
        <div className="buttons">
          <div className='stars'>
            {starArr.map((star) => (
              <img className='star' src={Star} alt="" key={Math.random()} />
            ))}
          </div>
          <button onClick={navBack} className="read-more-btn">Back</button>
        </div>
      </figcaption>
      <div className="details">
        <p className='title'>About Our Hotel: </p>
        <p>{hotel.description}</p>
        <button className='btn'>{hotel.feature}</button>
      </div>

    </div>
  )
}

export default CardD
