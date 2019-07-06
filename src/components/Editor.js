import React,{Component} from 'react';
import { View ,Text} from 'react-native';

class Editor extends Component{
    render(){
        return (
            <View style= {{flex: 1, alignItems: 'center' ,justifyContent: 'center' }}>
                <Text style= {{fontSize: 48}}>
                    SUCCESS!
                </Text>
            </View>
        );
    }
};

export default Editor;