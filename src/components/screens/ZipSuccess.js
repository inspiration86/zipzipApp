import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
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
                    <View style={styles.circle}>
                        <Icon name='check' style={styles.icon} />
                    </View>
                    <Text style={styles.text}>SELECTED PHOTOS GOT ZIPZIPED.</Text>
                    <Text style={styles.text}>Find your photos in:</Text>
                    <Text style={styles.text}>Photos/MyAlbums/zipzip-Piczip</Text>
                    <View style={{marginTop:45,justifyContent:"center",alignItems:"center"}}>
                        <View style={styles.result}>
                            <View style={styles.photo}><Text style={[styles.textTable,{color:'#000',fontSize:13}]}>TOTAL PHOTOS</Text></View>
                            <View style={styles.volume}><Text style={styles.textTable}>47.3 GB</Text></View>
                        </View>
                        <View style={styles.result}>
                            <View style={styles.photo}><Text style={[styles.textTable,{color:'#000',fontSize:13}]}>ZIPZIPED PHOTOS</Text></View>
                            <View style={styles.volume}><Text style={styles.textTable}>25 GB</Text></View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('DashboardUser')}>
                                <Text style={styles.textButton}>
                                    Back to Home </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('BuyPicZip')}>
                            <Text style={styles.textButton}>
                                BUY</Text>
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
        backgroundColor: '#fff'
    },
    circle:{backgroundColor:'#fff',height:80,width:80,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:70,borderRadius:70,borderWidth:10,borderColor:"#000"},
    icon:{justifyContent:"center",alignItems:"center",fontSize: 40, color: '#000',padding:5,alignSelf:"center" },
    text:{
        color: '#000',
        fontSize: width>400?18:16,
        marginTop:20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    textTable:{color:"#fff",fontSize: 18,fontFamily: 'FuturaStd-Bold',textAlign:"center",padding:5},
    result:{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60},
    photo:{flex:1,paddingHorizontal:2},
    volume:{flex:1,backgroundColor:"#000",paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"},
    buttonContainer:{
        flex:5,
        marginTop: 60,
        width:'90%',
        alignSelf:'center'
    },
    buttonStyle: {
        backgroundColor: '#000',
        height: 60,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius:5
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
