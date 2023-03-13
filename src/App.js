import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import DıceImage1 from "./images/dice1.png";
import DıceImage2 from "./images/dice2.png";
import DıceImage3 from "./images/dice3.png";
import DıceImage4 from "./images/dice4.png";
import DıceImage5 from "./images/dice5.png";
import DıceImage6 from "./images/dice6.png";


function App() {

  var diceImages = [
    DıceImage1,
    DıceImage2,
    DıceImage3,
    DıceImage4,
    DıceImage5,
    DıceImage6
  ]
  const[image,setNewImage]= useState(diceImages[0])
  const[image2,setNewImage2]= useState(diceImages[1])

  const rollDice = () => {
    var randomNum1 = Math.floor(Math.random()*6);
    var randomNum2 = Math.floor(Math.random()*6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  }

  return (
    <div className="App">
      <center>
        <h1>DICE ROLLER</h1>
        <div className='container'>
          <img className='square' src={image}></img> 
          <div style={{width:'5px', display: 'inline-block'}}></div>
          <img className='square' src={image2}></img>
        </div>
        <button type="button" class="btn btn-outline-primary" onClick={rollDice}>Roll Dice</button>
      </center>
    </div>
  );
}

export default App;
