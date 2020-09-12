import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content" />
                <ScrollView>
                    <View style={{
                        flex:3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 80,
                    }}>
                        <Image
                            style={{width: '80%', height: 65}}
                            source={require('../../../assets/images/ZipZip.png')}
                        />
                    </View>
                    <View style={{marginTop: 115,flex:10}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            fontFamily: 'FuturaStd-Bold',
                            alignSelf: 'center',
                            marginBottom: 20,
                        }}>
                            Login With </Text>
                        <TouchableOpacity  activeOpacity={0.92} onPress={() => this.props.navigation.navigate('RegisterMobile')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Mobile Number
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('DashboardUser')}>
                            <View style={[styles.buttonStyle,{flexDirection:'row'}]}>
                                <Text style={styles.textButton}>
                                    Google Account </Text>

                                <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../../../assets/images/google.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        {/*<GoogleSigninButton*/}
                        {/*    style={{ width: 192, height: 48 }}*/}
                        {/*    size={GoogleSigninButton.Size.Wide}*/}
                        {/*    color={GoogleSigninButton.Color.Dark}*/}
                        {/*    onPress={this._signIn}*/}
                        {/*    disabled={this.state.isSigninInProgress} />*/}
                    </View>
                    <View
                        style={{flex:1,marginTop:200,  justifyContent: 'center',
                        alignItems: 'center',position:"relative"}}
                    >
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
