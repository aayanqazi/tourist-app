import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PlacesActions from "../../store/actions/places";
import App from "../../component/main/";
const polyline = require("@mapbox/polyline");
import { Button, Icon ,Text} from "native-base";
import { NavigationActions } from "react-navigation";
import {firebase} from "../../config/firebase";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            polyline: ""
        }
        }
    componentWillReceiveProps(newProps) {
        var polylineCordinate = ''
        if (newProps.places.road) {
            newProps.places.road.routes.length > 0 ? polylineCordinate = polyline.decode(newProps.places.road.routes[0].overview_polyline.points) : null;
        }
        this.setState({
            polyline: polylineCordinate
        })
    }

    static navigationOptions = ({ navigation }) => ({
        drawerLabel: 'Home',
        title: "Tourist Guide",
        headerLeft: <Button onPress={() => navigation.navigate('DrawerOpen')} transparent><Icon style={{ color: "white" }} name="menu" /></Button>,
        headerRight: <Button onPress={()=>firebase.auth().signOut().then((arr)=>navigation.navigate('Login'))} transparent><Text style={{color:'white'}}>Log Out</Text></Button>,
        
        headerStyle: {
            backgroundColor: "#4c524e"
        },
        headerTitleStyle: {
            color: "white"
        }
    })
    // headerLeft:<Button onPress={()=>console.log(this.props)}  transparent><Icon style={{color:"white"}} name="menu"/></Button>


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
        shortestDistance: (location) => Dispatch(PlacesActions.distance(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);