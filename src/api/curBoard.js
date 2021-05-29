import {instance} from "./api";

export const curBoardApi = {
    getCurBoard: (boardId) => {
        return instance.get(`board/getone/${boardId}`)
    },
    addCol: (boardId, col) => {
        return instance.post(`board/col/${boardId}`, col)
    },
    delCol: (colId) => {
        return instance.delete(`board/col/${colId}`)
    },
    addTask: (columnId, task) => {
        return instance.post(`/board/task/${columnId}`, task)
    },
    delTask: (taskId) => {
        return instance.delete(`board/task/${taskId}`)
    }
};
