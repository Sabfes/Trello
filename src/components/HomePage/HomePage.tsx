import React from "react"
import styled from "styled-components";

const HomePage: React.FC = () => {
    return <Wrap>
        <Title>Trello</Title>
    </Wrap>
}
export default HomePage

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 70%;  
`
const Title = styled.h1`
    font-size: 140px;
    font-weight: 300;
`
