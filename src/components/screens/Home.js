import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image, ScrollView, TouchableOpacity, StatusBar, Text,Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dialog} from 'react-native-simple-dialogs';
const {width, height} = Dimensions.get('window');
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisibleMovzip: false,
            dialogVisibleDoczip: false,
        };
    }
    toggleDrawer = () => {
        this.props.navigation.openDrawer();
    };
    clickdialogVisibleMovzip = () => {
        this.setState({dialogVisibleMovzip: true});
    };
    clickdialogVisibleDoczip = () => {
        this.setState({dialogVisibleDoczip: true});
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#0078db'}
                           barStyle="light-content"/>
                <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name='search'
                            color='#000'
                            size={25} style={{marginLeft: '25%'}}/>
                    </View>
                    <View style={{marginRight: '7%'}}>
                        <Icon onPress={this.props.navigation.openDrawer}
                              name='bars'
                              color='#000'
                              size={28}/>
                    </View>
                </View>
                <ScrollView>
                    <View style={{flex:10}}>
                    <TouchableOpacity style={styles.touchable} activeOpacity={0.92}
                                      onPress={() => this.props.navigation.navigate('PicZip')}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/images/PicZip.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable} activeOpacity={0.92}
                                      onPress={() => this.clickdialogVisibleMovzip()}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/images/MovZip.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable} activeOpacity={0.92}
                                      onPress={() => this.clickdialogVisibleDoczip()}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/images/DocZip.png')}
                        />
                    </TouchableOpacity>
                    </View>
                </ScrollView>

                <Dialog
                    visible={this.state.dialogVisibleMovzip}
                    dialogStyle={styles.dialog}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisibleMovzip: false})}>
                    <View style={{marginTop: -20, alignSelf: 'center'}}>
                        <Image
                            style={{width: 70, height: 70, marginBottom: 5}}
                            source={require('../../../assets/images/300mfree.png')}
                        />
                    </View>
                    <Text style={styles.textDialog}>
                        INTELLIGENT VIDEO COMPRESSION</Text>
                    <View style={styles.view}>
                        <Text style={[styles.textDialog, {fontFamily: 'HelveticaNeueLTStd-Md',fontSize: 18}]}>
                            This ability will be added in the next version</Text>
                        <Text style={[styles.textDialog, {
                            fontSize: 22,
                            fontFamily: 'futura-pt-bold-589e44b6aacd3',
                            letterSpacing: 2,
                        }]}>
                            Coming Soon...</Text>
                    </View>
                </Dialog>

                <Dialog
                    visible={this.state.dialogVisibleDoczip}
                    dialogStyle={styles.dialog}
                    // title="warning"
                    onTouchOutside={() => this.setState({dialogVisibleDoczip: false})}>
                    <View style={{marginTop: -20, alignSelf: 'center'}}>
                        <Image
                            style={{width: 70, height: 70, marginBottom: 5}}
                            source={require('../../../assets/images/200mfree.png')}
                        />
                    </View>
                    <Text style={styles.textDialog}>
                        INTELLIGENT DOCUMENT COMPRESSION</Text>
                    <View style={styles.view}>
                        <Text style={[styles.textDialog, {fontFamily: 'HelveticaNeueLTStd-Md',fontSize: 18}]}>
                            This ability will be added in the next version</Text>
                        <Text style={[styles.textDialog, {
                            fontSize: 22,
                            fontFamily: 'futura-pt-bold-589e44b6aacd3',
                            letterSpacing: 2,
                        }]}>
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
    image: {
        width: 150,
        height: 150,
        borderRadius:5
    },
    touchable: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 35,
    },
    view:{
        marginTop: 5,
        borderTopWidth: 3,
        borderTopColor: '#000',
        alignSelf: 'center'
    },
    dialog: {
        backgroundColor: '#fff',
        width: 350,
        height: 270,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 8,
        borderBottomWidth: 5,
        borderLeftWidth: 2,
        borderTopWidth: 0,
        borderColor: '#000',
    },
    textDialog: {
        color: '#000',
        fontSize: 13.5,
        marginTop: 5,
        fontFamily: 'FuturaStd-Bold',
        alignSelf: 'center',
        textAlign:"center"
    },
});
