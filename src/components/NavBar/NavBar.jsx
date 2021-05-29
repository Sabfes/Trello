import React from "react"
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Row} from "../StyledComponents/StyledComponents";
import {useDispatch, useSelector} from "react-redux";
import {authToggle} from "../../redux/actions/auth";

const NavBar = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)

    return <Navbar>
        <Link to={"/"}><Logo>Trello</Logo></Link>

        <Row mr={30}>
            {
                isAuth
                    ?   <Link to={"/"} onClick={() => dispatch(authToggle(false))}>logout</Link>
                    :   <>
                        <Link to={"/registration"}>Регистрация</Link>
                        <Link to={"/login"}>Логин</Link>
                    </>
            }
        </Row>
    </Navbar>
}
export default NavBar

const Navbar = styled.div`
    display: flex;
    height: 5vh;
    align-items: center;   
    justify-content: space-between;
`
const Link = styled(NavLink)`
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    margin-right: 10px;
    
    &:last-of-type {
        margin-right: 0px;
    }
`

const Logo = styled.h1`
    font-size: 25px;
    font-weight: 300;
    margin-left: 30px;
    cursor: pointer;
`
