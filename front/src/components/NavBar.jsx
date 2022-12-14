import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {logo3} from "../data";

const Container = styled.div`
  height: 60px;
  background-color: black;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HomePage = styled.span`
  font-size: 20px;
  cursor: pointer;
  a:link { text-decoration: none; color: white; font-weight: bold;}
  a:visited { text-decoration: none; color: white; font-weight: bold;}
  a:hover { text-decoration: none; color: white; font-weight: bold;}
  a:active { text-decoration: none; color: white; font-weight: bold;}
`
const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  color: white;
`;
const Input = styled.input`
  border: none;
`;

const LinkStyle = styled.div`
  a:link { text-decoration: none; color: white; margin-right: 60px;}
  a:visited { text-decoration: none; color: white; margin-right: 60px;}
  a:hover { text-decoration: none; color: white; margin-right: 60px;}
  a:active { text-decoration: none; color: white; margin-right: 60px;}
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 15%;
  width: 15%;
  object-fit: scale-down;
  margin-right: 20px;
`

const NavBar = ({item}) => {  return (
    <div>  
        <Container>
            <Wrapper>
                <Left>
                    {logo3.map((item) => (
                    <Image src={item.img} /> 
                    ))} 
                    <HomePage>
                      <Link to='/'> <b>HOME</b></Link>
                    </HomePage>
                </Left>
                <Center>
                    <LinkStyle>
                      <Link to='/login'>INICIAR SESION</Link>
                      <Link to='/register'>REGISTRARSE</Link>
                      <Link to='/materiales'>MATERIALES</Link>
                      <Link to='/registrarmateriales'>INVENTARIO</Link>
                    </LinkStyle>
                </Center>
                <Right>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon />
                    </SearchContainer>
                </Right>
            </Wrapper>
        </Container> 
    </div>
  )
}

export default NavBar