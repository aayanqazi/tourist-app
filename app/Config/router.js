import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import App from "../index";

const Drawer = DrawerNavigator({
    Home: {
        screen: App
    }
}, { drawerWidth: 100 })

const routerConfig = StackNavigator({
    Home: {
        screen: Drawer
    }
}
,{
    navigationOptions:{
        headerStyle:{
            backgroundColor:"#4c524e"
        },
        headerTitleStyle:{
        color:"white"
        }
    }
})

export default routerConfig;