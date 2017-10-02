import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PlacesActions from "../../store/actions/places";
import {Signup} from "../../component/";

class Signups extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return <Signup  navigation={this.props.navigation}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signups);