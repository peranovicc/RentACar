import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import Cars from "./components/Cars";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { black } from "./constants";
import Content from "./layout/Content";
import Header from "./layout/Header";

const App = () => {
    const [userId,setUserId] = useState(localStorage.getItem('userId'))

    return (
        <Wrapper>
            <Header userId={userId} setUserId={setUserId} />
            <Content>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login setUserId={setUserId} />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/logout">
                        <Redirect to="/" />
                    </Route>
                    <Route exact path="/cars">
                        <Cars />
                    </Route>
                    <Route exact path="/cars/:id">
                        {/* <Car /> */}
                    </Route>
                    <Route exact path="/my-profile">
                        <Profile userId={userId} setUserId={setUserId} />
                    </Route>
                </Switch>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0;
    padding:0;
    min-height: 100vh;
    background-color: ${black};
`

export default App;
