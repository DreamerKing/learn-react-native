/**
 * Created by DK on 2017/1/5.
 */

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class TextInputShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput placeholder={"请输入内容"}
                           style={styles.textInput}
                           autoCapitalize="sentences"
                           defaultValue={this.state.text}
                           editable={true}
                           maxLength={60}
                           onChangeText={(text) => this.setState({text})} />
                <Text style={styles.text}>
                    {this.state.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        height: 30,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    text: {
        marginTop: 5,
        color: "red"
    }

})
export default TextInputShow;