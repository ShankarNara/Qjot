import React,{ Component } from 'react';
import _ from 'lodash';
import { ListView , FlatList ,List  ,View ,Text } from 'react-native';
import { connect } from 'react-redux';
import { fileFetch } from '../actions';
import ListItem from './ListItem';

class FileList extends Component {

    componentWillMount(){
        console.log("file fetching to happen");
        this.props.fileFetch();
        console.log(this.props.files);
    }

    render() {

        if(this.props.loading){
            return(
                <View>
                    <Text style= {{fontSize: 32}}>
                        Please Wait...
                    </Text>
                </View>
            );
        }

        console.log(this.props.files);

        return (
          <View>
              <FlatList
                data = {this.props.files}
                 renderItem ={({ item }) => (
                    <ListItem file= {item}/>
                 )}
                 keyExtractor= {item => item.uid}
                />
          </View>
        );
    }
}

const mapStateToProps = (state) => {
    const files = _.map( state.files.list ,(val ,uid) => {
        return { ...val, uid};
    });

    const loading = state.files.loading;

    console.log(files);
    return { files , loading};
};

export default connect(mapStateToProps, { fileFetch } )(FileList);

