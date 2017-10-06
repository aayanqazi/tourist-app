import React from "react";
import { StackNavigator, DrawerNavigator, NavigationActions } from "react-navigation";
import { Main, Login, Signup} from "../container/";
import {Welcome } from "../component";
import { Button, Icon } from "native-base";

const Drawer = DrawerNavigator({
    Home: {
        screen: Main
    }
}, { drawerWidth: 200 })

const routerConfig = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null,
        },
    },
    Welcome:{
        screen:Welcome,
        navigationOptions: {
            header: null,
            
        }
    },
    Home: {
        screen: Drawer
    }
}, {
        headerMode: 'screen'
    }
)

export default routerConfig;