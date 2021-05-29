import {Route, Switch} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import React, {useEffect} from "react";
import styled from "styled-components";
import HomePage from "./components/HomePage/HomePage";
import Boards from "./components/Boards/Boards";
import BoardList from "./components/BoardsList/BoardList";
import {authMe} from "./redux/actions/auth";
import {useHistory} from 'react-router-dom'
import {getBoards} from "./redux/actions/boards";

function App() {
    const userId = useSelector(state => state.auth.userId)
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(authMe())
        dispatch(getBoards(userId))
        history.push("/boardsList")
    }, [dispatch, history, userId])

    return (
        <AppWrap>
            <NavBar />
            <Switch>
                {
                    isAuth
                        ?   <Switch>
                            <Route path={"/boardsList"} exact component={BoardList} />
                            <Route path={"/boards/:id"} exact component={Boards} />
                            <Route path={"/"} exact component={HomePage} />
                        </Switch>
                        :   <Switch>
                            <Route path={"/registration"} exact component={Registration}/>
                            <Route path={"/login"} exact component={Login}/>
                            <Route path={"/"} component={HomePage} />
                        </Switch>
                }
            </Switch>
        </AppWrap>
    );
}
export default App;

const AppWrap = styled.div`
    height: 100vh;
    // background: linear-gradient(0deg, #fff, #E5E5E5 100%);    
    background: white;
`
