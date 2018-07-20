import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button} from 'react-native'
import Store from '../mobx/store'

@observer class Main extends Component {
    
    render() {
        return (
            <View>
                <Text>Ini Main</Text>
            </View>
        )
    }
}

export default Main