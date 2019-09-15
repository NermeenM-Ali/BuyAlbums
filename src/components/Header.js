import React, {Component} from 'react'
import {Text, View, StatusBar, StyleSheet} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as color from '../assets/colors'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {textStyle, viewStyle} = styles
        const {headerText} = this.props
        return (
            <View style={viewStyle}>
                <StatusBar hidden/>
                <Text style={textStyle}>{headerText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: color.MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(8),
        padding:hp(2),
        shadowColor:'#000',
        shadowOffset: {width:0, height: 5},
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative'
    },
    textStyle: {
        fontSize: wp(6),
        color:color.OTHER_COLOR,
        
    }
})
