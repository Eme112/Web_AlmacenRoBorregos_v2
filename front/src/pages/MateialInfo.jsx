import React,{useState,useEffect} from 'react';
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom"
import axios from 'axios'
import logo from '../components/Integrado.png';
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from '../components/NavBar'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: fill;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Subtitle = styled.h1`
  font-weight: 100;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: teal;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const Button1 = styled.button`
  padding: 15px;
  border: 2px solid gray;
  background-color: gray;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const Button2 = styled.button`
  padding: 15px;
  border: 2px solid red;
  background-color: red;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const MaterialInfo = () => {
  const params = useParams()
  const materialId = params.materialId

  const [materialesLista, setMaterialesLista] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/materials")
    .then(res => setMaterialesLista(res.data))
    .catch(err => console.log(err));
  }, [])

  var currMaterial = {
    routeName: "undefined",
    name: "undefined",
    model: "undefined",
    cant: -1,
    description: "undefined",
    locker: -1,
    available: false,
    datasheet: "undefined",
    image: "undefined",
  }

  for(var i = 0; i < materialesLista.length; i++) {
    if(materialesLista[i].routeName == materialId) {
      currMaterial = materialesLista[i]
    }
  }

  return (
    <Container>
      <NavBar/>
      <Wrapper>
        <ImgContainer>
          <Image src={currMaterial.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{currMaterial.name}</Title>
          <Subtitle>{currMaterial.model}</Subtitle>
          <Desc>{currMaterial.description}</Desc>
          <Desc>Datasheet: {currMaterial.datasheet}</Desc>
          <Price>LOCKER : {currMaterial.locker}</Price>
          <Title>Disponible : {(currMaterial.available ? "SI" : "NO")}</Title>
          <AddContainer>
            {/*<AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>*/}
            <Button>RESERVAR</Button>
            <Button1>DEVOLVER</Button1>
            {/*<Button2>ELIMINAR</Button2>*/}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default MaterialInfo