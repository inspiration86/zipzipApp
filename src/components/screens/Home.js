//'#43c164','#3ad463','#43c164'

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image, ScrollView, TouchableOpacity, StatusBar, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog } from 'react-native-simple-dialogs';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisibleMovzip:false,
            dialogVisibleDoczip:false,
        };
    }


    toggleDrawer = () => {
        this.props.navigation.openDrawer();
    };
    clickdialogVisibleMovzip = () => {
        this.setdialogVisibleMovzip(true);
    }
    setdialogVisibleMovzip(visible) {
        this.setState({dialogVisibleMovzip: visible});
    }
    clickdialogVisibleDoczip = () => {
        this.setdialogVisibleDoczip(true);
    }
    setdialogVisibleDoczip(visible) {
        this.setState({dialogVisibleDoczip: visible});
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#0078db'}
                           barStyle="light-content" />
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                    <View style={{flexDirection:'row',marginLeft:10}}>
                        <Icon
                            name='search'
                            color='#000'
                            size={25}  style={{marginLeft:10}}/>
                    </View>
                    <View style={{marginRight:15}}>
                        <Icon onPress={this.props.navigation.openDrawer}
                            name='bars'
                            color='#000'
                            size={28} />
                    </View>
                </View>
                <ScrollView>
                <TouchableOpacity  style={styles.pic} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('PicZip')}>
                    <Image
                        style={{width:150, height: 150}}
                        source={require('../../../assets/images/PicZip.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.pic} activeOpacity={0.92} onPress={() => this.clickdialogVisibleMovzip()}>
                    <Image
                        style={{width: 150, height: 150}}
                        source={require('../../../assets/images/MovZip.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.pic} activeOpacity={0.92} onPress={() => this.clickdialogVisibleDoczip()}>
                    <Image
                        style={{width: 150, height: 150}}
                        source={require('../../../assets/images/DocZip.png')}
                    />
                </TouchableOpacity>
                </ScrollView>
                <Dialog
                    visible={this.state.dialogVisibleMovzip}
                    dialogStyle={{backgroundColor:'#fff',width:350,height:270,justifyContent:"center",alignItems:"center",
                        borderRightWidth:6,borderBottomWidth:4,borderLeftWidth:2,borderTopWidth:2,borderColor:"#000",
                        // shadowColor: '#000',
                        // shadowOffset: {
                        //     width: 0,
                        //     height: 6,
                        // },
                        // shadowOpacity: 0.37,
                        // shadowRadius: 7.49,
                        // elevation: 12,
                    }}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisibleMovzip: false})} >
                    <View style={{marginTop:-20,alignSelf:"center"}}>
                        <Image
                            style={{width: 80, height: 80,marginBottom:5}}
                            source={require('../../../assets/images/300mfree.png')}
                        />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 14,
                        marginTop:5,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                    }}>
                        INTELLIGENT <Text style={{fontFamily: 'FuturaStd-Bold',fontSize: 26,}}>VIDEO</Text> COMPRESSION</Text>
                    <View style={{marginTop:5,borderTopWidth:3,borderTopColor:"#000",alignSelf:"center"}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            marginTop:5,
                            fontFamily: 'HelveticaNeueLTStd-Md',
                            alignSelf: 'center',
                            textAlign:"center"
                        }}>
                            This ability will be added in the next version</Text>
                        <Text style={{
                            color: '#000',
                            fontSize: 25,
                            fontFamily: 'futura-pt-bold-589e44b6aacd3',
                            alignSelf: 'center',
                            // textAlign:"center",
                            letterSpacing:1
                        }}>
                            Coming Soon...</Text>
                    </View>
                </Dialog>

                <Dialog
                    visible={this.state.dialogVisibleDoczip}
                    dialogStyle={{backgroundColor:'#fff',width:350,height:270,justifyContent:"center",alignItems:"center",
                        borderRightWidth:6,borderBottomWidth:4,borderLeftWidth:2,borderTopWidth:2,borderColor:"#000",

                    }}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisibleDoczip: false})} >
                    <View style={{marginTop:-20,alignSelf:"center",}}>
                        <Image
                            style={{width: 80, height: 80,marginBottom:5,  shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.37,
                                shadowRadius: 7.49,
                                elevation: 35,}}
                            source={require('../../../assets/images/200mfree.png')}
                        />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 12,
                        marginTop:5,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',

                    }}>
                        INTELLIGENT <Text style={{fontFamily: 'FuturaStd-Bold',fontSize: 20,}}>DOCUMENT</Text> COMPRESSION</Text>
                    <View style={{marginTop:5,borderTopWidth:3,borderTopColor:"#000",alignSelf:"center"}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            marginTop:5,
                            fontFamily: 'HelveticaNeueLTStd-Md',
                            alignSelf: 'center',
                            textAlign:"center"
                        }}>
                            This ability will be added in the next version</Text>
                        <Text style={{
                            color: '#000',
                            fontSize: 25,
                            fontFamily: 'futura-pt-bold-589e44b6aacd3',
                            alignSelf: 'center',
                           // textAlign:"center",
                            letterSpacing:1
                        }}>
                            Coming Soon...</Text>
                    </View>

                </Dialog>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    pic:{
        width:150,
        height:150,
        alignSelf:"center",
        marginTop:60,

    },

});

