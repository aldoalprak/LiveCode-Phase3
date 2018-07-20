import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button,Text} from 'react-native'
import Store from '../mobx/store'

@observer class GameOver extends Component {
    goToPlay() {
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <View>
                <Text>Ini GameOver</Text>
                <Button title="Play Again" onPress={this.goToPlay.bind(this)}/>
            </View>
        )
    }
}

export default GameOver