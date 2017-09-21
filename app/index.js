import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PermissionsAndroid,
    Button
} from 'react-native';
import { AutoComplete, Map } from "./Component"
export default class App extends PureComponent {
    state = {
        viewBolean: true,
        view: 'standard',
        currentLocation: {
            latitude: 37.78825,
            longitude: -122.4324
        }
    }
    componentDidMount() {
        // navigator.geolocation.getCurrentPosition((position) => {
        //     alert(position)
        // })
        // this.requestCameraPermission();
    }
    changeLocation = (lat, lon) => {
        let obj = this.state.currentLocation;
        obj.latitude = lat;
        obj.longitude = lon;
        this.setState(obj);
    }
    // async requestCameraPermission() {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //                 'title': 'Cool Photo App Camera Permission',
    //                 'message': 'Cool Photo App needs access to your camera ' +
    //                 'so you can take awesome pictures.'
    //             }
    //         )
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             console.log("You can use the camera")
    //         } else {
    //             console.log("Camera permission denied")
    //         }
    //     } catch (err) {
    //         console.warn(err)
    //     }
    // }
    changeState = () => {
        // this.setState(prev => ({viewBolean: !prev.viewBolean}))
        if (this.state.viewBolean) {
            this.setState({ view: 'satellite', viewBolean: !this.state.viewBolean })
        }
        else {
            this.setState({ view: 'standard', viewBolean: !this.state.viewBolean })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Map view={this.state.view} location={this.state.currentLocation} />
                <View style={styles.autoComplete}>
                    <AutoComplete changeLocation={this.changeLocation} />
                </View>
                <View style={{ bottom: 0, position: 'absolute' }}>
                    <Button
                        onPress={() => this.changeState()}
                        title={this.state.viewBolean ? "Settelite View" : "Standard View"}
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
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
});
