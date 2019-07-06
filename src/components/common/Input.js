import React from 'react';
import { View ,TextInput} from 'react-native';

const Input = ({placeholder ,secureTextEntry ,onChangeText ,value }) => {
    return (
        <View style= {styles.viewStyle}>
            <TextInput
                style={styles.textInputStyle} 
                placeholder = {placeholder}
                secureTextEntry = {secureTextEntry}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = {
    viewStyle:{
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInputStyle:{
        color:'#C0C0C0',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23
    }
};

export { Input };