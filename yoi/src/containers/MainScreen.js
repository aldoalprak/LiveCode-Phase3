import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Store from '../mobx/store'

@observer class Main extends Component {
    state= {
        currentValue:""
    }

    changeValue() {
         this.setState({
             currentValue:"x"
         })   
    }

    render() {
        const styles = StyleSheet.create({
            container: {
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection:'row',
              backgroundColor: '#F5FCFF',
            },
            board:{
                flexDirection:'row',
                flexWrap: 'wrap'
            },
            button:{
                padding: 5,
                width: 20,
                height: 100,
                margin: 10,
            }
          });
        return (
            <View style={styles.container}>
                <View>
                    <Button title={this.state.currentValue} onPress={this.changeValue.bind(this)} style={styles.button} />    
                    <Button title={this.state.currentValue} style={styles.button} />
                    <Button title={this.state.currentValue} style={styles.button} />
                </View>    
                <View>
                    <Button title={this.state.currentValue} style={styles.button} />
                    <Button title={this.state.currentValue}  style={styles.button}/>
                    <Button title={this.state.currentValue} style={styles.button}/>
                </View>
                <View>
                    <Button title={this.state.currentValue} style={styles.button} />
                    <Button title={this.state.currentValue}  style={styles.button}/>
                    <Button title={this.state.currentValue} style={styles.button}/>
                </View>    
                

            </View>
        )
    }
}



export default Main