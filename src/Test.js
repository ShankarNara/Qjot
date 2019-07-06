import React,{ Component} from 'react';
import {View ,Text } from 'react-native';
import {Button ,Input } from './components/common';

class Test extends Component{
    render(){
        return (
            <View>
                <Text>
                    I feel great today
                </Text>
                <Input placeholder= 'Username' secureTextEntry={false} />
                <Input placeholder= "password" secureTextEntry={true} />
                <Button >
                    Log in
                </Button>
            </View>
            
        );
    }
}
export default Test;