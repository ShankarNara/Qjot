import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

const Button = ({ children}) => {
    return (
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        fontSize: 16,
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom:10,
        marginTop:10,
        fontWeight:'600',
        color: '#FF7E69'
    },
    buttonStyle:{
        flex: 1,
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