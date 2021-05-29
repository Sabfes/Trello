import React, {useEffect, useState} from "react";
import { DragDropContext } from "react-beautiful-dnd";
import uuid from "react-uuid";
import {onDragEnd} from "./onDragEnd";
import Column from "./Column/Column";
import styled from "styled-components";
import {NavLink, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {addCol, addTaskToColumns, delCol, getCurrentBoard} from "../../redux/actions/curBoard";
import {H2, Input} from "../StyledComponents/StyledComponents";


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
        },1000)
    }, [])
    const board = useSelector(state => state.curBoard)

    const addTaskHandler = (colId) => {
        dispatch(addTaskToColumns(colId))
    }

    const delColHandler = (colId) => {
        dispatch(delCol(boardId,colId))
    }
    const addColHandler = (columnName) => {
        const col = {
            id: uuid(),
            columnName: columnName,
            tasks: []
        }
        dispatch(addCol(boardId, col))
    }
    return (
        <>
            <Header>
                <H2 pointer ml={30} mr={15}>{board.boardName}</H2>
                <H2><NavLink className="link" to={"/boardsList"}>Список досок</NavLink></H2>
                <H2 pointer ml={15}>Добавить в избраное</H2>
                <H2 pointer ml={915}>Настройки</H2>
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
                                    ?   <div style={{height: '50px'}}>
                                        <Input
                                            width={100}
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
                                            width={'100px'}
                                            height={"50px"}
                                            value={columnName}
                                            onChange={(e) => setColumnName(e.target.value)}
                                        />
                                    </div>
                                    : <AddColBtn
                                        onClick={() => setIsInputOpen(true)}
                                    >+</AddColBtn>

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
    width: 30px;
    height: 30px;
    border-radius: 100px;
    color: black;
    background: lightgrey;
    cursor: pointer;
`

const BoardContainer = styled.div`
   display: flex; 
   justifyContent: flex-start;
   height: 90vh;
   overflow-x: scroll;
   
   ::-webkit-scrollbar {
    height: 1px;     
   }
`
