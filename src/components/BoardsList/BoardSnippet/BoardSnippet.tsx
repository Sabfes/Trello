import React from "react"
import {Link} from "react-router-dom";
import styled from "styled-components";
import {IBoard} from "../../../redux/types/board";

type BoardSnippetProps = {
    board: IBoard,
    delBoardHandler: (boardId: string) => void,
}

const BoardSnippet: React.FC<BoardSnippetProps> = ({board,delBoardHandler}) => {
    return <div>
        <span onClick={() => delBoardHandler(board.id)}>delete</span>
        <Link to={`/boards/${board.id}`}>
            <Board>
                {board.boardName}
            </Board>
        </Link>
    </div>
}

export default BoardSnippet

const Board = styled.div`
    padding: 10px;
    width: 200px;
    color: grey;
    height: 120px;
    background: white;
    border: 1px solid lightgrey;
    border-radius: 20px;
    transition: 1s;
    
    &:hover {
        transform: scale(1.03);
    }
`
