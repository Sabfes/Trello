import React from "react"
import {Draggable} from "react-beautiful-dnd";
import {Row} from "../../StyledComponents/StyledComponents";
import {dellTaskFromColumns} from "../../../redux/actions/curBoard";
import {useDispatch} from "react-redux";

const Task = ({item, index,colId}) => {
    const dispatch = useDispatch()

    return <Draggable
        key={item.id}
        draggableId={item.id}
        index={index}
    >
        {(provided, snapshot) => {
            return (
                <Row>
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            width: '100%',
                            userSelect: "none",
                            padding: 16,
                            margin: "0 0 8px 0",
                            minHeight: "50px",
                            backgroundColor: "white",
                            color: "black",
                            ...provided.draggableProps.style
                        }}
                    >
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            {item.task}
                            <span
                                onClick={(e) => {
                                    dispatch(dellTaskFromColumns(colId, item.id))
                                }}
                                style={{cursor: "pointer"}}
                            >
                            X
                        </span>
                        </div>
                    </div>
                </Row>
            );
        }}
    </Draggable>
}
export default Task
