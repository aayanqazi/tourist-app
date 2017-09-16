import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Geolocation
} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {

    componentDidMount(){
        this.watchPosition();
    }
    watchPosition=async ()=>{
        await Geolocation.getCurrentPosition((suc,err)=>{
            alert(suc);
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: StyleSheet.absoluteFill,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
