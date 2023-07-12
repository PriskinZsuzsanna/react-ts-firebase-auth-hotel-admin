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
import Details from './components/Details';
import { NewHotelType } from './types/hotel'
import { DocumentData, QuerySnapshot, onSnapshot, } from 'firebase/firestore'
import { hotelsCollection } from './config/controller'
import Edit from './components/Edit';
import Feedback from './components/Feedback';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [hotels, setHotels] = useState<NewHotelType[]>([])

  useEffect(() => {
    setEmail(currentUserEmail())
    setDisplayName(currentUser())
  }, [])


  useEffect(() => onSnapshot(hotelsCollection, (snapshot: QuerySnapshot<DocumentData>) => { //saved db item, callback with data what we can get from db
    setHotels(snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    })
    )

  }), []
  );

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
          <Route path='/' element={<Home 
          hotels={hotels} 
           />} />
          <Route path='/login' element={<Login
            loggedIn={loggedIn}
            isLoggedIn={isLoggedIn}
            setEmail={setEmail}
            setDisplayName={setDisplayName}
            currentUser={currentUser}
            currentUserEmail={currentUserEmail}
          />} />
          <Route path='/create' element={< Create 
          email={email}
          displayName={displayName}
          />} />
          <Route path='/dashboard' element={< Dashboard 
          hotels={hotels} 
          email={email}
          displayName={displayName} />} />
          <Route path='/details/:id' element={< Details 
          hotels={hotels}  />} />
          <Route path='/edit/:id' element={< Edit 
          hotels={hotels}  />} />
          <Route path='feedback/:feed' element={<Feedback />} />
          <Route path='*' element={< NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
