import React, {useEffect, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

interface IProps {
    loggedIn:any
    isLoggedIn: boolean;
    email: string;
    displayName: string;
    logOut: any;
  }



const Navbar = ({loggedIn, isLoggedIn, email, displayName, logOut}: IProps) => {

    const [isOpen, setIsOpen] = useState(false)

    let navigate = useNavigate()

    useEffect(() => {
        loggedIn()
        if(isLoggedIn){
          navigate('/')
        } else {
            navigate('/login')
        }
      }, [email, displayName, isLoggedIn])

      const toggleMenu = () => {
        setIsOpen(!isOpen)
      }

      const closeMenu = () => {
        if(isOpen == true) {
            setIsOpen(false)
        }
      }


    return (
        <header className={`${isOpen? "open" : "closed"}`}>
            {
                isLoggedIn &&
                <>
                <nav>
                    <div className="logo"><Link to="/"><p className='logo-p'>Hotel Admin</p></Link></div>
                    <ul className={`ul ${isOpen? "open" : "closed"}`}>
                        <li onClick={closeMenu}><Link to="/">Home</Link></li>
                        <li onClick={closeMenu}><Link to="/create">Create</Link></li>
                        <li onClick={closeMenu}><Link to="/dashboard">Dashboard</Link></li>
                        <li onClick={closeMenu}><button className='a-btn' onClick={logOut}>Log Out</button></li>
                    </ul>
                    <div className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={!isOpen ? faBars : faClose} />
                    </div>
                </nav>
               
                </>
            }
           
        </header>
    )
}

export default Navbar
