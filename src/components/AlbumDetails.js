import React from 'react'
import {Text , View, Image, Linking} from 'react-native'
import {Thumbnail} from 'native-base'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import * as color from '../assets/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const AlbumDetails =(props)=> {
    const {title, artist, thumbnail_image, image, url} = props.albumData
        return(
            <Card>
                <CardSection>
                    <View>
                        <Thumbnail source={{uri:thumbnail_image}} large/>
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'space-around', marginLeft:wp(5)}}>
                        <Text style={{color:color.MAIN_COLOR, fontSize:wp(5), fontWeight:'bold'}}>{title}</Text>
                        <Text style={{color:'black', fontSize:wp(4)}}>{artist}</Text>
                    </View>
                </CardSection>
                

                <CardSection>
                    <Image source={{uri: image}} style={{width:null, height:hp(50), flex:1}}/>
                </CardSection>

                <CardSection>
                    <Button buttonText={'Buy Now'} onPressBtn={()=> {
                        Linking.openURL(url).catch(error=> alert(error.message))
                    }}/>
                </CardSection>
            </Card>
        )
}

export default AlbumDetails
