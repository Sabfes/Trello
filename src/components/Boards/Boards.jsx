import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import uuid from "react-uuid";
import {onDragEnd} from "./onDragEnd";
import Column from "./Column/Column";

const columnsFromBackend = [
    {
        id: uuid(),
        name: "Requested",
        tasks: [{ id: uuid(), content: "1 task" },
            { id: uuid(), content: "2 task" },
            { id: uuid(), content: "3 task" },
            { id: uuid(), content: "4 task" },]
    }
]


const Board = () => {
    const [columns, setColumns] = useState(columnsFromBackend);


    const addCol = () => {
        setColumns([
            ...columns,
            {
                id: uuid(),
                name: "Test",
                tasks: []
            }
        ])
    }
    return (
        <div style={{marginLeft: '20px', display: "flex", justifyContent: "flex-start", height: "80%", overflowX: "scroll" }}>
            <button onClick={addCol}>add col</button>

            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns)}
            >
                {columns.map((col, index) => {
                    return <Column
                        col={col}
                        key={index}
                    />
                })}
            </DragDropContext>
        </div>
    );
}
export default Board;

