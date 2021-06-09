import React, {useEffect, useState} from "react"
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {H2} from "../StyledComponents/StyledComponents";
import Modal from "../Modal/Modal";
import {addBoard, deleteBoard, getBoards} from "../../redux/actions/boards";
import BoardSnippet from "./BoardSnippet/BoardSnippet";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const BoardList = () => {
    const userId = useTypedSelector(state => state.auth.userId)
    const boards = useTypedSelector(state => state.boards.boards)
    const [isModalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBoards(userId))
    }, [userId, dispatch])

    const delBoardHandler = (boardId) => {
        dispatch(deleteBoard(boardId))
    }

    const addBoardHandler = (nameOfBoard) => {
        if (nameOfBoard !== '') {
            dispatch(addBoard(userId, nameOfBoard))
            setModalOpen(false)
        }
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
                boards
                    ? boards.map((board) => {
                            return <BoardSnippet
                                key={board.id}
                                board={board}
                                delBoardHandler={delBoardHandler}
                            />
                        })
                    : <div>Досок нету</div>
            }
        </BoardsContainer>
    </Container>
}
export default BoardList

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
