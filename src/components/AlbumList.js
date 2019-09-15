import React, {Component} from 'react'
import {Text, View, ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetails from './AlbumDetails'
import {heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export default class AlbumList extends Component {
    constructor() {
        super()
        this.state={
            albums: []
        }
    }
    
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response)=> this.setState({albums: response.data}) )
    }

    renderAlbumList=()=> {
     return this.state.albums.map(album => 
            <AlbumDetails albumData={album} key={album.title} />
        )
    }
    render() {
        console.log(this.state)
        return(
            <View style={{flex:1}}>
                <ScrollView>
                    {this.renderAlbumList()}
                </ScrollView> 
            </View>
        )
    }
}