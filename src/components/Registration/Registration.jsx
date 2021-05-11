import React, {useState} from "react"
import {Button, Col, Input} from "../StyledComponents/StyledComponents";
import styled from 'styled-components'
import axios from "axios";

const Registration = () => {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const submit = (login, password, email) => {
        axios.post('https://sabfesapp.herokuapp.com/api/auth/signup', {
            username: login,
            email: email,
            role: ['user'],
            password: password,
        }).then(res => console.log(res))
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
