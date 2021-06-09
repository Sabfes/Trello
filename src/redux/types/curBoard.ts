import {IBoard, IColumn, ITask} from "./board";

export enum curBoardActionsConstants {
    ADD_COL = 'ADD_COL',
    DEL_COL = 'DEL_COL',
    SET_CUR_BOARD = 'SET_CUR_BOARD',
    ADD_TASK =  'ADD_TASK',
    DELL_TASK = 'DELL_TASK',
}

export interface CurBoardState {
    columns: IColumn[],
    boardName: string
}

export type dataColType = {
    boardId: string,
    col: IColumn,
}

export interface AddColToStoreType {
    type: curBoardActionsConstants.ADD_COL,
    payload: dataColType,
}

export interface DelColFromStoreType {
    type: curBoardActionsConstants.DEL_COL,
    payload: string
}

export interface AddTaskType {
    type: curBoardActionsConstants.ADD_TASK,
    payload: {
        columnId: string,
        task: ITask
    },
}

export interface DelTaskType {
    type: curBoardActionsConstants.DELL_TASK,
    payload: {
        columnId: string,
        taskId: string,
    }
}

export interface SetCurBoardType {
    type: curBoardActionsConstants.SET_CUR_BOARD,
    payload: IBoard
}

export type CurBoardActions = AddColToStoreType | DelColFromStoreType |
    DelTaskType | AddTaskType | SetCurBoardType
