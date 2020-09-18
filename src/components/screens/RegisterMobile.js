import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, TextInput, Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {
    mobileChanged,
    passwordChanged, tokenChanged,
    loginUser, failMessageChanged,
} from '../../action/LoginUser';
import {storeData} from '../../storage';
import {USER_MOBILE, USER_ID} from '../../types';
import {Dialog} from "react-native-simple-dialogs";
import CountryPicker from 'react-native-country-picker-modal';
export default class RegisterMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            messageError: '',
            Error: '',
            dialogVisibleErr:false,
            dialogVisible:false,
            token: '',
            cca2: 'US',
            country:"",
            code:"1",
        };
    }
    /*
    _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                'token',
                this.state.token,
            );
        } catch (error) {
            // Error saving data
        }
    };
    clickdialogVisible = () => {
            this.setState({dialogVisible: true});
    };
    clickdialogVisibleErr = () => {
        this.setState({dialogVisibleErr: true});
    };
    onMobileChange(text) {
        this.props.mobileChanged(text);
    }

    onLoginUser() {
        const {mobile} = this.props;
        const {navigation} = this.props;
        if ((mobile.length < 1)) {
            this.setState({messageError: 'Please Enter Mobile Number'});
            this.clickdialogVisible();
        } else if (mobile.length < 11) {
            this.setState({messageError: 'Enter the mobile number completely'});
            this.clickdialogVisible();
        }
        else {
            this.props.loginUser({mobile, navigation});
            if (this.props.success === false && this.props.error.length > 1) {
                let x = this.props.error;
                this.clickdialogVisibleErr();
            }
        }
    }

     */

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#000'}
                           barStyle="light-content"/>
                <ScrollView>
                        <Image style={styles.image}
                            source={require('../../../assets/images/ZipZip.png')}/>
                    <View style={styles.buttonContainer}>
                         <View style={styles.input}>
                                 <View style={styles.containerCC}>
                                 <CountryPicker style={{flex:3}}
                                     onSelect={(value)=> this.setState({country: value,code:value.callingCode,cca2: value.cca2})}
                                     cca2={this.state.cca2}
                                     translation='eng'
                                      withFilter={true}
                                     countryCode={'US'}
                                     withCallingCode={true}
                                     withAlphaFilter={true}
                                     withFlag={true}
                                     />
                                 <Text style={styles.textCC}>{this.state.cca2} (+{this.state.code}) </Text>
                                     <Icon
                                         name='angle-down'
                                         color='#000'
                                         size={35} style={{flex:1,marginLeft:'35%',marginRight:'-5%'}}/>
                                 </View>
                             </View>
                        <View style={styles.input}>
                        <TextInput style={{marginRight: 18, fontFamily: 'FuturaStd-Bold',textAlign:"center"}}
                                placeholder="please enter your mobile number"
                                underlineColorAndroid="transparent"
                                keyboardType="numeric"
                                maxLength={10}
                                value={this.props.mobile}
                               // onChangeText={this.onMobileChange.bind(this)}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('SendSms')}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>OK </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/*<Button style={styles.buttonStyle} labelStyle={styles.textButton}*/}
                    {/*onPress={() => this.props.navigation.navigate('SendSms')}>OK</Button>*/}
                       <View style={styles.footer}>
                        <Icon
                            name='minus'
                            color='#000'
                            size={35} style={{marginRight: 15}}/>
                    </View>
                </ScrollView>
                <Dialog
                    visible={this.state.dialogVisible}
                    dialogStyle={{backgroundColor:'#fff',width:350,height:270,justifyContent:"center",alignItems:"center",
                        borderRightWidth:6,borderBottomWidth:4,borderLeftWidth:2,borderTopWidth:2,borderColor:"#000"}}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisible: false})} >
                    <View style={{marginTop:5,borderTopWidth:3,borderTopColor:"#000",alignSelf:"center"}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            marginTop:5,
                            fontFamily: 'HelveticaNeueLTStd-Md',
                            alignSelf: 'center',
                            textAlign:"center"
                        }}>
                            {this.state.messageError}</Text>
                    </View>
                </Dialog>
                <Dialog
                    visible={this.state.dialogVisibleErr}
                    dialogStyle={{backgroundColor:'#fff',width:350,height:270,justifyContent:"center",alignItems:"center",
                        borderRightWidth:6,borderBottomWidth:4,borderLeftWidth:2,borderTopWidth:2,borderColor:"#000"}}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisibleErr: false})} >
                    <View style={{marginTop:5,borderTopWidth:3,borderTopColor:"#000",alignSelf:"center"}}>
                        <Text style={{
                            color: '#000',
                            fontSize: 20,
                            marginTop:5,
                            fontFamily: 'HelveticaNeueLTStd-Md',
                            alignSelf: 'center',
                            textAlign:"center"
                        }}>
                            {this.state.Error}</Text>
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
    image:{
        flex:1,
        width: '80%',
        height: 65,
        marginTop: 90,
        alignSelf:"center"
    },
    containerCC:{
        flex:1,
        paddingLeft:20,
        flexDirection:"row",
        alignSelf: 'center',
        justifyContent:"center",
        alignItems:"center"
    },
    textCC:{flex:2,
        color:"#000",
        fontFamily: 'FuturaStd-Bold',
        fontSize:14
    },
    input:{
        backgroundColor: '#fff',
        height: 60,
        width: '90%',
        alignSelf: 'center',
        marginVertical:5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius:5
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
        marginVertical: 25,
        borderRadius:5,
        fontSize: 20,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    footer:{
        flex: 1,
        marginTop: height/4-20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
