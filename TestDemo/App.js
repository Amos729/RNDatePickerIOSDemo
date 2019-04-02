/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, DatePickerIOS} from 'react-native';

export default class App extends Component {

    state = {
        chosenDate: new Date()
    };

    _onDateChange = (date) => {
        console.warn(666)
        this.setState({chosenDate: date});
    };

    render() {

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this._onDateChange}
                />
            </View>
        );
    }

}
