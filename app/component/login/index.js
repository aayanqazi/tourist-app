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
import { Loader } from "../";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { firebase } from '../../config/firebase';
import { Container, Form, Thumbnail, Item, Input, Label, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.imageHeight = new Animated.Value(250);
        this.keyboardHeight = new Animated.Value(0)
        this.state = {
            email: "",
            password: ""
        }
    }
    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
        // AsyncStorage.getItem('token', (err, result) => {
        //     if (result) {
        //         this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))
        //     }
        // })
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Welcome');
            }
        })
    }

    _keyboardDidShow(event) {
        // Animated.timing(this.state.imageHeight,{
        //     toValue:event.endCoordinates.height,
        //     duration:10000
        // }).start();
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: 1,
                toValue: event.endCoordinates.height,
            }),
            Animated.timing(this.imageHeight, {
                duration: 100,
                toValue: Style.imageHeightsmall.height,
            }),
        ]).start();
    }
    _keyboardDidHide(event) {
        console.log(event)
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: 1,
                toValue: 0,
            }),
            Animated.timing(this.imageHeight, {
                duration: 100,
                toValue: Style.imageThumbnail.height,
            }),
        ]).start();
    };
    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
    componentWillReceiveProps(newProps) {
        if (this.props.data.isAuthenticated) {
            this.props.navigation.navigate('Welcome')
        }
        // if (newProps.user.isAuthenticated) {
        //     this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))
        //     AsyncStorage.setItem('token', "1234Admin78910");
        // }
        // else if(newProps.user.isError){
        //     alert("Invalid username and password");
        // }
    }
    login = () => {
        this.props.login({ email: this.state.email, password: this.state.password });
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
                    {this.props.data.isProcessing ? <Loader /> : null}
                    <Animated.View style={{ paddingBottom: this.keyboardHeight }}>
                        <View style={Style.imageContainer}>
                            <Animated.Image style={{ height: this.imageHeight, width: this.imageHeight }} source={require('../../assets/logo.png')} />
                        </View>
                        <View style={Style.imageStyle}>
                            <Form style={Style.loginContainer}>
                                <Item>
                                    <Input placeholderTextColor="white" keyboardType="email-address" placeholder='Email' onChangeText={(value) => this.setState({ email: value })} />
                                    <EvilIcons name='user' style={Style.formIcon} />
                                </Item>
                                <Item>
                                    <Input placeholderTextColor="white" placeholder='Password' onChangeText={(value) => this.setState({ password: value })} secureTextEntry />
                                    <EvilIcons name='lock' style={Style.formIcon} />
                                </Item>
                                <Button style={Style.loginButton} onPress={() => this.login()} full info>
                                    <Text>Login</Text>
                                </Button>
                            </Form>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                                <Text style={Style.notlogged}> CREATE NEW ACCOUNT</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>

                </Image>
            </Container>

        );
    }
}
