import React,{Component} from 'react';
import { View ,Text ,TextInput} from 'react-native';
import {connect } from 'react-redux';
import { Button ,Input} from './common';
import {
    editText,
    editTitle,
    fileCreate
} from '../actions'

class Editor extends Component{

    onTextChange(text) {
        this.props.editText(text);
    }

    onTitleChange(title) {
        this.props.editTitle(title);
    }

    onButtonPress() {
        const {title ,text} = this.props;

        this.props.fileCreate({title ,text});
    }

    render(){
        return (
            <View style= {styles.mainViewStyle}>

                    <Input
                        onChangeText= {this.onTitleChange.bind(this)}
                        placeholder= 'Title'
                        value= {this.props.title}
                    />

                <View style= {styles.editorViewStyle}>
                    
                    <TextInput 
                        style={styles.editorTextStyle}
                        editable={true}
                        onChangeText= {this.onTextChange.bind(this)}
                        multiline = {true}
                        numberOfLines = {4}
                        value= {this.props.text}
                    />
                </View>

                <Button onPress= {this.onButtonPress.bind(this)}>
                    Save
                </Button>
            </View>
        );
    }
};

const styles= {
    mainViewStyle:{
        //flex: 2,
        alignItems :'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    editorViewStyle:{
       // flex: 5,
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 20,
        //backgroundColor: '#A3E4D7'
    },
    editorTextStyle:{
        //flex: 1, 
        backgroundColor: '#F3FF33', 
        width: 300 ,
        borderRadius: 15
    },
    titleStyle :{
        //flex: 1,
        backgroundColor: '#5D6D7E',
        alignItems: 'stretch',
        fontSize: 32,
        paddingLeft: 15
    }
};

const mapStateToProps = (state) => {
    return {
        text: state.edit.text,
        title: state.edit.title,
        savetag: state.edit.savetag
    };
};

export default connect(mapStateToProps , { editText ,editTitle ,fileCreate })(Editor);

