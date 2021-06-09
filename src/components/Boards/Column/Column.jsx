import React, {useState} from "react"
import {Droppable} from "react-beautiful-dnd";
import Task from "../Task/Task";
import styled from "styled-components";
import {Input, Row} from "../../StyledComponents/StyledComponents";

const Column = ({col,delCol, addTask,columnName}) => {
    const [inputActive, setInputActive] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const addNewTask = () => {
        if (inputValue.trim() !== '') {
            addTask(col.id, inputValue)
            setInputActive(false)
            setInputValue('')
        }
    }

    return  <ColumnContainer
        key={col.id}
    >
        <div style={{ marginRight: "5px"}}>
            <Droppable droppableId={col.id} key={col.id}>
                {(provided, snapshot) => {
                    return (
                        <div>
                            <ColumnHeader>
                                <span>{columnName}</span>

                                <Row>
                                    <DelTask onClick={() => delCol(col.id)}>x</DelTask>
                                </Row>
                            </ColumnHeader>
                            <ColumnMain
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver
                                        ? "#091E420A"
                                        : "#ebecf0",
                                    padding: 4,
                                    width: 250,
                                    minHeight: 80,
                                }}
                            >
                                {col.tasks.map((item, index) => {
                                    return <Task
                                        key={index}
                                        item={item}
                                        index={index}
                                        colId={col.id}
                                    />
                                })}
                                {provided.placeholder}
                            </ColumnMain>
                            <ColumnFooter>
                                {
                                    inputActive
                                        ? <Input
                                            autoFocus
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            width={240}
                                            height={40}
                                            placeholder="Название задания"
                                            onBlur={addNewTask}
                                            onKeyPress={(e) => {
                                                if (e.code === "Enter") {
                                                    addNewTask()
                                                }
                                            }}
                                        />
                                        : <AddBtnTask
                                            onClick={() => setInputActive(true)}
                                        >+ Добавить задание</AddBtnTask>
                                }
                            </ColumnFooter>
                        </div>
                    );
                }}
            </Droppable>
        </div>
    </ColumnContainer>
}
export default Column

const AddBtnTask = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 3px;
    width: 100%;
   
    
    &:hover {
        cursor: pointer;
        background: lightgrey;
    }
`

const ColumnFooter = styled.div`
    background: #ebecf0;
    padding: 5px;
`

const ColumnMain = styled.div`
    overflow-y: scroll;
    height: 73vh;
    
    ::-webkit-scrollbar {
        width: 8px; 
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #DCDCDC;
        border-radius: 10px;
    }
`

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    height: 95%;
`

const DelTask = styled.div`
    cursor: pointer;
    font-size: 20px;
`

const ColumnHeader = styled.div`
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: space-between;
    background: #ebecf0;
    font-weight: 300;
    font-size: 20px;
    padding: 10px;
    text-align: center;
    height: 50px;
`
