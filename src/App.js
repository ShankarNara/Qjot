import React,{ Component} from 'react';
import {View ,Text } from 'react-native';
import Router from './Router';
import {Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore ,applyMiddleware} from 'redux'; 
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component{
    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyC3DiF4E4zY85vRBLg98AoydPG5dprRfOI",
            authDomain: "qjot-5a7bd.firebaseapp.com",
            databaseURL: "https://qjot-5a7bd.firebaseio.com",
            projectId: "qjot-5a7bd",
            storageBucket: "qjot-5a7bd.appspot.com",
            messagingSenderId: "288265683962",
            appId: "1:288265683962:web:e7377325004e9d40"
          };
          // Initialize Firebase
          //firebase.initializeApp(firebaseConfig);

        console.log(firebase.apps.length);

        firebase.initializeApp(firebaseConfig);
        
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;