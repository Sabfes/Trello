import {combineReducers} from "redux";
import {boardsReducer} from "./boardsReducer";
import {authReducer} from "./authReducer";
import {curBoardReducer} from "./curBoardReducer";
import {curTaskReducer} from "./curTaskReducer";

export const rootReducer = combineReducers({
    boards: boardsReducer,
    auth: authReducer,
    curBoard: curBoardReducer,
    curTask: curTaskReducer,
})

export type RootState = ReturnType<typeof rootReducer>
