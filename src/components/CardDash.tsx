import React, { useEffect, useState } from 'react'
import { NewHotelType } from '../types/hotel'
import Star from '../assets/star.png'
import { deleteHotel } from "../config/controller";
import { useNavigate } from 'react-router-dom'

interface IProps {
    hotel: NewHotelType
    mykey: any
}

const CardDash = ({ hotel, mykey }: IProps) => {

    const [starArr, setStarArr] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        setStarArr([])
        let arr: any = hotel.stars?.split(',')
        setStarArr(arr)
    }, [hotel])
    console.log(starArr)

    const navToEdit = (id: string) => {
        navigate(`/edit/${id}`)
    }

    return (
        <div className="card" key={hotel.id}>
            <h3>{hotel.title}</h3>
            <figcaption>
                <img src={hotel.imgSource} alt={hotel.title} />
                <div className="buttons">
                    <div className='stars'>
                        {starArr.map((star) => (
                            <img className='star' src={Star} alt="" key={Math.random()} />
                        ))}
                    </div>
                    <div className="actions">
                        <button onClick={() => { navToEdit(`${hotel.id}`) }}>Edit</button>
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
    )
}

export default CardDash
