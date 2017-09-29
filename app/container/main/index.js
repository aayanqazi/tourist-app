import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PlacesActions from "../../store/actions/places";
import App from "../../component/main/";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(newProps){
        console.log(newProps)
    }
    static navigationOptions = {
        drawerLabel: 'Home',
        title: "Tourist Guide",
        // headerLeft:<Button onPress={()=>console.log(this.props)}  transparent><Icon style={{color:"white"}} name="menu"/></Button>

    }

    render() {
        return <App places={this.props.places} placesApi={this.props.placesAPi} distance={this.props.shortestDistance} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);