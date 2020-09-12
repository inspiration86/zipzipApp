import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, TextInput, Modal,NativeModules
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import { Dialog } from 'react-native-simple-dialogs';
import ImagePicker from 'react-native-image-picker';

//import ImagePicker from "react-native-customized-image-picker";
export default class SelectPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible:false,
            dialogVisible2:false,
            dialogVisible3:false,
            avatarSource:'',
            infoImage:0,
        };
    }

    clickdialogVisible3 = () => {
        this.setdialogVisible3(true);
    }
    setdialogVisible3(visible) {
        this.setState({dialogVisible3: visible});
    }
    clickdialogVisible2 = () => {
        this.setdialogVisible2(true);
    }
    setdialogVisible2(visible) {
        this.setState({dialogVisible2: visible});
    }
    clickdialogVisible = () => {
        this.setdialogVisible(true);
    }
    setdialogVisible(visible) {
        this.setState({dialogVisible: visible});
    }
    SingleImage() {
        // More info on all the options is below in the API Reference... just some common use cases shown here
        const options = {
            title: 'Select Photos',
            multiple: true,
        //    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'ZipZip',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
               // const info={fileSize:response.fileSize};
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source,
                   // infoImage:info,
                });
            }
        });
    }
    render() {
     //   const  image = this.state;

        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content" />
                <ScrollView>
                    <TouchableOpacity activeOpacity={0.92} onPress={() => this.SingleImage()}>
                        <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#000",marginHorizontal:110,marginVertical:60,width:200,height:100}}>
                            <Text style={{color:"#fff",fontFamily: 'FuturaStd-Bold',fontSize:23,alignSelf:"center",padding:20}}>Select Photo</Text>
                        </View>
                    </TouchableOpacity>
                    <Image source={this.state.avatarSource} style={{width:100,height:200,justifyContent:"center",alignItems:"center",alignSelf:"center"}} />
                    <Text>{this.state.infoImage}</Text>
                    <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('ZipSuccess')}>
                    {/*<TouchableOpacity activeOpacity={0.92} onPress={() => this.clickEventListener()}>*/}
                        <View style={styles.buttonStyle}>
                            <Image
                                style={{width: 210, height: 40}}
                                source={require('../../../assets/images/ZipZipWhite.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <View>
                    </View>

                    <Dialog
                        visible={this.state.dialogVisible}
                        dialogStyle={{backgroundColor:'#fff',width:370,height:280,justifyContent:"center",alignItems:"center",borderRightWidth:8,borderBottomWidth:4,borderLeftWidth:2,borderTopWidth:2,borderColor:"#000",}}
                        // title="warning"
                        onTouchOutside={() => this.setState({dialogVisible: false})} >
                                <View style={{marginTop:-20,borderBottomWidth:3,borderBottomColor:"#000"}}>
                                    <Image
                                        style={{width: 330, height: 105,marginBottom:5}}
                                        source={require('../../../assets/images/movimg.png')}
                                    />
                                </View>
                                <Text style={{marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18,color:"#d21404"}}>100 MB</Text>
                                <View style={{borderWidth:3,borderColor:"#000",width:300,height:45,backgroundColor:"#d21404"}}></View>
                    </Dialog>

                    <Dialog
                        visible={this.state.dialogVisible2}
                        dialogStyle={{backgroundColor:'#fff',width:370,height:280,justifyContent:"center",alignItems:"center",borderRightWidth:8,borderBottomWidth:4,borderLeftWidth:2,borderTopWidth:2,borderColor:"#000",}}
                        // title="warning"
                        onTouchOutside={() => this.setState({dialogVisible2: false})} >
                        <View style={{marginTop:-20,borderBottomWidth:3,borderBottomColor:"#000"}}>
                            <Image
                                style={{width: 330, height: 105,marginBottom:5}}
                                source={require('../../../assets/images/movimg.png')}
                            />
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Text style={{flex:2,marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18}}>25 MB</Text>
                        <Text style={{flex:1,marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18,color:"#b3b3b3"}}>100 MB</Text>
                        </View>
                        <View style={{borderWidth:3,borderColor:"#000",width:300,height:45,flexDirection:"row"}}>
                            <View style={{flex:2,width:40,backgroundColor:"#000"}}></View>
                            <View style={{flex:5,width:40,backgroundColor:"#fff"}}></View>
                        </View>
                    </Dialog>

                    <Dialog
                        visible={this.state.dialogVisible3}
                        dialogStyle={{backgroundColor:'#fff',width:370,height:250,justifyContent:"center",alignItems:"center",borderRightWidth:8,borderBottomWidth:4,borderLeftWidth:2,borderTopWidth:2,borderColor:"#000",}}
                        // title="warning"
                        onTouchOutside={() => this.setState({dialogVisible3: false})} >
                        <View style={{marginTop:-5,borderBottomWidth:3,borderBottomColor:"#000"}}>
                            <Text style={{color:"#d21404",fontFamily: 'FuturaStd-Bold',fontSize:24,alignSelf:"center",marginBottom:10}}>NOT ENOUGH STORAGE</Text>
                        </View>
                        <View style={{marginTop:5,borderBottomWidth:3,borderBottomColor:"#000",padding:5}}>
                            <Text style={{fontFamily: 'HelveticaNeueLTStd-Md',fontSize:20,alignSelf:"center",textAlign:'center'}}>you should empty your storage for zipziped photos</Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{fontFamily: 'FuturaStd-Bold',fontSize:22,alignSelf:"center"}}>NEW FOLDER SIZE: 25 MB</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.setdialogVisible3(false)}>
                            <View style={{backgroundColor: '#000',
                                height: 50,
                                width: '80%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginTop: 15,}}>
                                <Text style={styles.textButton}>
                                    Got it </Text>
                            </View>
                        </TouchableOpacity>
                    </Dialog>
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
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
