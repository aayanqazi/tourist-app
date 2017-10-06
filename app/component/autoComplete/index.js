import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Styling from "./style";

const GoogleAutoPlaces = ({changeLocation}) => {
    return (<GooglePlacesAutocomplete
        placeholder='Search any places you want?'
        minLength={2}
        styles={Styling}
        autoFocus={false}
        returnKeyType={'search'}
        listViewDisplayed='auto'
        fetchDetails={true}
        query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyDUeNmeQRxC8La9qE0zgo-bkhj1U-n1m0I',
            language: 'en', // language of the results
        }}
        debounce={0}
        onPress={(data, details) => {changeLocation(details.geometry.location.lat,details.geometry.location.lng)}} />)
}

export default GoogleAutoPlaces;