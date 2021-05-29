import {boardsActionsConstants} from "../actions/boards";

const initialState = {
    boards: [],
}

export const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case boardsActionsConstants.SET_BOARDS:
            return {
                ...state,
                boards: action.payload
            }
        case boardsActionsConstants.ADD_BOARD_TO_STORE:
            return {
                ...state,
                boards: [...state.boards, action.payload]
            }
        case boardsActionsConstants.DELETE_BOARD_FROM_STORE:
            return {
                ...state,
                boards: state.boards.filter(el => el.id !== action.payload)
            }
        default:
            return state
    }
}
