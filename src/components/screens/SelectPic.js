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
import { Divider } from 'react-native-paper';
import {ProgressBar} from 'react-native-multicolor-progress-bar';
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
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.props.navigation.navigate('ZipSuccess')}>
                                <Image style={{width: '55%', height: 35}}
                                    source={require('../../../assets/images/ZipZipWhite.png')}
                                />
                    </TouchableOpacity>
                    </View>
                    <View>
                    </View>
                </ScrollView>
                <Dialog
                    visible={this.state.dialogVisible}
                    dialogStyle={styles.dialog}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisible: false})} >
                    <Image
                        style={{width: '95%', height: 95,marginBottom:5,alignSelf:"center"}}
                        source={require('../../../assets/images/movimg.png')}
                    />
                    <Divider style={styles.divider} />
                    {/*<Text style={{marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18,color:"#d21404"}}>100 MB</Text>*/}
                    {/*<View style={{borderWidth:3,borderColor:"#000",width:300,height:45,backgroundColor:"#d21404"}}></View>*/}

                    <ProgressBar textStyle={{fontFamily: 'HelveticaNeueLTStd-Md',color:'#d21404',fontSize:16,alignSelf:'center',textAlign: 'center',marginTop :-25}}
                                 parentViewStyle={{alignItems:'stretch'}}
                                 onStartProgressStyle={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}
                                 backgroundBarStyle={{alignItems:'stretch',height:30,marginHorizontal:15,marginTop: 40,borderRadius: 0,borderWidth:2,borderColor:"#000",backgroundColor: '#fff'}}
                                 arrayOfProgressObjects={[
                                     {
                                         color: '#d21404',
                                         value:1,
                                         opacity: 1,
                                         nameToDisplay: "100 MB"
                                     },
                                 ]}
                    />
                    <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisibleMovzip(false) }}>
                        <Text style={styles.textButton}>
                            OK</Text>
                    </TouchableOpacity>
                </Dialog>
                <Dialog
                    visible={this.state.dialogVisible2}
                    dialogStyle={styles.dialog}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisible2: false})} >
                    <Image
                        style={{width: '95%', height: 95,marginBottom:5,alignSelf:"center",marginTop:20}}
                        source={require('../../../assets/images/movimg.png')}
                    />
                    <Divider style={styles.divider} />
                    {/*<View style={{flexDirection:"row"}}>*/}
                    {/*    <Text style={{flex:2,marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18}}>25 MB</Text>*/}
                    {/*    <Text style={{flex:1,marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18,color:"#b3b3b3"}}>100 MB</Text>*/}
                    {/*</View>*/}
                    {/*<View style={{borderWidth:3,borderColor:"#000",width:300,height:45,flexDirection:"row"}}>*/}
                    {/*    <View style={{flex:2,width:40,backgroundColor:"#000"}}></View>*/}
                    {/*    <View style={{flex:5,width:40,backgroundColor:"#fff"}}></View>*/}
                    {/*</View>*/}

                    <ProgressBar textStyle={{fontFamily: 'FuturaStd-Bold',color:'#000',fontSize:16,alignSelf:'center',textAlign: 'center',marginTop :-25}}
                                 parentViewStyle={{alignItems:'stretch'}}
                                 onStartProgressStyle={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}
                                 backgroundBarStyle={{alignItems:'stretch',height:30,marginHorizontal:15,marginTop: 40,borderRadius: 0,borderWidth:2,borderColor:"#000",backgroundColor: '#fff'}}
                                 arrayOfProgressObjects={[
                                     {
                                         color: '#000',
                                         value:0.25,
                                         opacity: 1,
                                         nameToDisplay: "25 MB"
                                     },
                                     {
                                         color: '#fff',
                                         value:0.75,
                                         opacity: 1,
                                         nameToDisplay: "100 MB"
                                     },
                                 ]}
                    />
                    <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisibleMovzip(false) }}>
                        <Text style={styles.textButton}>
                            OK</Text>
                    </TouchableOpacity>
                </Dialog>
                <Dialog
                    visible={this.state.dialogVisible3}
                    dialogStyle={styles.dialog}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisible3: false})}
                    onRequestClose={() => this.setState({dialogVisible3: false})}>
                    <Text style={{color:"#d21404",fontFamily: 'FuturaStd-Bold',fontSize:20,alignSelf:"center",marginBottom:10}}>NOT ENOUGH STORAGE</Text>
                    <Divider style={styles.divider} />
                    <Text style={{fontFamily: 'HelveticaNeueLTStd-Md',fontSize:20,alignSelf:"center",textAlign:'center'}}>you should empty your storage for zipziped photos</Text>
                    <Divider style={styles.divider} />
                    <Text style={{fontFamily: 'FuturaStd-Bold',fontSize:20,alignSelf:"center"}}>NEW FOLDER SIZE: 25 MB</Text>
                    <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisibleMovzip(false) }}>
                        <Text style={styles.textButton}>
                            Got it</Text>
                    </TouchableOpacity>
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
    buttonContainer:{
        flex:5,
        marginTop: 90,
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
    buttonStyledialog: {
        backgroundColor: '#000',
        height: 45,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius:5
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    dialog:{
        backgroundColor:'#fff',
        width:370,
        height:280,
        justifyContent:"center",
        alignItems:"center",
        borderRightWidth:8,
        borderBottomWidth:4,
        borderLeftWidth:2,
        borderTopWidth:2,
        borderColor:"#000",
    },
    divider:{height:3,width:'95%',marginVertical: 4,backgroundColor:"#000"},

});
