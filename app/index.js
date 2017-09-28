import React, { Component } from 'react';
import { Text, View } from "react-native";
import RouterConfig from "./config/router";
import { Provider } from 'react-redux';
import Store from "./store/index"

export default class Main extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <RouterConfig />
            </Provider>
        )
    }
}