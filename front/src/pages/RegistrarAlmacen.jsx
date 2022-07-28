import React,{useState} from 'react'
import axios from 'axios'
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
  const [name,setName] = useState('')
  const [model,setModel] = useState('')
  const [quantity,setQuantity] = useState('')
  const [description,setDescription] = useState('')
  const [locker,setLocker] = useState('')
  const [available,setAvailable] = useState('')
  const [datasheet,setDatasheet] = useState('')

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const modelChangeHandler = (e) => {
    setModel(e.target.value)
  }

  const quantityChangeHandler = (e) => {
    setQuantity(e.target.value)
  }

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value)
  }

  const lockerChangeHandler = (e) => {
    setLocker(e.target.value)
  }

  const availableChangeHandler = (e) => {
    setAvailable(e.target.value)
  }

  const datasheetChangeHandler = (e) => {
    setDatasheet(e.target.value)
  }

  const addMaterial = (e) => {
    e.preventDefault()
    const newMaterial = {
      name: name,
      model: model,
      quantity: quantity,
      description: description,
      locker: locker,
      available: true,
      datasheet: datasheet
    }

    axios.post('http://localhost:4000/api/materials', newMaterial)
    .then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <NavBar/>
      <Container>
        <Wrapper>
          <Title>REGISTRAR MATERIALES</Title>
          <Form>
            <Input placeholder="nombre" id="name" value={name} onChange={nameChangeHandler}/>
            <Input placeholder="modelo" id="model" value={model} onChange={modelChangeHandler}/>
            <Input placeholder="cantidad" id="quantity" value={quantity} onChange={quantityChangeHandler}/>
            <Input placeholder="descripcion" id="description" value={description} onChange={descriptionChangeHandler}/>
            <Input placeholder="Locker" id="locker" value={locker} onChange={lockerChangeHandler}/>
            <Input placeholder="datasheet" id="datasheet" value={datasheet} onChange={datasheetChangeHandler}/>
            <Button id="add-btn" onClick={addMaterial}>REGISTRAR MATERIAL</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer/> 
    </div>
  )
}

export default RegistrarAlmacen