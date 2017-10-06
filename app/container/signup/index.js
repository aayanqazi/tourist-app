import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import AuthActions from "../../store/actions/authActions";
import { Signup } from "../../component/";

class Signups extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(newProps){
        if(newProps.userData.isRegistered){
            this.props.navigation.navigate('Login');
        }
        else if(newProps.userData.isError)
        {
            alert(newProps.userData.errorMessage);
        }
    }
    render() {
        return <Signup data={this.props.userData} signUp={this.props.singupAction} navigation={this.props.navigation} />
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