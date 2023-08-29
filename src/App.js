import './App.css';
import Header from './header';
import Footer from './footer';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import * as React from "react";
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import BookingPage from './bookingPage';
import Navigation from "./nav";
import Main from './main';
import { ScreenSizeProvider } from './providers/screenSize';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [showModel,setShowModel]=useState(false);

  return (
    <ScreenSizeProvider>
    <BrowserRouter>
   <Header></Header>
   <Navigation setShowModel={()=>setShowModel(true)}></Navigation>

   <BookingPage showModel={showModel} setShowModel={(e)=>setShowModel(e)}/>
    <Main setShowModel={()=>setShowModel(true)} />
   <Footer setShowModel={()=>setShowModel(true)}>
    </Footer  >
    </BrowserRouter>
   </ScreenSizeProvider>
  );
}



export default App;
