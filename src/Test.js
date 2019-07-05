import React,{ Component} from 'react';
import {View ,Text } from 'react-native';
import {Button } from './components/common';

class Test extends Component{
    render(){
        return (
            <View>
                <Text>
                    I feel great today
                </Text>
                <Button >
                    Log in
                </Button>
            </View>
            
        );
    }
}
export default Test;