import {Dimensions} from 'react-native';

export const Style = {
    imageThumbnail: {
        height: 250
    },
    imageHeightsmall:{
        height:150
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    formIcon:{
         fontSize: 22, 
         paddingTop: 20, 
         color: 'white' 
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:40
    },
    backImage: {
        flex: 1, resizeMode: 'stretch', width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    signupContainer: {
        width: "80%",
    },
    signupButton: {
        width: "95%",
        marginLeft: 15,
        marginTop: 20,
    },
    notlogged: {
        color: "white",
        marginTop: 23,
        fontSize:13
    }

}