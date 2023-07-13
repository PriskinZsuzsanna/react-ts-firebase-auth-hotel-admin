import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>

            <div className='container'>
                <h3>Hotel Admin</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente rem repellendus possimus consequuntur unde harum quasi iure, natus eveniet ullam reprehenderit accusantium et nobis fuga quas odit expedita cupiditate. Laboriosam ad tempora rem. Accusamus reiciendis nesciunt cumque fuga perferendis ad natus incidunt reprehenderit optio distinctio!</p>
                <div className="social">
                    <FontAwesomeIcon icon={faFacebook} className='icon'/>
                    <FontAwesomeIcon icon={faTwitter} className='icon'/>
                    <FontAwesomeIcon icon={faInstagram} className='icon'/>
                    <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                </div>
            </div>
            <div className='container'>Copyright &copy; 2023 Hotel Admin Co.</div>

        </footer>
    )
}

export default Footer