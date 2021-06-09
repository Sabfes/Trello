export enum boardsActionsConstants {
    SET_BOARDS = 'SET_BOARDS',
    ADD_BOARD_TO_STORE = 'ADD_BOARD_TO_STORE',
    DELETE_BOARD_FROM_STORE = 'DELETE_BOARD_FROM_STORE',
}

export interface ITask {
    task: string,
    id: string
}

export interface IColumn {
    columnName: string,
    id: string,
    tasks: ITask[],
}

export interface IBoard {
    boardName: string,
    id: string,
    columns: IColumn[]
}

export interface BoardsState {
    boards: IBoard[],
}

export interface setBoardsType {
    type: boardsActionsConstants.SET_BOARDS,
    payload: IBoard[]
}

export interface addBoardToStoreType {
    type: boardsActionsConstants.ADD_BOARD_TO_STORE,
    payload: IBoard
}

export interface deleteBoardFromStoreType {
    type: boardsActionsConstants.DELETE_BOARD_FROM_STORE,
    payload: number
}

export type BoardsActions = deleteBoardFromStoreType | addBoardToStoreType | setBoardsType
