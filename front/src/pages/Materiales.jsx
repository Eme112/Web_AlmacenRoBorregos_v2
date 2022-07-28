import React,{useState,useEffect} from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styled from "styled-components";
//import {materialesLista} from "../data";
import axios from 'axios'
import Material from "./Material";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function Materiales() {

  const [materialesLista, setMaterialesLista] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/materials")
    .then(res => setMaterialesLista(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div>
        <NavBar/>
        <Container>
            {materialesLista.map((item) => (
                <Material item={item} key={item.id}/>
            ))}
        </Container>
        <Footer/>
    </div>
  )
}

export default Materiales