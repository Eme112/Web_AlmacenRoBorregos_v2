import styled from "styled-components"
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const Info= styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.8 s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D4E9FC;
    position: relative;
    flex-direction: column;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle= styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #E9F3FD;
    position: absolute;
`
const Image= styled.img`
    display: flex;
    justify-content: center;
    align-content: center;
    height: 75%;
    width: 75%;
    object-fit: scale-down;
    z-index: 2;
`
const Icon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: white;
        transform: scale(1.1)
    }
`
const Title= styled.p`
    z-index: 3;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`
const Subtitle= styled.p`
    z-index: 3;
    text-align: center;
    font-size: 15px;
    font-color: blue;
`

const Material = ({item}) => {
    return (
        <Container>
            {<Image src={item.image} />}
            <Info>
                <Icon>
                    <QuestionMarkIcon/>
                </Icon>
            </Info>
            <Title> {item.name} </Title>
            <Subtitle> {item.model} </Subtitle>
        </Container>
    );
};

export default Material