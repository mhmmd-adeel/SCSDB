// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import NotFound from './components/NotFound';
import Signupform from './components/Signupform';
import LoginForm from './components/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './components/Authcontext';

const App = () => {
  const [user, setuser] = useState();
  const { isAuthenticated } = useAuth();

  // ⛔️ Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setuser(user);
  }, []);

  return (
    <div className="bg-[#1F1E24] w-screen h-screen overflow-hidden relative">
      {/* Mobile warning overlay */}
      {isMobile && (
        <div className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-2xl font-bold mb-4">⚠️ Not Supported on Mobile</h1>
            <p className="text-lg">Please open this website on a Desktop or Laptop for the best experience.</p>
          </div>
        </div>
      )}

      {/* App content */}
      <div className={`${isMobile ? 'hidden' : 'block'} w-full h-full`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<Moviedetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/tv/details/:id" element={<Tvdetails />}>
            <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/people" element={<People />} />
          <Route path="/people/details/:id" element={<Peopledetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signupform />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
