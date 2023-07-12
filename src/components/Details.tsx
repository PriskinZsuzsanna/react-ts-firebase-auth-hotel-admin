import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { NewHotelType, } from '../types/hotel'
import Star from '../assets/star.png'
import './Card.css'
import CardD from './CardD'

interface IProps {
    hotels: NewHotelType[]
}


const Details = ({ hotels}: IProps) => {
    let param = useParams()
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

  



    return (
        <section>
            <div className="container">
            <CardD
              key={hotel.id}
              mykey={hotel.id}
              hotel={hotel} />
            </div>
        </section>

    )
}

export default Details
