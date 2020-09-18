import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProgressBar} from 'react-native-multicolor-progress-bar';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
export default class Report extends Component {
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
                    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:3}}>
                        {/*<FontAwesomeIcon icon={faHdd} size={65} style={{color: '#000'}}/>*/}
                        <Icon
                            name='hdd-o'
                            color='#000'
                            size={75} />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 22,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 5,
                    }}>
                        Report</Text>
                    {/*<FontAwesomeIcon icon={faSdCard} size={70} style={{color: '#fff',marginRight:'60%',marginTop:-20}}/>*/}
                    {/*<FontAwesomeIcon icon={faRandom} size={65} style={{color: '#fff'}}/>*/}
                    {/*<Icon*/}
                    {/*    name='sd'*/}
                    {/*    color='#fff'*/}
                    {/*    size={25} style={{marginRight:'50%',marginTop:-20}}/>*/}
                    <View style={{width:'75%',borderRadius:5,height:180,marginHorizontal:30,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:10,backgroundColor:"#000"}}>
                        <Image
                            style={{width: 60, height: 45,marginRight:'50%',marginTop:-10,marginBottom:10}}
                            source={require('../../../assets/images/iconstorage.png')}
                        />
                        <View style={{flexDirection:"row",marginLeft:20}}>
                            <View style={{flex:5}}>
                                <Text style={styles.text}>
                                    265 GB </Text>
                            </View>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.text}>
                                    Storage </Text>
                            </View>
                        </View>
                        <ProgressBar textStyle={{fontFamily: 'HelveticaNeueLTStd-Md',color:'#fff',fontSize:12,alignSelf:'center',textAlign: 'center',marginTop :-18}}
                                     parentViewStyle={{alignItems:'stretch'}}
                                     onStartProgressStyle={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}
                                     backgroundBarStyle={{alignItems:'stretch',height:20,marginHorizontal:15,marginTop: 40,borderRadius: 0,backgroundColor: '#fff'}}
                                     arrayOfProgressObjects={[
                                {
                                    color: '#676767',
                                    value: 0.4,
                                    opacity: 1,
                                    nameToDisplay: "40%"
                                },
                                {
                                    color: '#989898',
                                    value: 0.25,
                                    opacity: 1,
                                    nameToDisplay: "25%"
                                },
                                {
                                    color: '#cbcbcb',
                                    value: 0.15,
                                    opacity: 1,
                                    nameToDisplay: "15%"
                                },
                                {
                                    color: '#fff',
                                    value: 0.20,
                                    opacity: 1,
                                    nameToDisplay: "20% Free"
                                },
                            ]}
                        />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',marginLeft:'15%',marginBottom:10,marginTop:-5}}>
                        <View style={{flexDirection:"row",flex:3}}>
                            <Icon name='stop' color='#000' size={15} style={{marginTop:20,color:"#676767"}}/>
                            <Text style={{marginLeft:5,marginTop:20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:12,color:"#777"}}>Photos</Text>
                        </View>
                        <View style={{flexDirection:"row",flex:3}}>
                            <Icon name='stop' color='#000' size={15} style={{marginTop:20,color:"#cbcbcb"}}/>
                            <Text style={{marginLeft:5,marginTop:20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:12,color:"#777"}}>Videos</Text>
                        </View>
                        <View style={{flexDirection:"row",flex:3}}>
                            <Icon name='stop' color='#000' size={15} style={{marginTop:20,color:"#cbcbcb"}}/>
                            <Text style={{marginLeft:5,marginTop:20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:12,color:"#777"}}>Docs</Text>
                        </View>
                    </View>
                    <View style={styles.reportContainer}>
                        <View style={styles.result}>
                            <View style={styles.photo}><Text style={[styles.textTable,{color:'#000',fontSize:13}]}>TOTAL PHOTOS</Text></View>
                            <View style={styles.volume}><Text style={styles.textTable}>47.3 GB</Text></View>
                        </View>
                        <View style={styles.result}>
                            <View style={styles.photo}><Text style={[styles.textTable,{color:'#000',fontSize:13}]}>ZIPZIPED PHOTOS</Text></View>
                            <View style={styles.volume}><Text style={styles.textTable}>25 GB</Text></View>
                        </View>
                    </View>
                    <View style={styles.reportContainer}>
                        <View style={styles.result}>
                            <View style={styles.photo}><Text style={[styles.textTable,{color:'#000',fontSize:13}]}>TOTAL VIDEOS</Text></View>
                            <View style={styles.volume}><Text style={styles.textTable}>47.3 GB</Text></View>
                        </View>
                        <View style={styles.result}>
                            <View style={styles.photo}><Text style={[styles.textTable,{color:'#000',fontSize:13}]}>ZIPZIPED VIDEOS</Text></View>
                            <View style={styles.volume}><Text style={styles.textTable}>25 GB</Text></View>
                        </View>
                    </View>
                    <View style={styles.reportContainer}>
                        <View style={styles.result}>
                            <View style={styles.photo}><Text style={[styles.textTable,{color:'#000',fontSize:13}]}>TOTAL DOCS</Text></View>
                            <View style={styles.volume}><Text style={styles.textTable}>47.3 GB</Text></View>
                        </View>
                        <View style={styles.result}>
                            <View style={styles.photo}><Text style={[styles.textTable,{color:'#000',fontSize:13}]}>ZIPZIPED DOCS</Text></View>
                            <View style={styles.volume}><Text style={styles.textTable}>25 GB</Text></View>
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
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'HelveticaNeueLTStd-Md',
        marginHorizontal:20
    },
    reportContainer:{marginTop:30,justifyContent:"center",alignItems:"center",marginBottom:5},
    textTable:{color:"#fff",fontSize: 18,fontFamily: 'FuturaStd-Bold',textAlign:"center",padding:5},
    result:{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60},
    photo:{flex:1,paddingHorizontal:2},
    volume:{borderRadius:3,flex:1,backgroundColor:"#000",paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"},

});
