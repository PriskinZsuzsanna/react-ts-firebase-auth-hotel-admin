import { addDoc, collection, deleteDoc} from 'firebase/firestore';
import {app, db} from './config';
import { AddHotelType } from '../types/hotel';



export const hotelsCollection = collection(db, 'hotels') //firestore db and db path

//Add hotel to db
export const addHotel = async (hotelData: AddHotelType) => {
    const newHotel = await addDoc(hotelsCollection, {...hotelData})
    console.log('hotel created ')
}