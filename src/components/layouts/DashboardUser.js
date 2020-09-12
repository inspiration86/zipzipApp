import {Image, View, Button, StyleSheet, ScrollView, Text, ImageBackground, StatusBar} from "react-native";
import {createDrawerNavigator, DrawerItems,DrawerActions} from 'react-navigation-drawer';
import {createAppContainer,} from 'react-navigation';
import React from "react";
import { Divider } from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faAward,
    faBalanceScale,
    faBars,
    faBell, faCalculator, faCalendarPlus, faCartPlus, faChartPie, faChevronCircleDown, faChevronCircleLeft, faCoins,
    faComment, faConciergeBell,
    faCreditCard, faDollyFlatbed,
    faEdit, faExternalLinkAlt, faFileContract, faFolderOpen,
    faFunnelDollar, faHandsHelping, faHdd,
    faHome, faIcons, faImage, faImages,
    faLayerGroup,
    faListAlt, faListOl, faMobile, faMobileAlt,
    faMoneyBill,
    faPhone,
    faPlusCircle,
    faRubleSign, faSave, faShareAlt, faShoppingBasket,
    faSign,
    faSignOutAlt,
    faSkiing, faStore,
    faTasks,
    faUser, faUserCog, faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {Body, Footer, Header, Left, Right} from "native-base";
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Share from '../screens/Share';
import Help from '../screens/Help';
import AboutUs from '../screens/AboutUs';
import Report from '../screens/Report';
import Store from '../screens/Store';
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomDrawerComponent = props => (
    <View style={{flex: 1, backgroundColor: '#000',}}>
        <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                   backgroundColor={'#000'}
                   barStyle="light-content" />
        <Header style={styles.container}>
            <View style={{marginLeft:150,marginTop:50}}>
                <Icon
                  // onPress={this.props.navigation.closeDrawer()}
                    name='bars'
                    color='#fff'
                    size={25} />
            </View>
        </Header>

            <View style={{backgroundColor:'#000',flex:1}}>
                <ScrollView>
                <DrawerItems {...props} />
                </ScrollView>
            </View>

        <Footer style={styles.containerfooter}>
            <View style={{flexDirection: 'row-reverse', flex: 1,paddingHorizontal:10}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end',marginHorizontal:20}}>
                    <FontAwesomeIcon color={'#fff'} icon={faSignOutAlt} style={styles.containericon}/>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={styles.textMenu}>Exit</Text>
                </View>
            </View>
        </Footer>
    </View>
);
const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    containerfooter: {
    backgroundColor: '#000',
    },
    viewMenu:{flex: 1, flexDirection: 'row',backgroundColor:'#000',height:55,justifyContent:'center',alignItems:'center'},
    textMenu:{fontFamily:'HelveticaNeueLTStd-Md',fontSize: 16, color: '#fff',textAlign:'right',marginRight:30}
});

