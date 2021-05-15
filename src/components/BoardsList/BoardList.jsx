import React from "react"
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const BoardList = () => {
    const boardsNameList = [
        "Сессия","Домашка", "Работа", "Сессия",
        "Сессия","Домашка", "Работа", "Сессия"
    ]

    return <Container>
        <NavBar>
            <Link to={"/boardsList"}>Все доски</Link>
            <Link to={"/"}>Главная страница</Link>
        </NavBar>
        <BoardsContainer>
            {
                boardsNameList.map((board, i) => {
                    return (
                        <Link to={"/boards/123asdc"}><Board key={i}>{board}</Board></Link>
                    )
                })
            }
        </BoardsContainer>
    </Container>
}
export default BoardList


const Board = styled.div`
    padding: 10px;
    width: 200px;
    color: grey;
    height: 120px;
    background: white;
    border: 1px solid lightgrey;
    border-radius: 20px;
    transition: 1s;
    
    &:hover {
        transform: scale(1.03);
    }
`

const BoardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`

const Link = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 300;
`

const Container = styled.div`
    width: 90%;
    margin: 50px auto;
    display: flex;
`

const NavBar = styled.nav`
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 20%;
`
