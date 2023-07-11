import React, {useState, useEffect} from 'react'
import { NewHotelType } from '../types/hotel'
import { useNavigate } from 'react-router-dom'
import Star from '../assets/star.png'

interface IProps {
    hotel: NewHotelType
    mykey: any
}

const Card = ({ hotel, mykey}: IProps) => {

    let navigate = useNavigate()

    const [starArr, setStarArr] = useState([])

    useEffect(()=> {
        let arr:any = hotel.stars?.split('')
        setStarArr(arr)
    }, [])

    const navToDetail = (id:string) => {
        navigate(`/details/${id}`)
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
                <div className="buttons">
                    <div className='stars'>
                    {starArr.map((star) => (
                        <img className='star' src={Star} alt="" key={Math.random()}/>
                    ))}
                    </div>
                    <button onClick={()=> {navToDetail(`${hotel.id}`)}} className="read-more-btn">Read More</button>
                </div>
            </figcaption>

        </div>
    )
}

export default Card
