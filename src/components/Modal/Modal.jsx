import React, {useRef, useState} from "react"
import styled from "styled-components";
import {Button, Col, H2, Input, Row} from "../StyledComponents/StyledComponents";

const Modal = ({isModalOpen, setModalOpen, addBoard}) => {
    const modalRef = useRef(null)
    const [boardName, setBoardName] = useState('')

    return <Wrap isModalOpen={isModalOpen}>
        <Window ref={modalRef}>
            <Col>
                <Row mt={50} ml={50}>
                    <H2>Создние доски</H2>
                    <H2 ml={90} onClick={() => setModalOpen(false)}>Закрыть</H2>
                </Row>
                <Col ml={50} mt={20}>
                    <H2 mt={20} mb={10}>Название доски</H2>
                    <Input  value={boardName} onChange={ (e) => setBoardName(e.target.value)}/>
                    <Button onClick={() => {
                        addBoard(boardName)
                        setBoardName('')
                    }} mt={10} width={300} color={"white"} bg={"#0051cc"}>Создать доску</Button>
                </Col>
            </Col>

        </Window>
    </Wrap>
}

export default Modal

const Window = styled.div`
    border-radius: 20px;
    display: block;
    width: 400px;
    height: 300px;
    background: white;
`

const Wrap = styled.div`
    display: ${({isModalOpen}) => isModalOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0, .4);
    z-index: 100;
`
