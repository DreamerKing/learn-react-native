/**
 * Created by DK on 2017/1/4.
 */
import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

class Strong extends Component {
    render() {
        return <Text style={this.props.style}>{this.props.children}</Text>
    }
}

export default Strong;