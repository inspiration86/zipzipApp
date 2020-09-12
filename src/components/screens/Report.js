import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
export default class DocZip extends Component {
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
                    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:10}}>
                        {/*<FontAwesomeIcon icon={faHdd} size={65} style={{color: '#000'}}/>*/}
                        <Icon
                            name='hdd-o'
                            color='#000'
                            size={90} />
                    </View>
                    <Text style={{
                        color: '#000',
                        fontSize: 25,
                        fontFamily: 'FuturaStd-Bold',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}>
                        Report</Text>
                    <View style={{width:'70%',height:180,marginHorizontal:30,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:10,backgroundColor:"#000"}}>
                        {/*<FontAwesomeIcon icon={faSdCard} size={70} style={{color: '#fff',marginRight:'60%',marginTop:-20}}/>*/}
                        {/*<FontAwesomeIcon icon={faRandom} size={65} style={{color: '#fff'}}/>*/}

                        {/*<Icon*/}
                        {/*    name='sd'*/}
                        {/*    color='#fff'*/}
                        {/*    size={25} style={{marginRight:'50%',marginTop:-20}}/>*/}
                        <Image
                            style={{width: 60, height: 45,marginRight:'50%',marginTop:-10,marginBottom:10}}
                            source={require('../../../assets/images/iconstorage.png')}
                        />
                        {/*<FontAwesomeIcon icon={faMemory} size={65} style={{color: '#fff',marginRight:'50%'}}/>*/}

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

                        <View style={{width:'90%',height:20,flexDirection:"row",marginTop:45}}>
                            <View style={{flex:5,width:40,backgroundColor:"#989898"}}>
                                <Text style={{flex:5,marginTop:-20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:10,color:"#fff",alignSelf:"center"}}>20%</Text>
                            </View>
                            <View style={{flex:7,width:40,backgroundColor:"#676767"}}>
                                <Text style={{flex:7,marginTop:-20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:10,color:"#fff",alignSelf:"center"}}>52%</Text>
                            </View>
                            <View style={{flex:2,width:40,backgroundColor:"#cbcbcb"}}>
                                <Text style={{flex:2,marginTop:-20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:10,color:"#fff",alignSelf:"center"}}>07%</Text>
                            </View>
                            <View style={{flex:3,width:40,backgroundColor:"#fff"}}>
                                <Text style={{flex:2,marginTop:-20,fontFamily: 'HelveticaNeueLTStd-Md',fontSize:9,color:"#fff",alignSelf:"center"}}>13% Free</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',marginLeft:'15%'}}>
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
                    {/*<View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:10}}>*/}
                    {/*    <Image*/}
                    {/*        style={{width: 260, height: 200}}*/}
                    {/*        source={require('../../../assets/images/storage.png')}*/}
                    {/*    />*/}
                    {/*</View>*/}
                    <View style={{marginTop:45,justifyContent:"center",alignItems:"center"}}>
                        <View style={{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60}}>
                            <View style={{flex:1,paddingHorizontal:2}}><Text style={{fontSize: 14,fontFamily: 'FuturaStd-Bold',}}>TOTAL PHOTOS</Text></View>
                            <View style={{flex:1,backgroundColor:"#000",paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"}}><Text style={{color:"#fff",fontSize: 20,fontFamily: 'FuturaStd-Bold',textAlign:"center"}}>47.3 GB</Text></View>
                        </View>
                        <View style={{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60}}>
                            <View style={{flex:1,paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"}}><Text style={{fontSize: 14,fontFamily: 'FuturaStd-Bold',}}>ZIPZIPED PHOTOS</Text></View>
                            <View style={{flex:1,backgroundColor:"#000",paddingHorizontal:2}}><Text style={{color:"#fff",fontSize: 20,fontFamily: 'FuturaStd-Bold',textAlign:"center"}}>25 GB</Text></View>
                        </View>
                    </View>

                    <View style={{marginTop:30,justifyContent:"center",alignItems:"center"}}>
                        <View style={{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60}}>
                            <View style={{flex:1,paddingHorizontal:2}}><Text style={{fontSize: 14,fontFamily: 'FuturaStd-Bold',}}>TOTAL VIDEOS</Text></View>
                            <View style={{flex:1,backgroundColor:"#000",paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"}}><Text style={{color:"#fff",fontSize: 20,fontFamily: 'FuturaStd-Bold',textAlign:"center"}}>47.3 GB</Text></View>
                        </View>
                        <View style={{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60}}>
                            <View style={{flex:1,paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"}}><Text style={{fontSize: 14,fontFamily: 'FuturaStd-Bold',}}>ZIPZIPED VIDEOS</Text></View>
                            <View style={{flex:1,backgroundColor:"#000",paddingHorizontal:2}}><Text style={{color:"#fff",fontSize: 20,fontFamily: 'FuturaStd-Bold',textAlign:"center"}}>25 GB</Text></View>
                        </View>
                    </View>

                    <View style={{marginTop:30,justifyContent:"center",alignItems:"center"}}>
                        <View style={{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60}}>
                            <View style={{flex:1,paddingHorizontal:2}}><Text style={{fontSize: 14,fontFamily: 'FuturaStd-Bold',}}>TOTAL DOCS</Text></View>
                            <View style={{flex:1,backgroundColor:"#000",paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"}}><Text style={{color:"#fff",fontSize: 20,fontFamily: 'FuturaStd-Bold',textAlign:"center"}}>47.3 GB</Text></View>
                        </View>
                        <View style={{flex:2,flexDirection:"row",borderBottomWidth:3,borderBottomColor:"#000",marginHorizontal:60}}>
                            <View style={{flex:1,paddingHorizontal:2,borderBottomWidth:2,borderBottomColor:"#fff"}}><Text style={{fontSize: 14,fontFamily: 'FuturaStd-Bold',}}>ZIPZIPED DOCS</Text></View>
                            <View style={{flex:1,backgroundColor:"#000",paddingHorizontal:2}}><Text style={{color:"#fff",fontSize: 20,fontFamily: 'FuturaStd-Bold',textAlign:"center"}}>25 GB</Text></View>
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
});
