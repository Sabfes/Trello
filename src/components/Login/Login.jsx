import React, {useState} from "react"
import {Button, Col, Input} from "../StyledComponents/StyledComponents";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {loginMe} from "../../redux/actions/auth";
import {useHistory} from "react-router-dom"

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        dispatch(loginMe(login, password))
            .then( res => {
                if (res) {
                    history.push('/boardsList')
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
