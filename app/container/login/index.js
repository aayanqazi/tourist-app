import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import AuthActions from "../../store/actions/authActions";
import {Login} from "../../component/";

class Logins extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Login data={this.props.userData} login={this.props.loginAction} navigation={this.props.navigation} />
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.AuthReducer
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        loginAction: (user) => Dispatch(AuthActions.signin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logins);