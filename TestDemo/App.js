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

    _onDateChange = (date) => {
        console.warn('date = ' + date.toLocaleString());
    };

    render() {

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <DatePickerIOS
                    date={new Date()}
                    onDateChange={this._onDateChange}
                />
            </View>
        );
    }

}
