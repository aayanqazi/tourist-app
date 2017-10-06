import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { NavigationActions } from "react-navigation";
import { AutoComplete, Map, Loader } from "../"
// const Permissions = require('react-native-permissions');
import { Container, Header, Left, Body, Right, Icon, Title, Button, Footer, FooterTab } from 'native-base';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {
        viewBolean: true,
        view: 'standard',
        tooltipOpen: false,
        tooltipData: "",
        currentLocation: {
            latitude: 37.78825,
            longitude: -122.4324
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            let { currentLocation } = this.state;
            currentLocation.latitude = position.coords.latitude;
            currentLocation.longitude = position.coords.longitude;

            this.setState(currentLocation)
        }, (error) => {
            alert("Please turn on location in your phone")
        })
    }
    toolTip = (event, data) => {
        let obj = {
            distance: data.distance.text,
            duration: data.duration.text
        }
        this.setState({
            tooltipOpen: !this.state.tooltipOpen,
            tooltipData: obj
        })
    }
    fetchParks = (value) => {
        var obj = this.state.currentLocation;
        obj.type = value
        this.setState({
            tooltipOpen: false
        })

        this.props.placesApi(obj)
    }

    changeLocation = (lat, lon) => {
        let obj = this.state.currentLocation;
        obj.latitude = lat;
        obj.longitude = lon;
        this.setState(obj);
    }

    changeState = () => {
        if (this.state.viewBolean) {
            this.setState({ view: 'satellite', viewBolean: !this.state.viewBolean })
        }
        else {
            this.setState({ view: 'standard', viewBolean: !this.state.viewBolean })
        }
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Map view={this.state.view} location={this.state.currentLocation} toolTip={this.toolTip} polyline={this.props.polyline} places={this.props.places} distance={this.props.distance} />
                <View style={styles.autoComplete}>
                    <AutoComplete changeLocation={(lat,lon)=>this.changeLocation(lat,lon)} />
                </View>
                {
                    this.props.places.isProcessing ? <Loader /> : null
                }
                {this.state.tooltipOpen ?
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>Distance : {this.state.tooltipData.distance}, Duration: {this.state.tooltipData.duration}</Text>
                    </View>
                    : null}
                <Footer style={{ bottom: 0, position: 'absolute' }}>
                    <FooterTab>
                        <Button style={{ backgroundColor: "#4c524e" }} onPress={() => this.fetchParks('park')}>
                            <Text style={{ color: "white" }}>Parks</Text>
                        </Button>
                        <Button style={{ backgroundColor: "#4c524e" }} onPress={() => this.fetchParks('hospital')}>
                            <Text style={{ color: "white" }}>Hospitals</Text>
                        </Button>
                        <Button style={{ backgroundColor: "#4c524e" }}>
                            <Text style={{ color: "white" }} onPress={() => this.fetchParks('restaurant')}>Restaurant</Text>
                        </Button>
                        <Button
                            style={{ backgroundColor: "#4c524e" }}
                            onPress={() => this.changeState()}
                        ><Text style={{ color: "white" }}>{this.state.viewBolean ? "Settelite" : "Standard"}</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    autoComplete: {
        position: 'absolute',
        top: 30,
        left: 30,
        right: 30
    },
    description: {
        position: 'absolute',
        width: '80%',
        borderRadius: 50,
        bottom: 80,
        left: 35,
        backgroundColor: '#F5FCFF88',
        height: 30,
        justifyContent: 'center'
    },
    descriptionText: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
