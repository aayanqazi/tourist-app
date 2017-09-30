import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PlacesActions from "../../store/actions/places";
import App from "../../component/main/";
const polyline = require("@mapbox/polyline");

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            polyline: ""
        }
    }
    componentWillReceiveProps(newProps){
        if(newProps.places.road)
        {
            let polylineCordinate = polyline.decode(newProps.places.road.routes[0].overview_polyline.points)
            this.setState({
                polyline: polylineCordinate
            })
        }
    }
    static navigationOptions = {
        drawerLabel: 'Home',
        title: "Tourist Guide",
        // headerLeft:<Button onPress={()=>console.log(this.props)}  transparent><Icon style={{color:"white"}} name="menu"/></Button>

    }

    render() {
        return <App places={this.props.places} placesApi={this.props.placesAPi} polyline={this.state.polyline} distance={this.props.shortestDistance} />
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