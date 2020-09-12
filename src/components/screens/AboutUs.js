import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, TextInput, Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

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
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <View style={{flexDirection:'row',marginLeft:10}}>
                        <Icon
                            name='arrow-left'
                            color='#000'
                            size={25}  style={{marginLeft:10}}/>

                    </View>
                </View>
                <ScrollView>
                    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:60}}>
                        <Image
                            style={{width: 100, height: 100}}
                            source={require('../../../assets/images/lump.png')}
                        />
                    </View>
                    <Text style={styles.arka}>
                        ARKA</Text>
                    <Text style={[styles.arka,{fontSize:20}]}>
                        INVENT Co.</Text>

                    <Text style={styles.textAbout}>
                        Arka Knowledge-Based company is active in the field of production of artificial intelligence systems and information security and mobile apps and websites and is one of the leading companies in the field of smart technologies and production of special software in Iran and Middle East.
                     </Text>
                    <Text style={styles.textAbout}>
                        Most of the companys products have different Technology and science and Technology in Vice President for Science and Technology in
                    </Text>
                    <View style={{marginTop: 30,flex:10}}>
                        <TouchableOpacity activeOpacity={0.92} >
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                   ARKAINVENT.COM </Text>
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
    arka:{
        color: '#000',
        fontSize: 30,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        textAlign:"center",
        marginTop:5
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
    textAbout:{
        color: '#000',
        marginTop:15,
        fontSize: 18,
        fontFamily: 'HelveticaNeueLTStd-Md',
        textAlign:"center",
        marginHorizontal:10,
        padding:5
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
        letterSpacing: 5

    }
});
