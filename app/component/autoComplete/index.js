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
            key: 'AIzaSyDzpEMajXZeyfzxOAoP1Ky_nHsGdYcMy5w',
            language: 'en', // language of the results
        }}
        debounce={0}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            changeLocation(details.geometry.location.lat,details.geometry.location.lng);
            console.log(data);
            console.log(details);
        }} />)
}

export default GoogleAutoPlaces;