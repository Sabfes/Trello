import React from "react"
import {Droppable} from "react-beautiful-dnd";
import Task from "../Task/Task";

const Column = ({col}) => {
    return  <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}
        key={col.id}
    >
        <div style={{ margin: 8 }}>
            <h2>{col.name}</h2>
            <Droppable droppableId={col.id} key={col.id}>
                {(provided, snapshot) => {
                    return (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                background: snapshot.isDraggingOver
                                    ? "pink"
                                    : "lightgrey",
                                padding: 4,
                                width: 250,
                                minHeight: 80
                            }}
                        >
                            {col.tasks.map((item, index) => {
                                return <Task
                                    key={index}
                                    item={item}
                                    index={index}
                                />
                            })}
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
        </div>
    </div>
}

export default Column
