import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { NewHotelType, } from '../types/hotel'
import Star from '../assets/star.png'
import './Card.css'

interface IProps {
    hotels: NewHotelType[]
}


const Details = ({ hotels}: IProps) => {
    let param = useParams()
    let navigate = useNavigate()
    const [hotel, setHotel] = useState<NewHotelType>({})
    const [starArr, setStarArr] = useState([])

    useEffect(() => {
        setHotel(getActual())
        let arr: any = getActual().stars?.split('')
        setStarArr(arr)
    }, [param])

    const getActual = () => {
        return hotels.filter(hotel => hotel.id == param.id)[0] || {}
    }

    const navBack = () => {
        navigate('/')
    }



    return (
        <section>
            <div className="container">
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
                                    <img className='star' src={Star} alt="" key={Math.random()}/>
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
            </div>
        </section>

    )
}

export default Details
