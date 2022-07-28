import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import {logo3} from "../data";

const Container = styled.div`
    display: flex;
    color: white;
    background-color : black;
`
  
const Left = styled.div`
  width: 40%;
  padding-top: 10px;
  padding-left: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`
  
const Logo = styled.h1``;
  
const Desc = styled.p`
  margin-top: 10px;
`
  
const SocialContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-content: flex-end;
`
  
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 10px;
    margin-left: 10px;
    a:link { text-decoration: none; color: white;}
    a:visited { text-decoration: none; color: white;}
    a:hover { text-decoration: none; color: white;}
    a:active { text-decoration: none; color: white;}
`
  
const Center = styled.div`
width: 20%;
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;;
`

const Right = styled.div`
width: 40%;
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
  
const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 40%;
  width: 40%;
  object-fit: scale-down;
`

const Footer = ({item}) => {
  return (
    <Container>
      <Left>
        <Logo>RoBorregos</Logo>
        <Desc>
            Pagina de RoBorregos para administracion y reserva de materiales electronicos.
            Uso exclusivo de personas pertenecientes al grupo estudiantil.
        </Desc>
      </Left>
      <Center>
      {logo3.map((item) => (
        <Image src={item.img} /> 
        ))}  
        
      </Center>
      <Right>
      <SocialContainer>
          <SocialIcon color="3B5999">
            <a href="https://www.facebook.com/RoBorregos" target="_blank" rel="noreferrer"><FacebookIcon /></a>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <a href="https://www.instagram.com/roborregos/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <a href="https://twitter.com/RoBorregos" target="_blank" rel="noreferrer"><TwitterIcon /></a>
          </SocialIcon>
          <SocialIcon color="bf155e">
            <a href="mailto:roborregos@tec.mx"> <MailIcon/></a>
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  )
}

export default Footer