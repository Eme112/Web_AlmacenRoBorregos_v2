import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1F4690;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

function RegistrarAlmacen() {
  return (
    <div>
      <NavBar/>
      <Container>
        <Wrapper>
          <Title>REGISTRAR MATERIALES</Title>
          <Form>
            <Input placeholder="nombre" />
            <Input placeholder="modelo" />
            <Input placeholder="cantidad" />
            <Input placeholder="descripcion" />
            <Input placeholder="Locker" />
            <Input placeholder="datasheet" />
            <Button>REGISTRAR MATERIAL</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer/> 
    </div>
  )
}

export default RegistrarAlmacen