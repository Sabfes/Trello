import React from "react"
import {Droppable} from "react-beautiful-dnd";
import Task from "../Task/Task";
import styled from "styled-components";
import {Row} from "../../StyledComponents/StyledComponents";

const Column = ({col,delCol, addTask,columnName}) => {
    return  <ColumnContainer
        key={col.id}
    >
        <div style={{ margin: "0px 10px 0px 10px" }}>
            <Droppable droppableId={col.id} key={col.id}>
                {(provided, snapshot) => {
                    return (
                        <div>
                            <ColumnHeader>
                                <span>{columnName}</span>

                                <Row>
                                    <AddTask onClick={() => addTask(col.id)}>+</AddTask>
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
                        </div>
                    );
                }}
            </Droppable>
        </div>
    </ColumnContainer>
}
export default Column

const ColumnMain = styled.div`
    overflow-y: scroll;
    height: 80vh;
    
    ::-webkit-scrollbar {
        width: 8px; 
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: grey;
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
const AddTask = styled.div`
    cursor: pointer;
    font-size: 20px;
    margin-right: 20px;
`

const ColumnHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background: #ebecf0;
    font-weight: 300;
    font-size: 20px;
    padding: 10px;
    text-align: center;
    height: 50px;
`
