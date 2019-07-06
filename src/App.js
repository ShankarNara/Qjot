import React,{ Component} from 'react';
import {View ,Text } from 'react-native';
import Router from './Router';
import {Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore ,applyMiddleWare} from 'redux'; 
import firebase from 'firebase';
import Firebase from './Firebase';
import reducers from './reducers';

class App extends Component{
    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAFLiGrxmPV3dZT-rXuR4kbDBPpuzGqIPc",
            authDomain: "mychat-a0744.firebaseapp.com",
            databaseURL: "https://mychat-a0744.firebaseio.com",
            projectId: "mychat-a0744",
            storageBucket: "mychat-a0744.appspot.com",
            messagingSenderId: "710104857237",
            appId: "1:710104857237:web:b3e6c552741decec"
          };

          if (!firebase.apps.length) {
           firebase.initializeApp(firebaseConfig);
        }
        
        
    }

    render(){
        const store = createStore(reducers); 
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;