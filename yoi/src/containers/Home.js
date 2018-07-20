import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button} from 'react-native'
import Store from '../mobx/store'

@observer class Home extends Component {
    
    render() {
        return (
            <View>
                <Text>{Store.state.print}</Text>
                <Button onPress={Store.tes} title="hello world"/>
            </View>
        )
    }
}
