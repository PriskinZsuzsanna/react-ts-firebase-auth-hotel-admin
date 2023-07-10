import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { auth } from './config/config';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    setEmail(currentUserEmail())
    setDisplayName(currentUser())
  }, [])

  const loggedIn = () => {
    setIsLoggedIn(email != '' && displayName != '')
  }

  const currentUser = () => {
    let displayName = (localStorage.getItem('displayName'));
    if (displayName != null) {
      return displayName;
    }
    return '';
  }

  const currentUserEmail = () => {
    let email = localStorage.getItem('email');
    if (email != null) {
      return email;
    }
    return '';
  }

  const logOut = () => {
    localStorage.clear()
    auth.signOut()
    setEmail(currentUserEmail())
    setDisplayName(currentUser())
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          loggedIn={loggedIn}
          isLoggedIn={isLoggedIn}
          displayName={displayName}
          email={email}
          logOut={logOut}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login
            loggedIn={loggedIn}
            isLoggedIn={isLoggedIn}
            setEmail={setEmail}
            setDisplayName={setDisplayName}
            currentUser={currentUser}
            currentUserEmail={currentUserEmail}
          />} />
          <Route path='/create' element={< Create />} />
          <Route path='/dashboard' element={< Dashboard />} />
          <Route path='*' element={< NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
