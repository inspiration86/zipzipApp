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
                        fontSize: 35,
                        marginTop:10,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}>
                        Done!</Text>

                    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:10}}>
                        <Image
                            style={{width: 130, height: 130}}
                            source={require('../../../assets/images/PicZip.png')}
                        />
                        <Text style={{
                            color: '#000',
                            fontSize: 25,
                            marginTop:10,
                            fontFamily: 'FuturaStd-Bold',
                            alignSelf: 'center',
                            marginBottom: 20,
                        }}>
                            Premium Account Actived!</Text>
                        <Image
                            style={{width: 50, height: 70,marginTop:-10}}
                            source={require('../../../assets/images/tagpremium.png')}
                        />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 18,
                        marginTop:30,
                        fontFamily: 'HelveticaNeueLTStd-Md',
                        alignSelf: 'center',
                        marginBottom: 10,
                    }}>
                        Wish you the BRIGHT & BRIEF photos!</Text>
                    <View style={{marginTop: 10,flex:10}}>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Start ZipZip </Text>
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
        fontSize: 25,
        fontFamily: 'HelveticaNeueLTStd-Md',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
