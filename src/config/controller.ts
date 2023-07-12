import { addDoc, collection, deleteDoc, doc, setDoc} from 'firebase/firestore';
import {app, db} from './config';
import { AddHotelType } from '../types/hotel';
import { NavigateFunction } from 'react-router-dom';


//Get Hotels - step 1
export const hotelsCollection = collection(db, 'hotels') //firestore db and db path

//Add hotel to db
export const addHotel = async (hotelData: AddHotelType, navigate: NavigateFunction) => {
    const newHotel = await addDoc(hotelsCollection, {...hotelData})
    console.log('hotel created ')
    navigate('/feedback/created') 
}

//Delete Hotel from db
export const deleteHotel = async (id: string | undefined, navigate: NavigateFunction) => {
    const document = doc(db, `hotels/${id}`)
    await deleteDoc(document)
    console.log('Hotel Deleted')
    navigate('/feedback/deleted') 
}

//Edit
export const updateHotel = async (id: string | undefined, docData: any, navigate: NavigateFunction) => {
    const document = doc(db, `hotels/${id}`)
    await setDoc(document, docData, {merge: true})
    console.log('Updated')
    navigate('/feedback/edited') 
}