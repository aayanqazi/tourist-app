import React from "react";
import { StackNavigator, DrawerNavigator, NavigationActions } from "react-navigation";
import {Main} from "../container/";
import {Button , Icon} from "native-base";

const Drawer = DrawerNavigator({
    Home: {
        screen: Main
    }
}, { drawerWidth: 200})

const routerConfig = StackNavigator({
    Home: {
        screen: Drawer
    }
}
    , {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#4c524e"
            },
            headerLeft: <Button onPress={() => navigation.navigate('DrawerOpen')} transparent><Icon style={{ color: "white" }} name="menu" /></Button>,
            headerTitleStyle:{
        color: "white"
    }
    })
})

export default routerConfig;