import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';

export default class DocZip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
        };
    }
    change(){
        this.setState({pressed:true})
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

                <View style={{flex:12}}>

                    <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                        <Icon
                            name='shopping-bag'
                            color='#000'
                            size={60}/>
                    </View>
                    {/*<View style={{alignItems:'center',justifyContent:'center',marginTop:-20}}>*/}
                    {/*    <Image*/}
                    {/*        style={{width: 160, height: 60}}*/}
                    {/*        source={require('../../../assets/images/store.png')}*/}
                    {/*    />*/}
                    {/*</View>*/}
                    <Text style={{
                        color: '#000',
                        fontSize: 25,
                        marginTop:10,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}>
                       Store</Text>
                    {/*<Image*/}

                    {/*    style={{width: 150, height: 150,tintColor:"#777"}}*/}
                    {/*    source={require('../../../assets/images/200mfree.png')}*/}
                    {/*/>*/}

                    <View style={{flexDirection:"row",flex:1,justifyContent:'center',alignSelf:'center',marginTop:5,marginHorizontal:20,resizeMode:"contain",}}>
                    <View style={{flex:5,borderWidth:this.state.btnpressed ?0 :3,borderColor:"#000",marginHorizontal:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 25,
                            fontFamily: 'FuturaStd-Bold',
                            textAlign:'center',
                           // resizeMode:"contain"
                        }}>
                            Buy PicZip</Text>
                        <Text style={{
                            color: '#000',
                            fontSize: 17,
                           // fontFamily:'HelveticaNeueLTStd-Md',
                            fontFamily: 'FuturaStd-Bold',
                            textAlign:'center'
                        }}>
                            Classic/Premium Account</Text>
                            {/*<Icon*/}
                            {/*    name='shopping-bag'*/}
                            {/*    color='#000'*/}
                            {/*    size={60}/>*/}
                    </View>
                        <View style={{flex:5,justifyContent:"center",borderWidth:3,borderColor:"#000",marginHorizontal:10}}>
                            <Text style={{
                                color: '#000',
                                fontSize: 25,
                                fontFamily: 'FuturaStd-Bold',
                                marginBottom: 20,
                                textAlign:'center'
                            }}>
                                NEW Aailable Extentions</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",flex:1,justifyContent:'center',alignSelf:'center',marginTop:20,marginHorizontal:20}}>
                        <View style={{flex:5,borderWidth:3,borderColor:"#000",marginHorizontal:10,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{
                                color: '#000',
                                fontSize: 25,
                                fontFamily: 'FuturaStd-Bold',
                                alignSelf: 'center',
                            }}>
                                Promotions</Text>
                        </View>
                        <View style={{flex:5,borderWidth:3,borderColor:"#000",justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
                            <Text style={{
                                color: '#000',
                                fontSize: 40,
                                fontFamily: 'FuturaStd-Bold',
                                alignSelf: 'center',
                            }}>
                               %OFF</Text>
                        </View>
                    </View>
                    </View>

                    <View style={{flex:9,backgroundColor:"#000",marginTop:15,justifyContent:'center'}}>
                        <View style={{alignItems:'center',justifyContent:'center',marginTop:7}}>
                            <Icon
                                name='chevron-down'
                                color='#fff'
                                size={25}/>
                        </View>
                        <View style={{flexDirection:"row",flex:1,justifyContent:'center',alignSelf:'center',marginTop:12}}>
                        <View style={{width:45,height:45,borderWidth:3,borderColor:"#fff",justifyContent:'center',marginHorizontal:5,alignItems:"center"}}><Text style={{color:"#fff"}}>Ae</Text></View>
                        <Text style={{color:"#fff",marginTop:15,marginLeft:5,fontSize:14,fontFamily:'HelveticaNeueLTStd-Md'}}>Adobe After Effect</Text>
                        <Text style={{color:"#fff",marginTop:10,marginLeft:10,fontSize:20,fontFamily:'HelveticaNeueLTStd-Md'}}>$ 5.99</Text>
                        <View style={{marginLeft:15,width:130,height:45,marginTop:10,backgroundColor:"#fff",justifyContent:'center',alignItems:"center"}}>
                            <Text style={{fontFamily:'FuturaStd-Bold',fontSize:16}}>BUY</Text></View>
                        </View>
                        <Divider style={styles.divider} />
                        <View style={{flexDirection:"row",flex:1,justifyContent:'center',alignSelf:'center',marginTop:20}}>
                            <View style={{width:45,height:45,borderWidth:3,borderColor:"#fff",justifyContent:'center',marginHorizontal:5,alignItems:"center"}}><Text style={{color:"#fff"}}>Ps</Text></View>
                            <Text style={{color:"#fff",marginTop:15,marginLeft:5,fontSize:14,fontFamily:'HelveticaNeueLTStd-Md'}}>Adobe Photoshop</Text>
                            <Text style={{color:"#fff",marginTop:10,marginLeft:10,fontSize:20,fontFamily:'HelveticaNeueLTStd-Md'}}>$ 8.99</Text>
                            <View style={{marginLeft:15,width:130,height:45,marginTop:10,backgroundColor:"#fff",justifyContent:'center',alignItems:"center"}}>
                                <Text style={{fontFamily:'FuturaStd-Bold',fontSize:16}}>BUY</Text></View>
                        </View>
                        <Divider style={styles.divider} />
                        <View style={{flexDirection:"row",flex:1,justifyContent:'center',alignSelf:'center',marginTop:20}}>
                            <View style={{width:45,height:45,borderWidth:3,borderColor:"#fff",justifyContent:'center',marginHorizontal:5,alignItems:"center"}}><Text style={{color:"#fff"}}>Ae</Text></View>
                            <Text style={{color:"#fff",marginTop:15,marginLeft:5,fontSize:14,fontFamily:'HelveticaNeueLTStd-Md'}}>Adobe After Effect</Text>
                            <Text style={{color:"#fff",marginTop:10,marginLeft:10,fontSize:20,fontFamily:'HelveticaNeueLTStd-Md'}}>$ 7.99</Text>
                            <View style={{marginLeft:15,width:130,height:45,marginTop:10,backgroundColor:"#fff",justifyContent:'center',alignItems:"center"}}>
                                <Text style={{fontFamily:'FuturaStd-Bold',fontSize:16}}>BUY</Text></View>
                        </View>
                        </View>

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
    divider:{height:2,marginTop:-15,width:'100%',marginHorizontal: 10,backgroundColor:"#fff"},

});
