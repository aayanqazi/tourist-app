import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button } from "native-base";
import { Styling } from "./style";

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Image style={Styling.image} source={{ uri: "https://images.freecreatives.com/wp-content/uploads/2016/02/Blue-Gradient-Background-For-Free-Download.jpg" }}></Image>
                <View style={Styling.container}>
                    <Text style={Styling.textStyle}>Welcome</Text>
                    <Text style={{ color: 'white' }}>Thank you for registration</Text>
                    <Button onPress={()=>this.props.navigation.navigate('Login')} style={Styling.button} block light>
                        <Text style={Styling.buttonText}>Continue</Text>
                    </Button>

                </View>
            </View>
        );
    }
}
