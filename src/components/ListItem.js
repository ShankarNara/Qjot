import React, { Component } from 'react';
import {View, TouchableOpacity, Text } from 'react-native';
import {Actions } from 'react-native-router-flux';

class ListItem extends Component {

    onRowPress(){
        console.log(this.props.employee);
        Actions.editor({ employee: this.props.employee});
    }

    render(){

        const {title } = this.props.employee;

        return (
            <TouchableOpacity onPress= {this.onRowPress.bind(this)}>
                <View>
                    <Text style= {styles.titleStyle}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 24,
        padding: 10
    }
};
export default ListItem;