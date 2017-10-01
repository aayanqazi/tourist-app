import {Dimensions} from 'react-native';

export const Style = {
    imageThumbnail: {
        width: 200,
        height: 200
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImage: {
        flex: 1, resizeMode: 'stretch', width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    loginContainer: {
        width: "90%",
    },
    loginButton: {
        width: "95%",
        marginLeft: 15,
        marginTop: 20,
    },
    notlogged: {
        color: "white",
        fontWeight: "bold",
        marginTop: 13,
    }

}