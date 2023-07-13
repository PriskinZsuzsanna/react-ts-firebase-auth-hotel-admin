import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NewHotelType } from '../types/hotel'
import { updateHotel } from '../config/controller'
import Footer from './Footer'

interface IProps {
    hotels: NewHotelType[]
}

const Edit = ({hotels}:IProps) => {

    let param = useParams()

    const [hotel, setHotel] = useState<NewHotelType>({})

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [feature, setFeature] = useState('')
    const [imgSource, setImgSource] = useState('')
    const [stars, setStars] = useState('')
    const [address, setAddress] = useState('')
    const [perNight, setPerNight] = useState('')
    const [id, setId] = useState('')

  
    let navigate = useNavigate();

    useEffect(() => {
        const findHotel = async () => {
           const data = await getActual()
           if(data){
            setHotel(data)
            console.log(hotel.title)
            if(hotel.id != undefined){
                setId(hotel.id)
            }
            if(hotel.title != undefined){
                setTitle(hotel.title)
            }
            if(hotel.description != undefined){
                setDescription(hotel.description)
            }
            if(hotel.feature != undefined){
                setFeature(hotel.feature)
            }
            if(hotel.imgSource != undefined){
                setImgSource(hotel.imgSource)
            }
            if(hotel.stars != undefined){
                setStars(hotel.stars)
            }
            if(hotel.address != undefined){
                setAddress(hotel.address)
            }
            if(hotel.perNight != undefined){
                setPerNight(hotel.perNight)
            }
           }

        }
        findHotel()
    }, [hotel])

    const getActual = () => {
        return hotels.filter(hotel => hotel.id == param.id)[0] || {}
    }
  
    const saveHotel = () => {
      updateHotel(id, { title:title, description: description, feature:feature, stars:stars, address:address, perNight:perNight, imgSource:imgSource }, navigate);
    }
  
    return (
      <>
      <section>
        <div className="container">
          <h1>Edit your hotel</h1>
  
          <div className='form' >
            <div className="form-group">
              <label>Hotel Name:</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label>Hotel Description:</label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
  
            <div className="form-group">
              <label>Main Feature:</label>
              <select value={feature} onChange={(e) => setFeature(e.target.value)}>
                <option value="Room Only">Room Only</option>
                <option value="Room with Breakfast included">
                  Room with Breakfast included
                </option>
                <option value="Local Charges Payable at Hotel">
                  Local Charges Payable at Hotel
                </option>
                <option value="Free Parking for all guests">
                  Free Parking for all guests
                </option>
                <option value="Free WiFi">Free WiFi</option>
                <option value="Spa and wellness centre included">
                  Spa and wellness centre included
                </option>
                <option value="Private parking at the hotel">
                  Private parking at the hotel
                </option>
                <option value="Restaurant & Bar">Restaurant & Bar</option>
                <option value="Swimming pool">Swimming pool</option>
                <option value="Room and Parking">Room and Parking</option>
              </select>
            </div>
  
            <div className="form-group">
              <label>Image URL Link location:</label>
              <input
                type="text"
                required
                value={imgSource}
                onChange={(e) => setImgSource(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label>Stars Rating:</label>
              <select value={stars} onChange={(e) => setStars(e.target.value)}>
                <option value="1">1</option>
                <option value="1,1">2</option>
                <option value="1,1,1">3</option>
                <option value="1,1,1,1">4</option>
                <option value="1,1,1,1,1">5</option>
              </select>
            </div>
  
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label>Price per Night ($):</label>
              <input
                type="text"
                required
                value={perNight}
                onChange={(e) => setPerNight(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <button className='submit' onClick={() => saveHotel()}>Update Hotel</button>
            </div>
  
          </div>
        </div>
      </section>
      <Footer />
      </>
    )
}

export default Edit
