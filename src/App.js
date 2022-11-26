import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import React, { useEffect, useState,useRef } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
          <Navbar className= "nav_up" bg="light" variant="light">
                  <Navbar.Brand className= "homeB" href="#home">Home</Navbar.Brand>
                  <Nav className="userB">
                      <Nav.Link href="#features">User info</Nav.Link>
                  </Nav>
          </Navbar>
      <div className="profile">
        <div className="profileImage">프로필 </div>
        <div className="profileInfo">정보 </div><
        /div>
          <Navbar className="nav_center" bg="light" variant="light">
                  <Nav className="me-auto">
                      <Nav.Link className="photoB"  href="#home">PHOTO</Nav.Link>
                      <Nav.Link className="postB" href="#features">POST</Nav.Link>
                  </Nav>
          </Navbar>
      <div className="photolist"></div>


    </div>
  );
}

export default App;
