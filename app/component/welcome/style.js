import {Dimensions} from 'react-native';

export const Styling = {
    container:{
        height:Dimensions.get('window').height,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#38cefe',
        fontSize:16,
        fontWeight:'bold'
    },
    button:{
        borderRadius:50,
        width:'60%',
        marginTop:20,
        alignSelf:'center'
    },
    image:{
        position:'absolute',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },
    textStyle:{
        color:'white',
        fontSize:57,
        fontWeight:'bold'
        }
}