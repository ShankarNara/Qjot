import React,{Component} from 'react';
import {View ,Text} from 'react-native';
import {Input ,Button} from './common';
import {connect } from 'react-redux';
import {emailChanged ,passwordChanged ,loginUser} from '../actions';


class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }

    onLoginUser() {
        const {email ,password} = this.props;

        this.props.loginUser({email,password});
    }

    render(){
        return (
            <View>
                <Text style= {{
                    fontSize: 24,
                    hieght: 50,
                    marginTop: 20,
                    alignSelf: 'center',
                    JustifyContent: 'center'
                }}>
                    Log In
                </Text>
                <Input 
                    placeholder= 'Username' 
                    secureTextEntry={false}
                    onChangeText= {this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
                <Input 
                    placeholder= "password" 
                    secureTextEntry={true} 
                    onChangeText= {this.onPasswordChanged.bind(this)}
                    value={this.props.password}
                />
                <Button 
                    styleProp={{}}
                    onPress = {this.onLoginUser.bind(this)}
                >
                    Log in
                </Button>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error
    };
};

export default connect (mapStateToProps ,{ emailChanged ,passwordChanged ,loginUser})(LoginForm);