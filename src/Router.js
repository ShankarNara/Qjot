import React from 'react';
import {Scene, Actions ,Router} from 'react-native-router-flux';
import Test from './Test';
import LoginForm from './components/LoginForm';
import Editor from './components/Editor';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar >
                <Scene key= "auth">
                    <Scene key = "login" component= {LoginForm} title= "Please Login" initial/>
                </Scene>
                <Scene key = "main">
                    <Scene key="editor" component= {Editor} title="Editor" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;