import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
import Store from '../mobx/store'

@observer class Welcome extends Component {
    
    goToPlay() {
        this.props.navigation.navigate('Main')
    }

    render() {
        styles= StyleSheet.create({
            main:{
                backgroundColor:"black",
                flex:1
            },
            title:{
                marginTop:80,
                color:"#24BC36",
                fontSize:20,
                textAlign:"center"
            },
            button:{
                marginTop:60,
                borderWidth:1,
                backgroundColor:'black',
                width:100,
                height:50,
                margin:3,
                borderColor:"#24BC36",
                borderWidth: 4
            },
            text:{
                color:"#24BC36",
                marginTop:"auto",
                marginRight:"auto",
                marginLeft:"auto",
                marginBottom:"auto",
            },
            buttonContainer:{
                flex:1,
                flexDirection:"row",
                justifyContent:"center"
            }
        })

        return (
            <View style={styles.main}>
                <Text style={styles.title}>Tictactoe Game</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.goToPlay.bind(this)}>
                        <Text style={styles.text}>Let's Play</Text>
                    </TouchableOpacity>    
               </View>
            </View>
        )
    }
}

export default Welcome