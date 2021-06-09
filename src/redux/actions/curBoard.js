// import {boardsApi} from "../../api/boardsApi";
import {curBoardApi} from "../../api/curBoard";
import uuid from "react-uuid";

export const curBoardActionsConstants = {
    ADD_COL: 'ADD_COL',
    DEL_COL: 'DEL_COL',
    SET_CUR_BOARD: 'SET_CUR_BOARD',
    ADD_TASK: 'ADD_TASK',
    DELL_TASK: 'DELL_TASK',
}

//ACTION
export const addColToStore = (data) => {
    return {
        type: curBoardActionsConstants.ADD_COL,
        payload: data
    }
}

export const delColFromStore = (colId) => {
    return {
        type: curBoardActionsConstants.DEL_COL,
        payload: colId
    }
}

export const setCurBoard = (responseData) => {
    return {
        type: curBoardActionsConstants.SET_CUR_BOARD,
        payload: responseData
    }
}

export const addTask = (columnId, task) => {
    return {
        type: curBoardActionsConstants.ADD_TASK,
        payload: {columnId, task}
    }
}

export const delTask = (columnId, taskId) => {
    return {
        type: curBoardActionsConstants.DELL_TASK,
        payload: {columnId, taskId}
    }
}

//THUNK
export const dellTaskFromColumns = (columnId, taskId) => async (dispatch) => {
    try {
        const res = await curBoardApi.delTask(taskId)

        if (res.status === 200) {
            dispatch(delTask(columnId, taskId))
        }
    }catch (e) {
        console.log(e)
    }
}

export const addTaskToColumns = (columnId) => async (dispatch) => {
    try {
        const task = {task: "test", id: uuid()}
        const res = await curBoardApi.addTask(columnId, task)

        if (res.status === 200) {
            dispatch(addTask(columnId, task))
        }
    }catch (e) {
        console.log(e)
    }
}

export const getCurrentBoard = (boardId) => async (dispatch) => {
    try {
        const res = await curBoardApi.getCurBoard(boardId)
        console.log(res)
        if (res.status === 200) {
            dispatch(setCurBoard(res.data))
        }
    } catch (e) {
        console.log(e)
    }
}

export const delCol = (boardId, colId) => async (dispatch) => {
    const res = await curBoardApi.delCol(colId)

    if (res.status === 200) {
        dispatch(delColFromStore(colId))
    }
}

export const addCol = (boardId, col) => async (dispatch) => {
    const res = await curBoardApi.addCol(boardId, col)

    if (res.status === 200) {
        dispatch(addColToStore({boardId, col}))
    }
}
