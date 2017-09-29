import React from 'react';
import Styling from "./style";
import MapView from 'react-native-maps';
import { View, Text ,Alert} from "react-native";

const GoogleMap = ({ view, location, places , distance}) => {
    return (<MapView
        style={Styling.map}
        showTraffic={true}
        mapType={view}
        region={{
            latitude: parseFloat(location.latitude),
            longitude: parseFloat(location.longitude),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
    >
        <MapView.Marker
            coordinate={{
                latitude: parseFloat(location.latitude),
                longitude: parseFloat(location.longitude)
            }
            }
        />
        {places.places ?
            places.places.map((place, index) => {
                return <MapView.Marker
                    key={index}
                    onCalloutPress={() => Alert.alert(
                        'Do You Want To GO There ?',
                        `Name: ${place.name}

Location: ${place.vicinity}`,
                        [
                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            { text: 'Yes', onPress: () => distance({curLattitude:location.latitude,curLongitude:location.longitude,latitude:place.geometry.location.lat,longitude:place.geometry.location.lng}) },
                        ],
                        { cancelable: false }
                    )
                    }
                    title={place.name}
                    pinColor={"green"}
                    coordinate={{
                        latitude: parseFloat(place.geometry.location.lat),
                        longitude: parseFloat(place.geometry.location.lng)
                    }}
                />
            }) : null}
    </MapView>
    )
}

export default (GoogleMap);