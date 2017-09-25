import React from "react";
import { StackNavigator, DrawerNavigator, NavigationActions } from "react-navigation";
import App from "../Component/main/";
import {Button , Icon} from "native-base";

const Drawer = DrawerNavigator({
    Home: {
        screen: App
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