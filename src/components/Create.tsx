import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Create.css'
import { addHotel } from '../config/controller';
import Footer from './Footer';

interface IProps {
  email: string;
  displayName: string;
}


const Create = ({email, displayName}:IProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [feature, setFeature] = useState('Room Only')
  const [imgSource, setImgSource] = useState('')
  const [stars, setStars] = useState('1')
  const [address, setAddress] = useState('')
  const [perNight, setPerNight] = useState('')

  let navigate = useNavigate();

  const addNewHotel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addHotel({
      title,
      description,
      feature,
      imgSource,
      stars,
      address,
      perNight,
      email,
      displayName
    }, navigate)
    console.log("successfully added a new hotel");
    ;
  }

  return (
    <>
    <section>
      <div className="container">
        <h1>Register new hotel</h1>

        <form onSubmit={(e) => addNewHotel(e)}>
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
            <button className='submit'>Add Hotel</button>
          </div>

        </form>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Create
