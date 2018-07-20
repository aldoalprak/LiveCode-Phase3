import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button} from 'react-native'
import Store from '../mobx/store'

@observer class Welcome extends Component {
    


    render() {
        return (
            <View>
                <Text>Ini Welcome</Text>
            </View>
        )
    }
}

export default Welcome