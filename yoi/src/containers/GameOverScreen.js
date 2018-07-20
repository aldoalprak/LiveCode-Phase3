import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button} from 'react-native'
import Store from '../mobx/store'

@observer class GameOver extends Component {
    
    render() {
        return (
            <View>
                <Text>Ini GameOver</Text>
            </View>
        )
    }
}

export default GameOver