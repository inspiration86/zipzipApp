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
                    <View style={{backgroundColor:'#fff',height:90,width:90,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:70,borderRadius:70,borderWidth:10,borderColor:"#000"}}>

                    <Icon name='check' style={{justifyContent:"center",alignItems:"center",fontSize: 55, color: '#000',padding:5,alignSelf:"center" }} />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 20,
                        marginTop:20,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}>
                       SELECTED PHOTOS GOT ZIPZIPED.</Text>
                    <Text style={{
                        color: '#666',
                        fontSize: 20,
                        marginTop:30,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}>
                       Find your photos in:</Text>
                    <Text style={{
                        color: '#000',
                        fontSize: 20,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}>
                     Photos/MyAlbums/zipzip-Piczip</Text>
                    <View style={{flex:4,justifyContent:"center",alignItems:"center"}}>
                        <View style={{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60}}>
                            <View style={{flex:1,paddingHorizontal:2}}><Text style={{fontSize: 14,fontFamily: 'FuturaStd-Bold',}}>TOTAL PHOTOS</Text></View>
                            <View style={{flex:1,backgroundColor:"#000",paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"}}><Text style={{color:"#fff",fontSize: 20,fontFamily: 'FuturaStd-Bold',}}>47.3 GB</Text></View>
                        </View>
                        <View style={{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60}}>
                            <View style={{flex:1,paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"}}><Text style={{fontSize: 14,fontFamily: 'FuturaStd-Bold',}}>ZIPZIPED PHOTOS</Text></View>
                            <View style={{flex:1,backgroundColor:"#000",paddingHorizontal:2}}><Text style={{color:"#fff",fontSize: 20,fontFamily: 'FuturaStd-Bold',}}>25 GB</Text></View>
                        </View>
                    </View>
                    <View style={{marginTop: 90,flex:10}}>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('DashboardUser')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Back to Home </Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('BuyPicZip')}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.textButton}>
                                BUY </Text>
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
