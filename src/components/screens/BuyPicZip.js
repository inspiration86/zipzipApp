import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
export default class DocZip extends Component {
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
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                            <Text style={{color:"#000",   fontSize: 25,
                                fontFamily: 'FuturaStd-Bold',}}>
                                Classic account </Text>
                        </View>
                        <View style={{backgroundColor:'#fff',height:130,width:130,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:30}}>
                            <Image
                                style={{width: 150, height: 180}}
                                source={require('../../../assets/images/classic.png')}
                            />
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
                            <Text style={{color:"#000",   fontSize: 25,
                                fontFamily: 'FuturaStd-Bold',}}>
                                $ 5.99</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SelectPayWay')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    BUY </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                            <Text style={{color:"#000",   fontSize: 25,
                                fontFamily: 'FuturaStd-Bold',}}>
                                Premium account </Text>
                        </View>
                        <View style={{backgroundColor:'#fff',height:130,width:130,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:30}}>
                            <Image
                                style={{width: 150, height: 190}}
                                source={require('../../../assets/images/premium.png')}
                            />
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
                            <Text style={{color:"#000",   fontSize: 25,
                                fontFamily: 'FuturaStd-Bold',}}>
                                $ 9.99</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SelectPayWay')}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.textButton}>
                                BUY </Text>
                        </View>
                        </TouchableOpacity>
                    </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
