import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHdd, faMemory} from '@fortawesome/free-solid-svg-icons';
import {faSdCard} from '@fortawesome/free-solid-svg-icons/faSdCard';

export default class PicZip extends Component {
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
                    <View style={{backgroundColor:'#fff',height:130,width:130,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:70}}>
                        <Image
                            style={{width: 150, height: 150}}
                            source={require('../../../assets/images/PicZip.png')}
                        />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 14,
                        marginTop:20,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}>
                        INTELLIGENT <Text style={{fontFamily: 'FuturaStd-Bold',fontSize: 26,}}>PHOTO</Text> COMPRESSION</Text>
                    <View style={{borderRadius:2,borderWidth:7,borderColor:'#000',width:'50%',height:70,justifyContent:'center',alignSelf:'center'}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 50,
                            marginTop:20,
                            fontFamily: 'HelveticaNeueLTStd-Md',
                            alignSelf: 'center',
                            marginBottom: 20,
                        }}>
                            100 MB</Text>
                    </View>

                    {/*<View style={{borderLeftWidth:3,borderRightWidth:3,borderColor:'#000',width:'20%',height:90,justifyContent:'center',alignSelf:'center'}}>*/}

                    {/*</View>*/}
                    <View style={{marginTop:-15,alignSelf:"center"}}>
                        <Icon
                            name='bookmark-o'
                            color='#000'
                            size={130} />
                            <View style={{width:90}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 25,
                            fontFamily: 'HelveticaNeueLTStd-Md',
                            alignSelf: 'center',
                            textAlign:"center",
                            marginTop:-110
                        }}>
                            FREE TEST</Text>
                            </View>
                    </View>
                    {/*<View style={{backgroundColor:'#fff',height:130,width:130,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:30}}>*/}
                    {/*    <Image*/}
                    {/*        style={{width: 150, height: 150}}*/}
                    {/*        source={require('../../../assets/images/100mfree.png')}*/}
                    {/*    />*/}
                    {/*</View>*/}
                    <View style={{marginTop: 50,flex:10}}>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SelectPic')}>
                            <View style={styles.buttonStyle}>
                                <Image
                                    style={{width: 210, height: 40}}
                                    source={require('../../../assets/images/ZipZipWhite.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('Help')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Read me </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        height: 70,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    textButton: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
