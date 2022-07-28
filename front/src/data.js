import axios from 'axios'
import React,{useState,useEffect} from 'react';
import logo from './components/Integrado.png';
import logo2 from './components/roborregos.png';
import Arduino from './components/Arduino.png';
import Rasp from './components/Rasp.png';
import And from './components/And.png';
import Or from './components/Or.png';
import Not from './components/Not.png';
import Transistor from './components/Transistor.png';
import Diode from './components/Diode.png';
import Resistor from './components/Resistor.png';


/*(export const materialesLista = axios.get("http://localhost:4000/api/materials")
.then(res => {
  console.log(res.data)
})
.catch(err => {
  console.log(err)
})*/

export const sliderItems = [
  {
    id: 1,
    img: logo,
    title: "RESERVAR TL081",
    desc: "STOCK: 10",
    bg: "1F4690",
    butt: "RESERVAR",
  },
  {
    id: 2,
    img: logo2,
    title: "UNETE AL EQUIPO",
    desc: "Estamos recibiendo solicitudes",
    bg: "5e388d",
    butt: "CONTACTAR"
  },
]
