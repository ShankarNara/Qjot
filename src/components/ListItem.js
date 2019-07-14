import React, { Component } from 'react';
import {View, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import {Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import {
    editText,
    editTitle
} from '../actions';

class ListItem extends Component {

    onRowPress(){
        console.log(this.props.file);
        this.props.editText(this.props.file.text);
        this.props.editTitle(this.props.file.title);
        Actions.editor();
    }

    render(){

        const {title , text} = this.props.file;

        return (
            <TouchableWithoutFeedback onPress= {this.onRowPress.bind(this)}>
                <View>
                    <Text style= {styles.titleStyle}>
                        {title}
                    </Text>
                </View>
            </TouchableWithoutFeedback >
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 24,
        padding: 10
    }
};
export default connect(null, {editText,editTitle})(ListItem);