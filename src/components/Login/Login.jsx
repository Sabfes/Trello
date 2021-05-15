import React, {useState} from "react"
import {Button, Col, Input} from "../StyledComponents/StyledComponents";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {authToggle} from "../../redux/actions/user";

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        axios.post('https://sabfesapp.herokuapp.com/api/auth/signin', {
            username: 'test',
            password: 'test',
        }).then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                history.push(`/boardsList`)
                dispatch(authToggle(true))
            }
        })
    }

    return <Wrap>
        <Title>Логин</Title>

        <Col>
            <span>Логин</span>
            <Input
                placeholder={"Логин"}
                value={login} onChange={(e) => setLogin(e.target.value)}
            />
            <span>Пароль</span>
            <Input
                placeholder={"Пароль"}
                value={password} onChange={(e) => setPassword(e.target.value)}
                type={"password"}
            />

            <Button bg={"#0051cc"} color={'white'}
                    onClick={loginHandler}
            >Войти</Button>
        </Col>
    </Wrap>
}
export default Login

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60%;
`

const Title = styled.h1`
    font-weight: 300;
    font-size: 40px;
`
