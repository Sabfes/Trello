import {curBoardApi} from "../../api/curBoard";
// @ts-ignore
import uuid from "react-uuid";
import {
    AddColToStoreType,
    AddTaskType, CurBoardActions,
    curBoardActionsConstants,
    dataColType,
    DelColFromStoreType, DelTaskType, SetCurBoardType
} from "../types/curBoard";
import {IBoard, IColumn, ITask} from "../types/board";
import {Dispatch} from "redux";

//ACTION
export const addColToStore = (data: dataColType): AddColToStoreType => {
    return {
        type: curBoardActionsConstants.ADD_COL,
        payload: data
    }
}

export const delColFromStore = (colId: string): DelColFromStoreType => {
    return {
        type: curBoardActionsConstants.DEL_COL,
        payload: colId
    }
}

export const setCurBoard = (board: IBoard): SetCurBoardType => {
    return {
        type: curBoardActionsConstants.SET_CUR_BOARD,
        payload: board
    }
}

export const addTask = (columnId: string, task: ITask): AddTaskType => {
    return {
        type: curBoardActionsConstants.ADD_TASK,
        payload: {columnId, task}
    }
}

export const delTask = (columnId: string, taskId: string): DelTaskType => {
    return {
        type: curBoardActionsConstants.DELL_TASK,
        payload: {columnId, taskId}
    }
}

//THUNK
export const dellTaskFromColumns = (columnId: string, taskId: string) => async (dispatch: Dispatch<CurBoardActions>) => {
    try {
        const res = await curBoardApi.delTask(taskId)

        if (res.status === 200) {
            dispatch(delTask(columnId, taskId))
        }
    }catch (e) {
        console.log(e)
    }
}

export const addTaskToColumns = (columnId: string, taskText: string) => async (dispatch: Dispatch<CurBoardActions>) => {
    try {
        const task = {task: taskText, id: uuid()}
        const res = await curBoardApi.addTask(columnId, task)

        if (res.status === 200) {
            dispatch(addTask(columnId, task))
        }
    }catch (e) {
        console.log(e)
    }
}

export const getCurrentBoard = (boardId: string) => async (dispatch: Dispatch<CurBoardActions>) => {
    try {
        const res = await curBoardApi.getCurBoard(boardId)

        if (res.status === 200) {
            dispatch(setCurBoard(res.data))
        }
    } catch (e) {
        console.log(e)
    }
}

export const delCol = (boardId: string, colId: string) => async (dispatch: Dispatch<CurBoardActions>) => {
    const res = await curBoardApi.delCol(colId)

    if (res.status === 200) {
        dispatch(delColFromStore(colId))
    }
}

export const addCol = (boardId: string, col: IColumn) => async (dispatch: Dispatch<CurBoardActions>) => {
    const res = await curBoardApi.addCol(boardId, col)

    if (res.status === 200) {
        dispatch(addColToStore({boardId, col}))
    }
}
