import React,{Component} from 'react';
import {View ,Text} from 'react-native';
import {Input ,Button} from './common';

class LoginForm extends Component{
    render(){
        return (
            <View>
                <Text style= {{
                    fontSize: 24,
                    height: 50,
                    marginTop: 20,
                    alignSelf: 'center',
                    JustifyContent: 'center'
                }}>
                    Log In
                </Text>
                <Input placeholder= 'Username' secureTextEntry={false} />
                <Input placeholder= "password" secureTextEntry={true} />
                <Button styleProp={{}}>
                    Log in
                </Button>
            </View>
        );
    }
}

export default LoginForm;