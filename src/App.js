import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UseStorage } from './UserContext';
import User from './Components/User/User';
import Photo from './Components/Photo/Photo';
import ProtectedRoute from './Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UseStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
