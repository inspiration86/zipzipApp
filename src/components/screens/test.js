// import React from "react";
// import { TouchableHighlight, Text, View, StyleSheet } from "react-native";
// export default class TouchableButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             btnpressed: false,
//         };
//     }
//     render() {
//         const touchBtn = {
//          underlayColor: 'blue',
//          style: this.state.btnpressed ? styles.btnPress :styles.button,
//          onHideUnderlay: () => this.setState({btnpressed:false}),
//          onShowUnderlay: () => this.setState({btnpressed:true}),
//          onPress: () => console.log('HELLO'),
//      };
//         return (
//             <View style={{marginTop:50}}>
//             <TouchableHighlight {...touchBtn}>
//                 <Text style={{color:"blue",alignSelf:"center"}}>Button</Text>
//             </TouchableHighlight>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     button: {
//         padding: 10,
//         borderColor: "blue",
//         borderWidth: 2,
//         marginHorizontal:20
//     },
//     btnPress: {
//         borderWidth: 2,
//         padding: 10,
//         marginHorizontal:20,
//         opacity:0.8
//     }
// });

//
// import React from 'react';
// import { TouchableHighlight, View, Text, StyleSheet ,ImageBackground,Button} from 'react-native';
// export default class Dots extends React.Component {
//     render() {
//         return (
//             <ImageBackground style={styles.container}  source={require('../../../assets/images/docExt.png')}>
//                 <Button title='play' style = {{color:'red'}}/>
//             </ImageBackground>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor:'#000',
//         resizeMode:'cover',
//         justifyContent:'center',
//         alignItems:'center',
//         width:null,
//         height:null
//     },
//
//     button:{
//         backgroundColor:'#555',
//     }
//
// });

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
//
// export default class App extends Component {
//     state={
//         btnpressed:false
//     };
// change(){
//     this.setState({btnpressed:true})
// }
//     Unchange(){
//         this.setState({btnpressed:false})
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableOpacity
//                     style={{backgroundColor:this.state.btnpressed ?'blue' :'#fff',borderColor:this.state.btnpressed ?'#555' :'blue',borderWidth:this.state.btnpressed ?0 :2,
//                         padding: 15}}
//                     onPress={()=>this.change()}>
//                     <Text style={{color:this.state.btnpressed ?'#fff' :'blue'}}>Change Color!</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
// });

import React from "react";
import { TouchableHighlight, Text, Alert, StyleSheet } from "react-native";

export default class TouchableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    }
    render() {
        return (
            <TouchableHighlight
                onPress={() => {
                    // Alert.alert(
                    //     `You clicked this button`,
                    //     'Hello World！',
                    //     [
                    //         {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    //         {text: 'OK', onPress: () => console.log('OK Pressed')},
                    //     ]
                    // )
                }}
                style={[
                    styles.button,
                    this.state.pressed ? { backgroundColor: "green" } : {}
                ]}
                onHideUnderlay={() => {
                    this.setState({ pressed: false });
                }}
                onShowUnderlay={() => {
                    this.setState({ pressed: true });
                }}
            >
                <Text>Button</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5
    }
});
