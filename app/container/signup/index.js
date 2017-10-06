import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import AuthActions from "../../store/actions/authActions";
import { Signup } from "../../component/";

class Signups extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentWillReceiveProps(newProps){
    //     if(newProps.userData.authUser){
    //         this.props.navigation.navigate('Login');
    //     }
    // }
    render() {
        return <Signup signUp={this.props.singupAction} navigation={this.props.navigation} />
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.AuthReducer
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        singupAction: (user) => Dispatch(AuthActions.signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signups);