import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Image,
    AsyncStorage,
    Animated,
    Keyboard,
    TouchableOpacity
} from 'react-native';
import { Style } from "./style";
import {Loader } from "../"

import { NavigationActions } from "react-navigation";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Container, Form, Thumbnail, Item, Input, Label, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    // componentWillMount() {
    //     this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    //     this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    //     // AsyncStorage.getItem('token', (err, result) => {
    //     //     if (result) {
    //     //         this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))
    //     //     }
    //     // })
    // }

    componentWillReceiveProps(newProps) {
        // if (newProps.user.isAuthenticated) {
        //     this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))
        //     AsyncStorage.setItem('token', "1234Admin78910");
        // }
        // else if(newProps.user.isError){
        //     alert("Invalid username and password");
        // }
    }
    signup = () => {
        this.props.signUp({ email: this.state.email, password: this.state.password });
        // AsyncStorage.getItem('user', (err, res) => {
        //     let user = JSON.parse(res);
        //     if (this.state.email == user.email && this.state.password == user.password) {
        //         alert("Congratulations!!");
        //         AsyncStorage.setItem('token', "1234Admin78910");
        //         this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))

        //     }
        //     else {
        //         alert("Failed Please try gain")
        //     }
        // })
    }
    // <Image style={Style.backImage} source={require("../../assets/back.png")}>
    // <Thumbnail
    //     style={Style.imageThumbnail}
    //     source={require("../../assets/doctor.png")}
    // />

    render() {
        return (
            <Container>
                <Image blurRadius={1} style={Style.backImage} source={{ uri: "https://i.pinimg.com/736x/a6/bc/ee/a6bcee2cfe21c473f6bc894b3ee5eebe--monuments-pakistan.jpg" }}>
                {this.props.data.isProcessing?<Loader />:null}
                    <Animated.View>
                        <View style={Style.imageStyle}>
                            <View style={{paddingTop:'40%',paddingBottom:12}}>
                                <Text style={{ color: 'white' ,fontSize:40,fontWeight:'bold'}}>SIGNUP</Text>
                            </View>

                            <Form style={Style.signupContainer}>
                                <Item>
                                    <Input placeholderTextColor="white" keyboardType="email-address" placeholder='Email' onChangeText={(value) => this.setState({ email: value })} />
                                    <EvilIcons name='user' style={Style.formIcon} />
                                </Item>
                                <Item>
                                    <Input placeholderTextColor="white" placeholder='Password' onChangeText={(value) => this.setState({ password: value })} secureTextEntry />
                                    <EvilIcons name='lock' style={Style.formIcon} />
                                </Item>
                                <Button style={Style.signupButton} onPress={() => this.signup()} full info>
                                    <Text>signup</Text>
                                </Button>
                            </Form>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={Style.notlogged}> Already have account ? </Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>

                </Image>
            </Container>
        );
    }
}
