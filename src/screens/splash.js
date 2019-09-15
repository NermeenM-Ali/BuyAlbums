import React, {Component} from 'react'
import {Text, View, StatusBar,YellowBox} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as color from '../assets/colors'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen' 
import {Actions} from 'react-native-router-flux'


export default class Splash extends Component{
    Switch=()=> {
        setTimeout(()=>{
            Actions.home()
        },3000)
    }
    render() {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
          ]);
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: color.MAIN_COLOR}}>
                <StatusBar hidden/>
                <Icon name='ios-musical-notes'  style={{color: color.OTHER_COLOR, fontSize:wp(25)}}/>
                {this.Switch()}
            </View>
        )
    }
}