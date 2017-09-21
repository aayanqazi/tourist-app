import {Dimensions} from "react-native"
var {height, width} = Dimensions.get('window');

const Styling = {
    textInputContainer: {
        backgroundColor: 'rgba(255,255,255,1)',
        borderTopWidth: 0,
        width:'98%',
        borderRadius:50
    },
    textInput: {
        marginLeft: 0,
        marginRight: 0,
        height: 38,
        paddingBottom:10,
        color: '#5d5d5d',
        fontSize: 16,
        borderRadius:50

    },
    predefinedPlacesDescription: {
        color: '#1faadb'
    },
    listView: {
        backgroundColor: '#fff',
        flexWrap: 'wrap'
    }
}

export default Styling;