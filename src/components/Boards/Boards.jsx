import React, {useEffect, useState} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import uuid from "react-uuid";
import {onDragEnd} from "./onDragEnd";
import Column from "./Column/Column";
import styled from "styled-components";
import {NavLink, useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {addCol, addTaskToColumns, delCol, getCurrentBoard} from "../../redux/actions/curBoard";
import {H2, Input} from "../StyledComponents/StyledComponents";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Board = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const boardId = history.location.pathname.slice(8)
    const [isLoading, setIsLoading] = useState(true)
    const [isInputOpen, setIsInputOpen] = useState(false)
    const [columnName, setColumnName] = useState('')

    useEffect(() => {
        dispatch(getCurrentBoard(boardId))
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [boardId, dispatch])
    const board = useTypedSelector(state => state.curBoard)

    const addTaskHandler = (colId, taskText) => {
        dispatch(addTaskToColumns(colId, taskText))
    }

    const delColHandler = (colId) => {
        dispatch(delCol(boardId, colId))
    }
    const addColHandler = (columnName) => {
        const col = {
            id: uuid(),
            columnName: columnName,
            tasks: []
        }
        if (columnName !== '') {
            dispatch(addCol(boardId, col))
        }
    }
    return (
        <>
            <Header>
                <H2 ml={10} mr={15}>{board.boardName}</H2>
                <NavLink className="link" to={"/boardsList"}><H2 pointer mr={15}>Список досок</H2></NavLink>
                <H2 mr={15}>Добавить в избраное</H2>
                <H2>Настройки</H2>
            </Header>
            {
                isLoading
                    ? <div>...loading</div>
                    : <BoardContainer>
                        <DragDropContext
                            onDragEnd={result => onDragEnd(result, board.columns)}
                        >
                            {board.columns.map((col, index) => {
                                return <Column
                                    columnName={col.columnName}
                                    delCol={delColHandler}
                                    addTask={addTaskHandler}
                                    col={col}
                                    key={index}
                                />
                            })}
                            {
                                isInputOpen
                                    // Инпуты добавления новой колонки
                                    ? <Input
                                        placeholder="Введите название колонки"
                                        autoFocus
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                                addColHandler(columnName.trim())
                                                setColumnName('')
                                                setIsInputOpen(false)
                                            }
                                        }}
                                        onBlur={() => {
                                            if (columnName === '') {
                                                setIsInputOpen(false)
                                            } else {
                                                addColHandler(columnName.trim())
                                                setColumnName('')
                                                setIsInputOpen(false)
                                            }
                                        }}
                                        width={250}
                                        height={50}
                                        value={columnName}
                                        onChange={(e) => setColumnName(e.target.value)}
                                    />
                                    : <AddColBtn
                                        onClick={() => setIsInputOpen(true)}
                                    >
                                        Добавить новую колонку +
                                    </AddColBtn>

                            }
                        </DragDropContext>
                    </BoardContainer>
            }
        </>
    );
}
export default Board;

const Header = styled.header`
    height: 5vh;
    display: flex;
    
`

const AddColBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 250px;
    height: 50px;
    border-radius: 1px;
    color: black;
    background: #EBECF0;
    cursor: pointer;
`

const BoardContainer = styled.div`
    display: flex; 
    justifyContent: flex-start;
    height: 90vh;
    overflow-x: scroll;
    
    ::-webkit-scrollbar {
        width: 24px; /* ширина для вертикального скролла */
        height: 10px; /* высота для горизонтального скролла */
        background: #DCDCDC;
    }
    
    /* ползунок скроллбара */
    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 9em;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: grey;
    }
`
