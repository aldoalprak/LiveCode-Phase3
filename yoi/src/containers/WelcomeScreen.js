import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button,Text} from 'react-native'
import Store from '../mobx/store'

@observer class Welcome extends Component {
    
    goToPlay() {
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <View>
                <Text>Ini Welcomesasdas</Text>
                <Text>Ini Welcomesaasas</Text>
                <Button title="Play" onPress={this.goToPlay.bind(this)}/>
            </View>
        )
    }
}

export default Welcome