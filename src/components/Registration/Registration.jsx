import React, {useState} from "react"
import {Button, Col, Input} from "../StyledComponents/StyledComponents";
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {registrationMe} from "../../redux/actions/auth";

const Registration = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const submit = (login, password, email) => {
        const role = ['user']

        dispatch(registrationMe(login, password, email, role))
    }

    return <Wrap>
        <Title>Регистрация</Title>

        <Col>
            <span>Логин</span>
            <Input type={"text"} value={login} onChange={(e) => setLogin(e.target.value)}/>
            <span>Пароль</span>
            <Input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <span>Емейл</span>
            <Input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Button bg={"#0051cc"} color={'white'} onClick={() => submit(login, password, email)}>Зарегистрироваться</Button>
        </Col>
    </Wrap>
}
export default Registration

const Title = styled.h1`
    font-weight: 300;
    font-size: 40px;
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60%;
`
