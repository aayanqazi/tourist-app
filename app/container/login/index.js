import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PlacesActions from "../../store/actions/places";
import {Login} from "../../component/";

class Logins extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return <Login  />
    }
}

const mapStateToProps = (state) => {
    return {
        places: state.PlacesReducer
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        placesAPi: (location) => Dispatch(PlacesActions.parks(location)),
        shortestDistance: (location)=>Dispatch(PlacesActions.distance(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logins);