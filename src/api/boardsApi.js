import {instance} from "./api";

export const boardsApi = {
    getBoards: (userId) => {
        return instance.get(`board/${userId}`)
    },
    addBoard: (userId, board) => {
        return instance.post(`board/${userId}`, board)
    },
    delBoard: (boardId) => {
        return instance.delete(`board/${boardId}`)
    },
};
