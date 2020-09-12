import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

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
                           Mobile Number </Text>
                        <View style={{backgroundColor:'#fff',height:55,width:'80%',alignSelf:'center',marginTop:10,borderWidth:3,borderColor:"#000"}}>
                                                        <TextInput
                                                            style={{alignItems:'flex-start',justifyContent:'flex-end',marginRight:18,fontFamily: 'FuturaStd-Bold'}}
                                                            placeholder="Please Enter Mobile Number"
                                                            underlineColorAndroid="transparent"
                                                            keyboardType="numeric"
                                                            maxLength={11}
                                                        />
                                                    </View>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SendSms')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Register </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,marginTop:210,  justifyContent: 'center',
                        alignItems: 'center',}}>
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} style={{marginRight:15}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
