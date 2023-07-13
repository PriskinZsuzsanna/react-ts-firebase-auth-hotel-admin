import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Feedback.css'

const Feedback = () => {

    let param = useParams()
    let navigate = useNavigate()

    const [feed, setFeed] = useState('')

    useEffect(() => {
        console.log(param)
        getFeed()
        myTimeout()
    }, [])

    const myTimeout = () => {
        setTimeout(() => {
            navigate('/dashboard')
        }, 3000)
    }

    const getFeed = () => {
        if(param.feed == 'created'){
            setFeed('Hotel Added')
        } else if(param.feed == 'edited'){
            setFeed('Hotel Updated')
        } else if(param.feed == 'deleted'){
            setFeed('Hotel Deleted')
        }
    }

return (
    <section className='feedback'>
        <div className="check"></div>
        <h1>Success!</h1>
        <p>{feed}!</p>
    </section>
)
}

export default Feedback
