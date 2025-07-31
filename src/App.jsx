// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movie from './components/Movie';
import Moviedetails from './components/Moviedetails';
import Trailer from './components/partials/Trailer';
import Tvshows from './components/Tvshows';
import Tvdetails from './components/Tvdetails';
import People from './components/People';
import Peopledetails from './components/Peopledetails';
import Contact from './components/Contact';
import About from './components/About';
import Notfound from './components/Notfound';
import Signupform from './components/Signupform';
import LoginForm from './components/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './components/Authcontext';

const App = () => {
  const [user, setuser] = useState()
  const { isAuthenticated} = useAuth();
  useEffect(()=>{
   // Removed: auth.onAuthStateChanged(user => {
      setuser(user)
   // }) 
  },[])
  return  (
    
    <div className="bg-[#1F1E24] w-screen flex h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          {/* Protecting the Trailer route */}
          <Route
            path="/movie/details/:id/trailer"
            element={
              
                <Trailer />
              
            }
          />
        </Route>
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route
            path="/tv/details/:id/trailer"
            element={
                <Trailer />
            
            }
          />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<Peopledetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/signin" element={<LoginForm />} />
      </Routes>
      <ToastContainer />
    </div>
  )
};

export default App;
