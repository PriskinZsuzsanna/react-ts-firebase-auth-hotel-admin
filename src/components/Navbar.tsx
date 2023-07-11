import React, {useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css'

interface IProps {
    loggedIn:any
    isLoggedIn: boolean;
    email: string;
    displayName: string;
    logOut: any;
  }



const Navbar = ({loggedIn, isLoggedIn, email, displayName, logOut}: IProps) => {

    let navigate = useNavigate()

    useEffect(() => {
        loggedIn()
        if(isLoggedIn){
          navigate('/')
        } else {
            navigate('/login')
        }
      }, [email, displayName, isLoggedIn])


    return (
        <header>
            {
                isLoggedIn &&
                <>
                <nav>
                    <div className="logo"><Link to="/"><p className='logo-p'>Hotel Admin</p></Link></div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">Create</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><button className='a-btn' onClick={logOut}>Log Out</button></li>
                    </ul>
                </nav>
               
                </>
            }
           
        </header>
    )
}

export default Navbar
