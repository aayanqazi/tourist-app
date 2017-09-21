import React from 'react';
import Styling from "./style";
import MapView from 'react-native-maps';

const GoogleMap = ({ view, location }) => {
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
            coordinate={{latitude: parseFloat(location.latitude),
            longitude: parseFloat(location.longitude)}
}
    />
    </MapView>
    )
}

export default GoogleMap;