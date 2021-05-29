import {boardsApi} from "../../api/boardsApi";
import uuid from "react-uuid";

export const boardsActionsConstants = {
    SET_BOARDS: 'SET_BOARDS',
    ADD_BOARD_TO_STORE: 'ADD_BOARD_TO_STORE',
    DELETE_BOARD_FROM_STORE: 'DELETE_BOARD_FROM_STORE',
}

//ACTIONS
export const setBoards = (data) => {
    return {
        type: boardsActionsConstants.SET_BOARDS,
        payload: data
    }
}

export const addBoardToStore = (board) => {
    return {
        type: boardsActionsConstants.ADD_BOARD_TO_STORE,
        payload: board
    }
}

export const deleteBoardFromStore = (boardId) => {
    return {
        type: boardsActionsConstants.DELETE_BOARD_FROM_STORE,
        payload: boardId
    }
}

//THUNK
export const getBoards = (userId) => async (dispatch) => {
    try {
        const res = await boardsApi.getBoards(userId)

        if (res.status === 200) {
            dispatch(setBoards(res.data))
        }
    } catch (e) {
        console.log(e)
    }
}

export const addBoard = (userId, nameOfBoard) => async (dispatch) => {
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

export const deleteBoard = (boardId) => async (dispatch) => {
    const res = await boardsApi.delBoard(boardId)

    if (res.status === 200) {
        dispatch(deleteBoardFromStore(boardId))
    }
}
