import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

const Button = ({ children ,styleProp ,onPress}) => {
    return (
        <TouchableOpacity 
            style={styles.buttonStyle}
            onPress = {onPress}
        >
            <Text style={[styles.textStyle , styleProp]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom:10,
        marginTop:10,
        fontWeight:'600',
        color: '#FF7E69'
    },
    buttonStyle:{
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };