import React from 'react';
import {Scene, Actions ,Router} from 'react-native-router-flux';
import Test from './Test';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar >
                <Scene key="test" component={Test} title="Test" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;