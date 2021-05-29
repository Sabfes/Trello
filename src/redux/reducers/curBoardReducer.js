import {curBoardActionsConstants} from "../actions/curBoard";

const initialState = {
    columns: [],
    boardName: ''
}

export const curBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case curBoardActionsConstants.DELL_TASK:
            const newColsAfterDel = state.columns.map(el => {
                if (el.id === action.payload.columnId) {
                    el.tasks = el.tasks.filter(el => el.id !== action.payload.taskId)
                }
                return el
            })
            return {
                ...state,
                columns: newColsAfterDel
            }
        case curBoardActionsConstants.ADD_TASK:
            const newColsAfterAdd = state.columns.map(el => {
                if (el.id === action.payload.columnId) {
                    el.tasks.push(action.payload.task)
                }
                return el
            })
            return {
                ...state,
                columns: newColsAfterAdd
            }
        case curBoardActionsConstants.SET_CUR_BOARD:
            return {
                ...state,
                columns: action.payload.columns,
                boardName: action.payload.boardName
            }
        case curBoardActionsConstants.ADD_COL:
            return {
                ...state,
                columns: [...state.columns, action.payload.col]
            }
        case curBoardActionsConstants.DEL_COL: {
            return {
                ...state,
                columns: state.columns.filter(el => el.id !== action.payload)
            }
        }
        default:
            return state
    }
}
