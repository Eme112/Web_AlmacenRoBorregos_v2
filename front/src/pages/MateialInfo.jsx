import logo from '../components/Integrado.png';
import { Add, Remove } from "@mui/icons-material";
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
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
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
function MaterialInfo() {
  return (
    <Container>
      <NavBar/>
      <Wrapper>
        <ImgContainer>
          <Image src={logo} />
        </ImgContainer>
        <InfoContainer>
          <Title>TL081</Title>
          <Desc>
          The TL08xH (TL081H, TL082H, and TL084H) family of  devices  are  the  next-generation  versions  of  
          the industry-standard TL08x (TL081, TL082, and TL084) devices.These devices provide outstanding 
          value for cost-sensitive applications, with features including low offset  (1  mV,  typical), 
          high  slew  rate  (20  V/μs),  and common-mode input to the positive supply. High ESD (1.5  kV,  HBM), 
          integrated  EMI  and  RF  filters,  and operation across the full
           –40°C to 125°C enable the TL08xH devices to be used in the most rugged and demanding applications<br/>
           <a href="https://pdf1.alldatasheet.com/datasheet-pdf/view/1322235/TI/TL081.html">datasheet</a>
          </Desc>
          <Price>STOCK : 20</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>RESERVAR</Button>
            <Button1>DEVOLVER</Button1>
            <Button2>ELIMINAR</Button2>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default MaterialInfo