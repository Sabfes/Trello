import {Route, Switch} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import {useSelector} from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import styled from "styled-components";
import HomePage from "./components/HomePage/HomePage";
import Boards from "./components/Boards/Boards";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <AppWrap>
            <NavBar />
            <Switch>
                {
                    !isAuth &&
                        <Switch>
                            <Route path={"/"} exact component={HomePage} />
                            <Route path={"/registration"} exact component={Registration}/>
                            <Route path={"/login"} exact component={Login}/>
                            <Route path={"/boards/:id"} exact component={Boards} />
                        </Switch>
                }
            </Switch>
        </AppWrap>
    );
}
export default App;

const AppWrap = styled.div`
    height: 100vh;
    background: linear-gradient(0deg, #fff, #E5E5E5 100%);    
`
