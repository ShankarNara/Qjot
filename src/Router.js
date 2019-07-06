import React from 'react';
import {Scene, Actions ,Router} from 'react-native-router-flux';
import Test from './Test';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar >
                <Scene key= "auth">
                    <Scene key = "login" component= {LoginForm} title= "Please Login" initial/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;