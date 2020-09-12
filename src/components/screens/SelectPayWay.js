import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, Button,
} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
export default class SelectPayWay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card style={styles.card}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                            <View style={{flexDirection: 'row', marginLeft: 10}}>

                                <Icon
                                    name='arrow-left'
                                    color='#fff'
                                    size={22} style={{marginLeft: 10}}/>

                            </View>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            marginTop: 50,
                            fontSize: 35,
                            color: '#fff',
                            fontFamily: 'futura-pt-bold-589e44b6aacd3',
                        }}>
                            $ 5.99
                        </Text>
                    </Card>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 30,
                        marginTop: -30,
                        color: '#000',
                        fontFamily: 'futura-pt-bold-589e44b6aacd3',
                    }}>
                        Choose your card
                    </Text>
                    <View style={{marginTop: 30}}>
                        <Divider style={styles.divider}/>

                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 5, marginTop: 10}}>
                                <Icon
                                    name='cc-visa'
                                    color='#000'
                                    size={60} style={{marginLeft: 25}}/>
                            </View>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    continue </Text>
                            </View>
                        </View>
                        <Divider style={styles.divider}/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 5, marginTop: 10}}>
                                <Icon
                                    name='cc-paypal'
                                    color='#000'
                                    size={60} style={{marginLeft: 25}}/>
                            </View>
                            {/*<TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('BuyPicZipPremiumSuccess')}>*/}
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    continue </Text>
                            </View>
                            {/*</TouchableOpacity>*/}
                        </View>
                        <Divider style={styles.divider}/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 5, marginTop: 10}}>
                                <Icon
                                    name='cc-mastercard'
                                    color='#000'
                                    size={60} style={{marginLeft: 25}}/>
                            </View>
                            {/*<TouchableOpacity activeOpacity={0.92} onPress={() => this.props.navigation.navigate('BuyPicZipClassicSuccess')}>*/}
                            <View style={styles.buttonStyle}>
                                <Text style={styles.textButton}>
                                    continue </Text>
                            </View>
                            {/*</TouchableOpacity>*/}
                        </View>
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
    card: {
        width: '101%',
        height: 230,
        backgroundColor: '#000',
        marginBottom: 50,
    },
    buttonStyle: {
        flex: 2,
        backgroundColor: '#000',
        height: 55,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginRight: 20,
        padding: 5,
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'FuturaStd-Bold',
        textAlign: 'center',
    },
    divider: {height: 3, width: '90%', marginVertical: 5, marginHorizontal: 20, backgroundColor: '#000'},


});
