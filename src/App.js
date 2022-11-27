import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import React, { useEffect, useState,useRef } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';


let im = 'https://via.placeholder.com/150/92c952'

axios.get('https://jsonplaceholder.typicode.com/photos/1')
    .then((data) => {
        console.log(data.data.thumbnailUrl)
        const images = data.data.thumbnailUrl
    })
function App() {
  // let [pImage,setImage] = useState(https://jsonplaceholder.typicode.com/photos/1);
  return (
    <div className="App">
          <Navbar className= "nav_up" bg="light" variant="light">
                  <Navbar.Brand className= "homeB" href="#home">Home</Navbar.Brand>
                  <Nav className="userB">
                      <Nav.Link href="#features">User info</Nav.Link>
                  </Nav>
          </Navbar>
      <div className="profile">
        <div className="profileImage">
            <img className="pImage" src='prof.jpeg'/>
        </div>
        <div className="profileInfo">
            {/*<button onClick={() =>{*/}
            {/*}}>버튼</button>*/}
        </div>
      </div>
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
