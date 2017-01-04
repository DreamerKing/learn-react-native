/**
 * Created by DK on 2017/1/4.
 */
import React, { Component } from 'react';
import {View,Image } from 'react-native';

class Girl extends Component {
    render() {
        return (
                <View>
                    <Image source = {this.props.source}
                           style={this.props.style} />
                </View>
            )

    }
}

export default Girl;