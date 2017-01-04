/**
 * Created by DK on 2017/1/4.
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {showText:true};
        setInterval(() => {
            this.setState({ showText : !this.state.showText });
        },1000)
    }

    render() {
        let display = this.state.showText ? this.props.children : "";
        return <Text>{display}</Text>
    }
}

export default Blink;