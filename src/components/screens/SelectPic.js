import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Modal
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import {ProgressBar} from 'react-native-multicolor-progress-bar';
import ImagePicker from "react-native-customized-image-picker";
export default class SelectPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notEnoughStorage:false,
            greaterThan100mb:false,
            sizeSelectedImage:false,
            images:[],
            totalSize:0,
            count:0,
            unit:'',
        };
    }

    customeSelectPic(){
        ImagePicker.openPicker({
            title:'Select Photos to zipzip',
            multiple: true,
            cropping: true,
            maxSize:200,
            imageLoader:'PICASSO',
            storageOptions: {
                skipBackup: true,
                path: 'zipzip',
            },
        }).then(images => {

            let totalSize=0;
            for (let i=0;i<images.length;i++){
                console.log('images'+i+'=',images[i].size);
                totalSize+=images[i].size
            }
            if (totalSize<=1024) {
                this.setState({totalSize:  (totalSize).toFixed(2),unit:'B'});
            } else if(totalSize<=1024*1024){
                this.setState({
                    totalSize:  (totalSize/(1024)).toFixed(2),unit:'KB'});
            }
            else if(totalSize<=1024*1024*1024){
                if((totalSize>=(100*1024*1024))){
                    this.setState({totalSize:  (totalSize/(1024*1024)).toFixed(2),unit:'MB'});
                    this.clickEventListenergreaterThan100mb();
                }
                else
                this.setState({totalSize:  (totalSize/(1024*1024)).toFixed(2),unit:'MB'});
            }
            ///set state
            this.setState({count:images.length})
            this.setState({
                image: null,
                images: images.map(i => {
                  //  console.log('received image', i);
                   return {uri: i.path, mime: i.mime};
                    this.setState({uri:i.path,mime: i.mime,size:i.size});
                })
            });
        });
    }

    multiple(){
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
        }).then(images => {
            // this.setState({
            //     images: this.state.images.concat({
            //         uri: images.path,
            //         width: images.width,
            //         height: images.height,
            //         mime: images.mime
            //     }),
            // })
            this.setState({
                image: null,
                images: images.map(i => {
                    console.log('received image', i);
                    return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
                })
            });
        }).catch(e => alert(e));
    }

    clickEventListenersizeselectedImage = () => {
        this.setModalVisiblesizeSelectedImage(true);
    }
    setModalVisiblesizeSelectedImage(visible) {
        this.setState({sizeSelectedImage: visible});
    }
    clickEventListenernotEnoughStorage = () => {
        this.setModalVisiblenotEnoughStorage(true);
    }
    setModalVisiblenotEnoughStorage(visible) {
        this.setState({notEnoughStorage: visible});
    }
    clickEventListenergreaterThan100mb = () => {
        this.setModalVisiblegreaterThan100mb(true);
    }
    setModalVisiblegreaterThan100mb(visible) {
        this.setState({greaterThan100mb: visible});
    }


    render() {
     //   const  image = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content" />
                <ScrollView>
                    <TouchableOpacity activeOpacity={0.92} onPress={() => this.customeSelectPic()}>
                        <View style={{justifyContent:"center",alignItems:"center",borderRadius:5,backgroundColor:"#000",marginHorizontal:110,marginVertical:60,width:200,height:100}}>
                            <Text style={{color:"#fff",fontFamily: 'FuturaStd-Bold',fontSize:23,alignSelf:"center",padding:20}}>Select Photo</Text>
                        </View>
                    </TouchableOpacity>
                    <Image source={this.state.images[1]} style={{width:100,height:200,justifyContent:"center",alignItems:"center",alignSelf:"center"}} />
                    <Text style={{textAlign:"center"}}>{this.state.totalSize} {this.state.unit}
                       number: {this.state.count}
                    </Text>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.92} onPress={() => this.clickEventListenernotEnoughStorage()}>
                                <Image style={{width: '55%', height: 35}}
                                    source={require('../../../assets/images/ZipZipWhite.png')}
                                />
                    </TouchableOpacity>
                    </View>
                    <View>
                    </View>
                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.sizeSelectedImage}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image
                                style={{width:250, height:80,marginBottom:5,alignSelf:"center",marginTop:20}}
                                source={require('../../../assets/images/movimg.png')}
                            />
                            <Divider style={styles.divider} />
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
                            <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisiblesizeSelectedImage(false) }}>
                                <Text style={styles.textButton}>
                                    OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.notEnoughStorage}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{marginTop:10,color:"#d21404",fontFamily: 'FuturaStd-Bold',fontSize:20,alignSelf:"center"}}>NOT ENOUGH STORAGE</Text>
                            <Divider style={styles.divider} />
                            <Text style={{padding:5,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:20,alignSelf:"center",textAlign:'center'}}>you should empty your storage for zipziped photos</Text>
                            <Divider style={styles.divider} />
                            <Text style={{paddingTop:5,fontFamily: 'FuturaStd-Bold',fontSize:20,alignSelf:"center"}}>NEW FOLDER SIZE: 25 MB</Text>
                            <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisiblenotEnoughStorage(false) }}>
                                <Text style={styles.textButton}>
                                    Got it</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.greaterThan100mb}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image
                                style={{width: 250, height: 80,marginBottom:5,alignSelf:"center",marginTop:10}}
                                source={require('../../../assets/images/movimg.png')}/>
                            <Divider style={styles.divider} />
                            <Text style={{padding:5,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:14,alignSelf:"center",textAlign:'center'}}>selected photo over 100MB very large :{this.state.totalSize}  {this.state.unit}</Text>

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
                                         ]}/>
                            <TouchableOpacity style={styles.buttonStyledialog} activeOpacity={0.92} onPress={() => { this.setModalVisiblegreaterThan100mb(false) }}>
                                <Text style={styles.textButton}>
                                    OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal:15,
        alignItems: "center",
        borderRightWidth: 8,
        borderBottomWidth: 6,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
        width: 150,
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
    divider:{height:1,width:300,marginTop: 10,backgroundColor:"#000"},
});
