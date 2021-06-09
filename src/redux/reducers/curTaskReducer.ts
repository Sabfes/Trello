// import {curTaskActionsConstants} from "../actions/auth";

import {CurTaskState} from "../types/curTask";

const initialState: CurTaskState = {
    taskInfo: []
}

export const curTaskReducer = (state = initialState, action: any): CurTaskState => {
    switch (action.type) {
        default:
            return state
    }
}
