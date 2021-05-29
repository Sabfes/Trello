import React, {useEffect, useState} from "react"
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {H2} from "../StyledComponents/StyledComponents";
import Modal from "../Modal/Modal";
import {addBoard, deleteBoard, getBoards} from "../../redux/actions/boards";

const BoardList = () => {
    const userId = useSelector(state => state.auth.userId)
    const boards = useSelector(state => state.boards.boards)
    const [isModalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBoards(userId))
    }, [userId, dispatch])

    const delBoardHandler = (boardId) => {
        dispatch(deleteBoard(boardId))
    }

    const addBoardHandler = (nameOfBoard) => {
        dispatch(addBoard(userId, nameOfBoard))
        setModalOpen(false)
    }

    return <Container>
        <Modal addBoard={addBoardHandler} isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        <NavBar>
            <H2 pointer>Все доски</H2>
            <Link to={"/"}>Главная страница</Link>
            <H2 pointer onClick={() => setModalOpen(true)}>Создать доску</H2>
        </NavBar>
        <BoardsContainer>
            {
                boards.map((board, i) => {
                    return (
                        <div key={i}>
                            <span onClick={() => delBoardHandler(board.id)}>delete</span>
                            <Link to={`/boards/${board.id}`}>
                                <Board>
                                    {board.boardName}
                                </Board>
                            </Link>
                        </div>
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
