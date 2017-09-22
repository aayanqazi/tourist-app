import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { AutoComplete, Map } from "./Component"
// const Permissions = require('react-native-permissions');
import { Container, Header, Left, Body, Right, Icon, Title,Button } from 'native-base';
export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        drawerLabel: 'Home',
        title:"Tourist Guide",
        headerLeft:<Button onPress={()=>console.log(this.props)}  transparent><Icon style={{color:"white"}} name="menu"/></Button>
        
    }
    state = {
        viewBolean: true,
        view: 'standard',
        currentLocation: {
            latitude: 37.78825,
            longitude: -122.4324
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            let { currentLocation } = this.state;
            currentLocation.latitude = position.coords.latitude;
            currentLocation.longitude = position.coords.longitude;

            this.setState(currentLocation)
        }, (error) => {
            alert("Please turn on location in your phone")
        })
    }

    changeLocation = (lat, lon) => {
        let obj = this.state.currentLocation;
        obj.latitude = lat;
        obj.longitude = lon;
        this.setState(obj);
    }

    changeState = () => {
        if (this.state.viewBolean) {
            this.setState({ view: 'satellite', viewBolean: !this.state.viewBolean })
        }
        else {
            this.setState({ view: 'standard', viewBolean: !this.state.viewBolean })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Header style={{backgroundColor:"#4c524e"}}>
                    <Left>
                        <Button onPress={()=>this.props.navigation.navigate('DrawerOpen')} transparent>
                        <Icon onPress={()=>this.props.navigation.navigate('DrawerOpen')} style={{color:"white"}} name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tourist Guide</Title>
                    </Body>
                </Header>*/}
                <Map view={this.state.view} location={this.state.currentLocation} />
                <View style={styles.autoComplete}>
                    <AutoComplete changeLocation={this.changeLocation} />
                </View>
                <View style={{ bottom: 0, position: 'absolute' }}>
                    <Button
                    backgroundColor="#4c524e"
                        onPress={() => this.changeState()}
                    ><Text style={{color:"white"}}>{this.state.viewBolean ? "Settelite View" : "Standard View"}</Text>
                    </Button>
                </View>
                {/*<View style={{ width: "100%", height: 35, backgroundColor: "#4c524e" }}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                    >
                        <Image
                            style={{ width: 20, height: 20, top: 8, left: 10 }}
                            source={{ uri: 'http://www.carvertise.com/img/mobile_menu.png' }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', bottom: 12, fontFamily: "sans-serif-medium", textAlign: 'center' }}>Tourist Guide</Text>
                </View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    autoComplete: {
        position: 'absolute',
        top: 30,
        left: 30,
        right: 30
    },
});
