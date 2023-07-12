import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Feedback = () => {

    let navigate = useNavigate()

    useEffect(() => {
        myTimeout()
    }, [])

    const myTimeout = () => {
        setTimeout(() => {
            navigate('/dashboard')
        }, 2000)
    }

return (
    <div>
        Feedback
    </div>
)
}

export default Feedback
