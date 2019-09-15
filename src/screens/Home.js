import React, {Component} from 'react'
import {View} from 'react-native'
import  Header  from '../components/Header';
import AlbumList from '../components/AlbumList'
import Card from '../components/Card'

export default class Home extends Component{
    render() {
        return(
            <View style={{backgroundColor:'white', flex:1}}>
                <Header headerText={'Albums'}/>
                <AlbumList/>
                <Card/>
            </View>
        )
    }
}