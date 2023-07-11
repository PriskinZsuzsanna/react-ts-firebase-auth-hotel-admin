import React, {useEffect, useState} from 'react'
import { NewHotelType } from '../types/hotel'
import Star from '../assets/star.png'

interface IProps {
  hotel: NewHotelType
}

const CardD = ({ hotel }: IProps) => {

  
  const [starArr, setStarArr] = useState([])

  useEffect(()=> {
      let arr:any = hotel.stars?.split('')
      setStarArr(arr)
  }, [])

  return (
    <div className="card">
      <h3>{hotel.title}</h3>
      <figcaption>
        <img src={hotel.imgSource} alt={hotel.title} />
        <div className="card-text">
          <p>{hotel.title}</p>
          <p>{hotel.address}</p>
        </div>
        <div className="buttons">
          <div className='stars'>
            {starArr.map((star) => (
              <img className='star' src={Star} alt="" />
            ))}
          </div>
          <button className="read-more-btn">Read More</button>
        </div>
      </figcaption>
      <div className="details">
        <p>{hotel.description}</p>
      </div>

    </div>
  )
}

export default CardD
