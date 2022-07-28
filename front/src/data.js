import axios from 'axios'
import logo from './components/Integrado.png';
import logo2 from './components/roborregos.png';
/*import Arduino from './components/Arduino.png';
import Rasp from './components/Rasp.png';
import And from './components/And.png';
import Or from './components/Or.png';
import Not from './components/Not.png';
import Transistor from './components/Transistor.png';
import Diode from './components/Diode.png';
import Resistor from './components/Resistor.png';*/

/*
export const materialesLista = [
    {
      id:1,
      img: Arduino,
      title: "Microcontrollers: ",
      subtitle: "Arduino",
    },
    {
      id:2,
      img: Rasp,
      title: "Microcontrollers: ",
      subtitle: "Raspberry PI 3",
    },
    {
      id:3,
      img: And,
      title: "Logic gates: ",
      subtitle: "AND SN74AS11N",
    },
    {
      id:4,
      img: Or,
      title: "Logic gates: ",
      subtitle: "OR SN74AHC32N",
    },
    {
      id:5,
      img: Not,
      title: "Logic gates: ",
      subtitle: "NOT SN74HC05N",
    },
    {
      id:6,
      img: Transistor,
      title: "Transistors: ",
      subtitle: "PNP",
    },
    {
      id:7,
      img: Diode,
      title: "Diodes: ",
      subtitle: "Rectifier",
    },
    {
      id:8,
      img: Resistor,
      title: "Resistors",
      subtitle: "",
    },
  ]
*/

export const materialesLista = axios.get("http://localhost:4000/api/materials")
.then(res => {
  console.log(res.data)
})
.catch(err => {
  console.log(err)
})

console.log(materialesLista)

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
