import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import * as color from '../assets/colors'

const Button =(props)=>{
    const {textStyle, buttonStyle} = styles
    return(
        <TouchableOpacity style={buttonStyle} 
                          onPress={props.onPressBtn}  
        >
            <Text style={textStyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles=StyleSheet.create({
    textStyle: {
        fontSize: wp(6),
        color: color.MAIN_COLOR,
        fontWeight:'500',
        alignSelf:'center',
        paddingHorizontal:wp(2),
        paddingVertical:hp(2)
    },
    buttonStyle: {
        flex:1,
        alignSelf:'stretch', //ya3nii el button nfso lakn alignItems da 34an el position bta3 el 7aga eli gwa el component el childrens bto3o ya3nii
        backgroundColor:'#fff',
        borderRadius:wp(25),
        borderColor: color.MAIN_COLOR,
        borderWidth:wp(0.3),
        marginHorizontal:wp(3),
        
    }
})