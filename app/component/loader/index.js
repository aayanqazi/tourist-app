import React from 'react';
import {View , ActivityIndicator} from "react-native";
import Styling from "./style";

const loader = () => {
    return (
        <View style={Styling}>
            <ActivityIndicator animating={true} size={"large"} />
        </View >
    )
}

export default loader;