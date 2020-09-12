import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, TextInput, Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import {Collapse, CollapseBody, CollapseHeader} from 'accordion-collapse-react-native';

export default class PicZip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            modalVisibleFAQ:false,
            modalVisibleExt:false,
            modalVisible100m:false,
            modalVisibleclassic:false,
            modalVisiblepremium:false,


        };
    }
    clickEventListener = () => {
        this.setModalVisible(true);
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    clickEventListenerFAQ = () => {
        this.setModalVisibleFAQ(true);
    }
    setModalVisibleFAQ(visible) {
        this.setState({modalVisibleFAQ: visible});
    }
    clickEventListenerExt = () => {
        this.setModalVisibleExt(true);
    }
    setModalVisibleExt(visible) {
        this.setState({modalVisibleExt: visible});
    }
    clickEventListener100m = () => {
        this.setModalVisibleExt100m(true);
    }
    setModalVisibleExt100m(visible) {
        this.setState({modalVisible100m: visible});
    }
    clickEventListenerclassic = () => {
        this.setModalVisibleclassic(true);
    }
    setModalVisibleclassic(visible) {
        this.setState({modalVisibleclassic: visible});
    }
    clickEventListenerpremium = () => {
        this.setModalVisiblepremium(true);
    }
    setModalVisiblepremium(visible) {
        this.setState({modalVisiblepremium: visible});
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content" />
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                    <View style={{flexDirection:'row',marginLeft:10}}>
                        <Icon
                            name='arrow-left'
                            color='#000'
                            size={25}  style={{marginLeft:10}}/>

                    </View>
                </View>
                <ScrollView>
                    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                        <Icon
                            name='question-circle-o'
                            color='#000'
                            size={85} />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 30,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                    }}>
                        HELP</Text>
                    <View style={{marginTop: 10,flex:10}}>
                        <TouchableOpacity activeOpacity={0.92} onPress={() =>this.clickEventListener()}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    What ZipZip do</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() =>this.clickEventListener()}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                   How to zipzip </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() =>this.clickEventListenerFAQ()}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    FAQ </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() =>this.clickEventListenerExt()}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Suppoted Extention </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() =>this.clickEventListener100m()}>
                            <View style={[styles.buttonStyle,{flexDirection:"row"}]}>
                                <Image
                                    style={{width: 40, height: 40}}
                                    source={require('../../../assets/images/free.png')}
                                />
                                <Text style={styles.textButton}>
                                    100 MB Compression</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() =>this.clickEventListenerclassic()}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Classic Account</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.92} onPress={() =>this.clickEventListenerpremium()}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    Premium Account</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType={'center'}
                        transparent={false}
                        position={'center'}
                        coverScreen={true}
                        //onRequestClose={() => this.setModalVisible(false)}
                        visible={this.state.modalVisible}>
                <ScrollView>
                    <Icon name='arrow-left' style={{ marginTop:5,marginLeft:20,fontSize: 30, color: '#000'}} onPress={() => { this.setModalVisible(false) }} />
                    <View style={{backgroundColor:'#fff',justifyContent:"center",alignItems:"center",marginTop:10}}>
                            <View style={{marginTop:-5}}>
                                <Image
                                    style={{width: 70, height: 70,marginBottom:5}}
                                    source={require('../../../assets/images/resize.png')}
                                />
                            </View>
                            <Text style={{marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18,textAlign:"center"}}>How Can I ZipZip My Photos?</Text>
                            <View style={{marginTop:5,width:50,height:50,borderRadius:60,backgroundColor:"#000",justifyContent:"center",alignItems:"center"}}><Text style={{color:"#fff",fontSize:20,fontFamily: 'FuturaStd-Bold'}}>1</Text></View>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:18,textAlign:"center",marginHorizontal:10}}>You Should just select the photos you want until they reach 500MB in classic Account and 2GB in Premium Account and tap zipzip. </Text>
                            <View style={{marginTop:5}}>
                                <Image
                                    style={{width: 120, height: 120,marginBottom:5}}
                                    source={require('../../../assets/images/select.png')}
                                />
                            </View>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'FuturaStd-Bold',color:"#777",fontSize:14,textAlign:"center",marginHorizontal:10}}>You can check the size you select at the moment. </Text>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'FuturaStd-Bold',fontSize:20,textAlign:"center",marginHorizontal:10}}>SELECTED PHOTOS: 100MB </Text>
                            <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('ZipSuccess')}>
                                <View style={styles.buttonStyle2}>
                                    <Image
                                        style={{width: 150, height: 30}}
                                        source={require('../../../assets/images/ZipZipWhite.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{marginTop:5,width:50,height:50,borderRadius:60,backgroundColor:"#000",justifyContent:"center",alignItems:"center"}}><Text style={{color:"#fff",fontSize:20,fontFamily: 'FuturaStd-Bold'}}>2</Text></View>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:18,textAlign:"center",marginHorizontal:10}}>Then you can find your zipziped photos in the address you got in the notification. </Text>
                            <Text style={{marginTop:20,padding:2,fontFamily: 'FuturaStd-Bold',fontSize:14,textAlign:"center",marginHorizontal:10}}>in a new folder named piczip/zipzip.</Text>
                            <View style={{marginTop:5}}>
                                <Image
                                    style={{width: 110, height: 80,marginBottom:5}}
                                    source={require('../../../assets/images/checkzipzip.png')}
                                />
                            </View>
                            <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SendSms')}>
                                <View style={styles.buttonStyle2}>
                                    <Text style={styles.textButton}>
                                       Start ZipZip </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
                    </Modal>

                    <Modal
                        animationType={'center'}
                        transparent={false}
                        position={'center'}
                        coverScreen={true}
                        //onRequestClose={() => this.setModalVisible(false)}
                        visible={this.state.modalVisibleFAQ}>
                        <ScrollView>
                            <Icon name='arrow-left' style={{ marginTop:5,marginLeft:20,fontSize: 30, color: '#000'}} onPress={() => { this.setModalVisibleFAQ(false) }} />
                            <View style={{backgroundColor:'#fff',justifyContent:"center",alignItems:"center",marginBottom:5}}>
                                <Text style={{marginTop:20,fontFamily: 'FuturaStd-Bold',fontSize:18,textAlign:"center"}}>Frequently Asked Questions</Text>
                                <Text style={{marginTop:10,fontFamily: 'FuturaStd-Bold',fontSize:23,textAlign:"center"}}>FAQ</Text>
                                <View style={{flexDirection:"row",marginTop:20}}>
                                    <Icon
                                        name='question-circle'
                                        color='#000'
                                        size={30} style={{marginLeft:15}} />
                                    <Text style={styles.question}>Can I undo ZiPZiP?</Text>
                                </View>
                                <Text style={styles.reply}>No. You cannot reach the original size of a
                                    ZiPZiPED photo after the process.</Text>
                                <Divider style={styles.divider} />
                                <View style={{flexDirection:"row",marginTop:5}}>
                                    <Icon
                                        name='question-circle'
                                        color='#000'
                                        size={30} style={{marginLeft:15}} />
                                    <Text style={styles.question}>Can I use ZiPZiP application
                                        without Internet connection?</Text>
                                </View>
                                <Text style={styles.reply}>Yes. Definitely you are. Classic and premium accounts owners have offline access to the application services.
                                    Can I use ZiPZiPED photos for </Text>
                                <Divider style={styles.divider} />
                                <View style={{flexDirection:"row",marginTop:5}}>
                                    <Icon
                                        name='question-circle'
                                        color='#000'
                                        size={30} style={{marginLeft:15}} />
                                    <Text style={styles.question}>printing or something like that?</Text>
                                </View>
                                <Text style={styles.reply}>Yes. Sure you can. Because the dimension of your photos will remain  %100 unchanged.You would be able to print the 13x18 cm photo after ZiPZiP and have the exact quality in comparison of the original version print in the same size.</Text>
                                <Divider style={styles.divider} />
                                <View style={{flexDirection:"row",marginTop:5}}>
                                    <Icon
                                        name='question-circle'
                                        color='#000'
                                        size={30} style={{marginLeft:15}} />
                                    <Text style={styles.question}>Can I edit the ZiPZiPED photos?</Text>
                                </View>
                                <Text style={styles.reply}>Yes, for sure. You would be able to edit your ZiPZiPED photos exactly the old same way in photo edit software or applications.</Text>
                                <Divider style={styles.divider} />
                                <View style={{flexDirection:"row",marginTop:5}}>
                                    <Icon
                                        name='question-circle'
                                        color='#000'
                                        size={30} style={{marginLeft:15}} />
                                    <Text style={styles.question}>How much file  I can ZiPZiP in
                                        a day?</Text>
                                </View>
                                <Text style={styles.reply}>First you can ZiPZiP 100 MB of your photos for free to see the result of
                                    application’s intelligent compression technology.
                                    If you have a Classic Account you can
                                    ZiPZiP 500 MB of your photos each day.
                                    If you have a Premium Account you can compress 2 GB fo your photos each day.</Text>
                                <Divider style={styles.divider} />
                                <View style={{flexDirection:"row",marginTop:5}}>
                                    <Icon
                                        name='question-circle'
                                        color='#000'
                                        size={30} style={{marginLeft:15}} />
                                    <Text style={styles.question}>Which file extensions ZiPZiP
                                        support?</Text>
                                </View>
                                <View style={{marginTop:10,flexDirection:"row",flex:1,marginHorizontal:10}}>
                                    <Image
                                        style={{width: 50, height: 50}}
                                        source={require('../../../assets/images/PicZip.png')}
                                    />
                                    <Text style={styles.reply}>JPG    PNG   TIF   JP2   BMP
                                        JPG   PNG</Text>
                                </View>
                                <View style={{marginTop:10,flexDirection:"row",flex:1,marginHorizontal:10}}>
                                    <Image
                                        style={{width: 50, height: 50}}
                                        source={require('../../../assets/images/MovZip.png')}
                                    />
                                    <Text style={styles.reply}>JPG    PNG   TIF   JP2   BMP
                                        JPG   PNG </Text>
                                </View>
                                <View style={{marginTop:10,flexDirection:"row",flex:1,marginHorizontal:10}}>
                                    <Image
                                        style={{width: 50, height: 50}}
                                        source={require('../../../assets/images/DocZip.png')}
                                    />
                                    <Text style={styles.reply}>JPG    PNG   TIF   JP2   BMP
                                        JPG   PNG</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </Modal>


                    <Modal
                        animationType={'center'}
                        transparent={false}
                        position={'center'}
                        coverScreen={true}
                        //onRequestClose={() => this.setModalVisible(false)}
                        visible={this.state.modalVisibleExt}>
                        <ScrollView>
                            <Icon name='arrow-left' style={{ marginTop:5,marginLeft:20,fontSize: 30, color: '#000'}} onPress={() => { this.setModalVisibleExt(false) }} />
                            <View style={{backgroundColor:'#fff',justifyContent:"center",alignItems:"center",marginTop:10}}>
                                <View style={{marginTop:-5}}>
                                    <Image
                                        style={{width: 70, height: 70,marginBottom:5}}
                                        source={require('../../../assets/images/p.png')}
                                    />
                                </View>
                                <Text style={{marginTop:10,fontFamily: 'FuturaStd-Bold',fontSize:18,textAlign:"center"}}>Supported Extention</Text>
                                <View style={{marginTop:20}}>
                                    <Image
                                        style={{width: 160, height: 120,marginBottom:5}}
                                        source={require('../../../assets/images/picExt.png')}
                                    />
                                </View>
                                <View style={{marginTop:20}}>
                                    <Image
                                        style={{width: 160, height: 120,marginBottom:5}}
                                        source={require('../../../assets/images/movext.png')}
                                    />
                                </View>
                                <View style={{marginTop:20}}>
                                    <Image
                                        style={{width: 160, height: 120,marginBottom:5}}
                                        source={require('../../../assets/images/docExt.png')}
                                    />
                                </View>

                                <Collapse>
                                    <CollapseHeader style={{backgroundColor:"#000",width:"100%",height:55,marginTop:20,padding:15,justifyContent:"center",alignItems:"center"}}>
                                            <Text style={{fontFamily:'HelveticaNeueLTStd-Md',fontSize:22,color:"#fff"}}>Professional Extentions</Text>
                                    </CollapseHeader>
                                    <CollapseBody style={{}}>
                                        <View style={{marginTop:20,marginHorizontal:10,justifyContent:"center",alignItems:"center"}}>
                                            <Image
                                                style={{width: 128, height: 25,marginBottom:5}}
                                                source={require('../../../assets/images/ZipZip.png')}
                                            />
                                            <Text style={{fontFamily:'HelveticaNeueLTStd-Md',fontSize:22,color:"#000"}}>Supported Extentions</Text>

                                        </View>
                                        <View style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                                            <Text style={{marginHorizontal:10,fontFamily:'HelveticaNeueLTStd-Md',fontSize:18,color:"#000",textAlign:"center"}}>Extentions Supported in Classic and premuim account</Text>

                                            <Image
                                                style={{width: 160, height: 120,marginVertical:5}}
                                                source={require('../../../assets/images/picExt.png')}
                                            />
                                            <Image
                                                style={{width: 160, height: 120,marginVertical:5}}
                                                source={require('../../../assets/images/movext.png')}
                                            />
                                            <Image
                                                style={{width: 160, height: 120,marginVertical:5}}
                                                source={require('../../../assets/images/docExt.png')}
                                            />
                                        </View>
                                        <View style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                                            <View style={{flexDirection:'row',marginVertical:30}}>
                                            <Text style={{marginHorizontal:10,fontFamily:'FuturaStd-Bold',fontSize:20,color:"#000",textAlign:"center"}}>Extentions Supported in Store</Text>
                                            <Icon name='chevron-down' style={{fontSize: 30, color: '#000'}} />
                                            </View>
                                            <Image
                                                style={{width: 320, height: 150,marginVertical:5}}
                                                source={require('../../../assets/images/picextstore.png')}
                                            />
                                            <Divider style={styles.divider} />
                                            <Image
                                                style={{width: 320, height: 210,marginVertical:5}}
                                                source={require('../../../assets/images/movextstore.png')}
                                            />
                                                <Divider style={styles.divider} />
                                            <Image
                                                style={{width: 320, height: 210,marginVertical:5}}
                                                source={require('../../../assets/images/movextstore.png')}
                                            />
                                        </View>

                                    </CollapseBody>
                                </Collapse>
                            </View>
                        </ScrollView>
                    </Modal>


                    <Modal
                        animationType={'center'}
                        transparent={false}
                        position={'center'}
                        coverScreen={true}
                        //onRequestClose={() => this.setModalVisible(false)}
                        visible={this.state.modalVisible100m}>
                        <ScrollView>
                            <Icon name='arrow-left' style={{ marginTop:5,marginLeft:20,fontSize: 30, color: '#000'}} onPress={() => { this.setModalVisibleExt100m(false) }} />
                            <View style={{backgroundColor:'#fff',justifyContent:"center",alignItems:"center",marginTop:60}}>
                                <View style={{marginTop:20}}>
                                    <Image
                                        style={{width: 90, height: 90,marginBottom:5}}
                                        source={require('../../../assets/images/freetest.png')}
                                    />
                                </View>
                                <Text style={{marginTop:10,fontFamily: 'FuturaStd-Bold',fontSize:18,textAlign:"center"}}>100 MB PHOTO Compression</Text>
                                <View style={{marginTop:20}}>
                                    <Image
                                        style={{width: 90, height: 90,marginBottom:5}}
                                        source={require('../../../assets/images/PicZip.png')}
                                    />
                                </View>
                                <View style={{marginTop:30,justifyContent:"center",alignItems:"center"}}>
                                    <Text style={{marginHorizontal:10,fontFamily:'HelveticaNeueLTStd-Md',fontSize:20,color:"#000",textAlign:"center"}}>You can use the 100 MB Free TEST at first and check he size and quality of photos got ZipZiped and make sure that how they will remain 100% unchanged.</Text>
                                </View>
                                </View>
                            <View style={{marginTop:40}}>

                            <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('')}>
                                <View style={styles.buttonStyle}>
                                    <Text style={styles.textButton}>
                                        Want it</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </Modal>

                    <Modal
                        animationType={'center'}
                        transparent={false}
                        position={'center'}
                        coverScreen={true}
                        //onRequestClose={() => this.setModalVisible(false)}
                        visible={this.state.modalVisibleclassic}>
                        <ScrollView>
                            <Icon name='arrow-left' style={{ marginTop:5,marginLeft:20,fontSize: 30, color: '#000'}} onPress={() => { this.setModalVisibleclassic(false) }} />
                            <View style={{justifyContent:"center",alignItems:"center",marginTop:60}}>
                                <View style={{marginTop:20}}>
                                    <Image
                                        style={{width: 90, height: 90,marginBottom:5}}
                                        source={require('../../../assets/images/PicZip.png')}
                                    />
                                </View>
                                <Image
                                    style={{width: 40, height: 70,marginTop:-5}}
                                    source={require('../../../assets/images/tagclassic.png')}
                                />
                                <Text style={{marginTop:10,fontFamily: 'FuturaStd-Bold',fontSize:20,textAlign:"center"}}>Classic account</Text>
                                <View style={{marginTop:20,borderTopColorColor:"#000",borderleftColor:"#000",borderRightColor:"#000",borderTopWidth:3,borderLeftWidth:3,borderRightWidth:3}}>
                                    <Text style={{fontFamily: 'FuturaStd-Bold',fontSize:30,textAlign:"center"}}> 1 Year </Text>
                                </View>
                                <View style={{borderColor:"#000",borderWidth:3}}>
                                    <Text style={{fontFamily: 'FuturaStd-Bold',fontSize:30,color:"#fff",backgroundColor:"#000",textAlign:"center"}}>500 MB</Text>
                                </View>
                                <View style={{marginTop:20}}>
                                <Image
                                    style={{width: 160, height: 80,marginTop:5}}
                                    source={require('../../../assets/images/perday.png')}
                                />
                                </View>
                                <Text style={{marginTop:30,fontFamily: 'FuturaStd-Bold',fontSize:25,color:"#000",textAlign:"center"}}>$ 5.99</Text>

                            </View>
                            <View style={{marginTop:40}}>
                                <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('')}>
                                    <View style={styles.buttonStyle}>
                                        <Text style={styles.textButton}>
                                            Want it</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </Modal>

                    <Modal
                        animationType={'center'}
                        transparent={false}
                        position={'center'}
                        coverScreen={true}
                        //onRequestClose={() => this.setModalVisible(false)}
                        visible={this.state.modalVisiblepremium}>
                        <ScrollView>
                            <Icon name='arrow-left' style={{ marginTop:5,marginLeft:20,fontSize: 30, color: '#000'}} onPress={() => { this.setModalVisiblepremium(false) }} />
                            <View style={{justifyContent:"center",alignItems:"center",marginTop:60}}>
                                <View style={{marginTop:20}}>
                                    <Image
                                        style={{width: 90, height: 90,marginBottom:5}}
                                        source={require('../../../assets/images/PicZip.png')}
                                    />
                                </View>
                                <Image
                                    style={{width: 50, height: 70,marginTop:-5}}
                                    source={require('../../../assets/images/tagpremium.png')}
                                />
                                <Text style={{marginTop:10,fontFamily: 'FuturaStd-Bold',fontSize:20,textAlign:"center"}}>Premium account</Text>
                                <View style={{marginTop:20,borderTopColorColor:"#000",borderleftColor:"#000",borderRightColor:"#000",borderTopWidth:3,borderLeftWidth:3,borderRightWidth:3}}>
                                    <Text style={{fontFamily: 'FuturaStd-Bold',fontSize:31,textAlign:"center"}}> 1 Year </Text>
                                </View>
                                <View style={{borderColor:"#000",borderWidth:3}}>
                                    <Text style={{fontFamily: 'FuturaStd-Bold',fontSize:30,color:"#fff",backgroundColor:"#000",textAlign:"center"}}>  2 GB   </Text>
                                </View>
                                <View style={{marginTop:20}}>
                                    <Image
                                        style={{width: 160, height: 80,marginTop:5}}
                                        source={require('../../../assets/images/perday.png')}
                                    />
                                </View>
                                <Text style={{marginTop:30,fontFamily: 'FuturaStd-Bold',fontSize:25,color:"#000",textAlign:"center"}}>$ 9.99</Text>

                            </View>
                            <View style={{marginTop:40}}>
                                <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('')}>
                                    <View style={styles.buttonStyle}>
                                        <Text style={styles.textButton}>
                                            Want it</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </Modal>

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
    buttonStyle2: {
        backgroundColor: '#000',
        height: 60,
        width: '160%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        marginHorizontal:10
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    divider:{height:2,width:'80%',marginVertical: 5,backgroundColor:"#000"},
    question:{
        fontFamily: 'FuturaStd-Bold',
        fontSize:16,
        marginHorizontal:10,
        flex: 2,
    },
    reply:{
        marginTop:10,
        marginBottom:5,
        fontFamily: 'HelveticaNeueLTStd-Md',
        fontSize:16,
        textAlign:"center",
        marginHorizontal:10,
    },
});
