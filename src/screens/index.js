import React, {Component} from 'react'
import {Scene, Stack, Router} from 'react-native-router-flux'
import Splash from './splash'
import Home from './Home'

export default class App extends Component {
    render() {
        return(
            <Router>
                <Stack key='root'>
                    <Scene key='splash' component={Splash} initial hideNavBar/>
                    <Scene key='home' component={Home}  hideNavBar/>
                </Stack>
            </Router>
        )
    }
}