const CustomerMyDrawerNavigator = createDrawerNavigator({
        'صفحه اصلی': {
            screen: Home,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>Home</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faHome} size={25} style={{color: '#fff'}}/>
                        </View>
                        <Divider/>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'لیست': {
            screen: Profile,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>Profile</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Icon
                                name='user-o'
                                color='#fff'
                                size={28}  style={{marginRight:15}}/>
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'result': {
            screen: Report,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>Result</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faImages} size={30} style={{color: '#fff'}}/>
                            {/*<Icon*/}
                            {/*    name='file-zip-o'*/}
                            {/*    color='#fff'*/}
                            {/*    size={30} />*/}
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'report': {
            screen: Report,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>Report</Text>
                        </View>
                        <View style={{flex: 2}}>
                            {/*<FontAwesomeIcon icon={faHdd} size={28} style={{color: '#fff'}}/>*/}
                            <Icon
                                name='hdd-o'
                                color='#fff'
                                size={32} />
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'store': {
            screen: Store,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>Store</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Icon
                                name='shopping-bag'
                                color='#fff'
                                size={25}  style={{marginRight:15}}/>
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'help': {
            screen: Help,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>Help</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Icon
                                name='question-circle-o'
                                color='#fff'
                                size={30}  style={{marginRight:15}}/>
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'aboutus': {
            screen: AboutUs,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>About</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Icon
                                name='info-circle'
                                color='#fff'
                                size={30}  style={{marginRight:15}}/>
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'share': {
            screen: Share,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>Share</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faShareAlt} size={25} style={{color: '#fff'}}/>
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
    },
    {
        drawerPosition: 'right',
        drawerWidth: 230,
        initialRouteName:'صفحه اصلی',
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#000',
            activeBackgroundColor: '#000',
            inactiveBackgroundColor: '#000',
            itemsContainerStyle: {
                backgroundColor:'#000',
            },
            labelStyle: {
                fontSize: 15,
                fontFamily:'futura-pt-bold-589e44b6aacd3',
            },
            itemStyle: {
                height: 55,
                justifyContent: 'center',
            },
        },
    });

export default createAppContainer(CustomerMyDrawerNavigator);



// import {Image, View, Button, StyleSheet, ScrollView, Text, ImageBackground, StatusBar} from "react-native";
// import {createDrawerNavigator, DrawerItems,DrawerActions} from 'react-navigation-drawer';
// import {createAppContainer,} from 'react-navigation';
// import React from "react";
// import { Divider } from 'react-native-elements';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {
//     faAward,
//     faBalanceScale,
//     faBars,
//     faBell, faCalculator, faCalendarPlus, faCartPlus, faChartPie, faChevronCircleDown, faChevronCircleLeft, faCoins,
//     faComment, faConciergeBell,
//     faCreditCard, faDollyFlatbed,
//     faEdit, faExternalLinkAlt, faFileContract, faFolderOpen,
//     faFunnelDollar, faHandsHelping, faHdd,
//     faHome, faIcons, faImage, faImages,
//     faLayerGroup,
//     faListAlt, faListOl, faMobile, faMobileAlt,
//     faMoneyBill,
//     faPhone,
//     faPlusCircle,
//     faRubleSign, faSave, faShareAlt, faShoppingBasket,
//     faSign,
//     faSignOutAlt,
//     faSkiing, faStore,
//     faTasks,
//     faUser, faUserCog, faUsers,
// } from '@fortawesome/free-solid-svg-icons';
// import {Body, Footer, Header, Left, Right} from "native-base";
// import Profile from '../screens/Profile';
// import Home from '../screens/Home';
// import Share from '../screens/Share';
// import Help from '../screens/Help';
// import AboutUs from '../screens/AboutUs';
// import Report from '../screens/Report';
// import Store from '../screens/Store';
// import Icon from 'react-native-vector-icons/FontAwesome';
// const CustomDrawerComponent = props => (
//     <View style={{flex: 1, backgroundColor: '#000',}}>
//         <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
//                    backgroundColor={'#000'}
//                    barStyle="light-content" />
//         <Header style={styles.container}>
//             <View style={{marginLeft:150,marginTop:50}}>
//                 <Icon
//                     // onPress={this.props.navigation.closeDrawer()}
//                     name='bars'
//                     color='#000'
//                     size={25} />
//             </View>
//         </Header>
//
//         <View style={{backgroundColor:'#fff',flex:1}}>
//             <ScrollView>
//                 <DrawerItems {...props} />
//             </ScrollView>
//         </View>
//
//         <Footer style={styles.containerfooter}>
//             <View style={{flexDirection: 'row-reverse', flex: 1,paddingHorizontal:10}}>
//                 <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end',marginHorizontal:20}}>
//                     <FontAwesomeIcon color={'#000'} icon={faSignOutAlt} style={styles.containericon}/>
//                 </View>
//                 <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
//                     <Text style={styles.textMenu}>Exit</Text>
//                 </View>
//             </View>
//         </Footer>
//     </View>
// );
// const styles = StyleSheet.create({
//     container: {
//         height: 120,
//         backgroundColor: '#fff',
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     containerfooter: {
//         backgroundColor: '#fff',
//     },
//     viewMenu:{flex: 1, flexDirection: 'row',backgroundColor:'#fff',height:55,justifyContent:'center',alignItems:'center'},
//     textMenu:{fontFamily:'HelveticaNeueLTStd-Md',fontSize: 16, color: '#000',textAlign:'right',marginRight:30}
// });
//
// const CustomerMyDrawerNavigator = createDrawerNavigator({
//         'صفحه اصلی': {
//             screen: Home,
//             navigationOptions: {
//                 headerShown: false,
//                 drawerLabel: (
//                     <View style={styles.viewMenu}>
//                         <View style={{flex: 9}}>
//                             <Text style={styles.textMenu}>Home</Text>
//                         </View>
//                         <View style={{flex: 2}}>
//                             <FontAwesomeIcon icon={faHome} size={25} style={{color: '#000'}}/>
//                         </View>
//                         <Divider/>
//                     </View>
//                 ),
//             },
//             contentOptions: {
//                 activeTintColor: '#fff',
//             }
//         },
//         'لیست': {
//             screen: Profile,
//             navigationOptions: {
//                 headerShown: false,
//                 drawerLabel: (
//                     <View style={styles.viewMenu}>
//                         <View style={{flex: 9}}>
//                             <Text style={styles.textMenu}>Profile</Text>
//                         </View>
//                         <View style={{flex: 2}}>
//                             <Icon
//                                 name='user'
//                                 color='#000'
//                                 size={30}  style={{marginRight:15}}/>
//                         </View>
//                     </View>
//                 ),
//             },
//             contentOptions: {
//                 activeTintColor: '#fff',
//             }
//         },
//         'result': {
//             screen: Report,
//             navigationOptions: {
//                 headerShown: false,
//                 drawerLabel: (
//                     <View style={styles.viewMenu}>
//                         <View style={{flex: 9}}>
//                             <Text style={styles.textMenu}>Result</Text>
//                         </View>
//                         <View style={{flex: 2}}>
//                             <FontAwesomeIcon icon={faImages} size={28} style={{color: '#000'}}/>
//
//                         </View>
//                     </View>
//                 ),
//             },
//             contentOptions: {
//                 activeTintColor: '#fff',
//             }
//         },
//         'report': {
//             screen: Report,
//             navigationOptions: {
//                 headerShown: false,
//                 drawerLabel: (
//                     <View style={styles.viewMenu}>
//                         <View style={{flex: 9}}>
//                             <Text style={styles.textMenu}>Report</Text>
//                         </View>
//                         <View style={{flex: 2}}>
//                             <FontAwesomeIcon icon={faHdd} size={28} style={{color: '#000'}}/>
//                         </View>
//                     </View>
//                 ),
//             },
//             contentOptions: {
//                 activeTintColor: '#fff',
//             }
//         },
//         'store': {
//             screen: Store,
//             navigationOptions: {
//                 headerShown: false,
//                 drawerLabel: (
//                     <View style={styles.viewMenu}>
//                         <View style={{flex: 9}}>
//                             <Text style={styles.textMenu}>Store</Text>
//                         </View>
//                         <View style={{flex: 2}}>
//                             <Icon
//                                 name='shopping-bag'
//                                 color='#000'
//                                 size={25}  style={{marginRight:15}}/>
//                         </View>
//                     </View>
//                 ),
//             },
//             contentOptions: {
//                 activeTintColor: '#fff',
//             }
//         },
//         'help': {
//             screen: Help,
//             navigationOptions: {
//                 headerShown: false,
//                 drawerLabel: (
//                     <View style={styles.viewMenu}>
//                         <View style={{flex: 9}}>
//                             <Text style={styles.textMenu}>Help</Text>
//                         </View>
//                         <View style={{flex: 2}}>
//                             <Icon
//                                 name='question-circle-o'
//                                 color='#000'
//                                 size={30}  style={{marginRight:15}}/>
//                         </View>
//                     </View>
//                 ),
//             },
//             contentOptions: {
//                 activeTintColor: '#fff',
//             }
//         },
//         'aboutus': {
//             screen: AboutUs,
//             navigationOptions: {
//                 headerShown: false,
//                 drawerLabel: (
//                     <View style={styles.viewMenu}>
//                         <View style={{flex: 9}}>
//                             <Text style={styles.textMenu}>About</Text>
//                         </View>
//                         <View style={{flex: 2}}>
//                             <Icon
//                                 name='info-circle'
//                                 color='#000'
//                                 size={30}  style={{marginRight:15}}/>
//                         </View>
//                     </View>
//                 ),
//             },
//             contentOptions: {
//                 activeTintColor: '#fff',
//             }
//         },
//         'share': {
//             screen: Share,
//             navigationOptions: {
//                 headerShown: false,
//                 drawerLabel: (
//                     <View style={styles.viewMenu}>
//                         <View style={{flex: 9}}>
//                             <Text style={styles.textMenu}>Share</Text>
//                         </View>
//                         <View style={{flex: 2}}>
//                             <FontAwesomeIcon icon={faShareAlt} size={25} style={{color: '#000'}}/>
//                         </View>
//                     </View>
//                 ),
//             },
//             contentOptions: {
//                 activeTintColor: '#fff',
//             }
//         },
//     },
//     {
//         drawerPosition: 'right',
//         drawerWidth: 230,
//         initialRouteName:'صفحه اصلی',
//         // drawerType:"slide",
//         //drawerType:"underlay",
//         contentComponent: CustomDrawerComponent,
//         contentOptions: {
//             activeTintColor: '#fff',
//             inactiveTintColor: '#fff',
//             activeBackgroundColor: '#fff',
//             inactiveBackgroundColor: '#fff',
//             itemsContainerStyle: {
//                 backgroundColor:'#fff',
//               //  borderRadius:10,
//
//             },
//             labelStyle: {
//                 fontSize: 15,
//                 fontFamily:'futura-pt-bold-589e44b6aacd3',
//             },
//             itemStyle: {
//                 height: 55,
//                 justifyContent: 'center',
//             },
//
//         },
//     });
//
// export default createAppContainer(CustomerMyDrawerNavigator);
