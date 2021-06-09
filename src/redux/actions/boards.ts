import {boardsApi} from "../../api/boardsApi";
// @ts-ignore
import uuid from "react-uuid";
import {
    addBoardToStoreType,
    BoardsActions,
    boardsActionsConstants,
    deleteBoardFromStoreType,
    IBoard,
    setBoardsType
} from "../types/board";
import {Dispatch} from "redux";

//ACTIONS
export const setBoards = (data: IBoard[]): setBoardsType => {
    return {
        type: boardsActionsConstants.SET_BOARDS,
        payload: data
    }
}

export const addBoardToStore = (board: IBoard): addBoardToStoreType => {
    return {
        type: boardsActionsConstants.ADD_BOARD_TO_STORE,
        payload: board
    }
}

export const deleteBoardFromStore = (boardId: string): deleteBoardFromStoreType => {
    return {
        type: boardsActionsConstants.DELETE_BOARD_FROM_STORE,
        payload: boardId
    }
}

//THUNK
export const getBoards = (userId: number | null) => async (dispatch: Dispatch<BoardsActions>) => {
    try {
        const res = await boardsApi.getBoards(userId)

        if (res.status === 200) {
            dispatch(setBoards(res.data))
        }
    } catch (e) {
        console.log(e)
    }
}

export const addBoard = (userId: number, nameOfBoard: string) => async (dispatch: Dispatch<BoardsActions>) => {
    const board = {
        id: uuid(),
        boardName: nameOfBoard,
        columns: []
    }

    const res = await boardsApi.addBoard(userId, board)

    if (res.status === 200) {
        dispatch(addBoardToStore(board))
    }
}

export const deleteBoard = (boardId: string) => async (dispatch: Dispatch<BoardsActions>) => {
    const res = await boardsApi.delBoard(boardId)

    if (res.status === 200) {
        dispatch(deleteBoardFromStore(boardId))
    }
}
