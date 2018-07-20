import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Store from '../mobx/store'

@observer class Main extends Component {
    constructor(props) {
        super(props)
        this.turn=1
    }
    state= {
        currentValue1:"",
        currentValue2:"",
        currentValue3:"",
        currentValue4:"",
        currentValue5:"",
        currentValue6:"",
        currentValue7:"",
        currentValue8:"",
        currentValue9:""
    }
    

    changeValue(index) {
       
        //  let turn = 1
        //  let countX = 0 //jalan pas genap  
        //  let countY = 0 //jalan pas ganjil
         
        if(index === 1) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue1:"x"
                })
            }else{
                this.setState({
                    currentValue1:"o"
                })
            }
            this.turn = this.turn+1 
        }
        
        if(index === 2) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue2:"x"
                })
            }else{
                this.setState({
                    currentValue2:"o"
                })
            }
            this.turn = this.turn+1 
        }

        if(index === 3) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue3:"x"
                })
            }else{
                this.setState({
                    currentValue3:"o"
                })
            }
            this.turn = this.turn+1
        }

        if(index === 4) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue4:"x"
                })
            }else{
                this.setState({
                    currentValue4:"o"
                })
            }
            this.turn = this.turn+1
        }

        if(index === 5) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue5:"x"
                })
            }else{
                this.setState({
                    currentValue5:"o"
                })
            }
            this.turn = this.turn+1
        }
        if(index === 6) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue6:"x"
                })
            }else{
                this.setState({
                    currentValue6:"o"
                })
            }
            this.turn = this.turn+1
        }

        if(index === 7) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue7:"x"
                })
            }else{
                this.setState({
                    currentValue7:"o"
                })
            }
            this.turn = this.turn+1
        }

        if(index === 8) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue8:"x"
                })
            }else{
                this.setState({
                    currentValue8:"o"
                })
            }
            this.turn = this.turn+1
        }

        if(index === 9) {
            if(this.turn % 2 === 0) {
                this.setState({
                    currentValue9:"x"
                })
            }else{
                this.setState({
                    currentValue9:"o"
                })
            }
            this.turn = this.turn+1
        }
        
        if(this.state.currentValue1 ==="x"&& this.state.currentValue2 ==="x" && this.state.currentValue3 ==="x") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue4 ==="x"&& this.state.currentValue5 ==="x" && this.state.currentValue6 ==="x") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue7 ==="x"&& this.state.currentValue8 ==="x" && this.state.currentValue9 ==="x") {
            this.props.navigation.navigate('GameOver')
        }

        if(this.state.currentValue1 ==="o"&& this.state.currentValue2 ==="o" && this.state.currentValue3 ==="o") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue4 ==="o"&& this.state.currentValue5 ==="o" && this.state.currentValue6 ==="o") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue7 ==="o"&& this.state.currentValue8 ==="o" && this.state.currentValue9 ==="o") {
            this.props.navigation.navigate('GameOver')
        }
//===================vertical===========================================================================================================
        if(this.state.currentValue1 ==="o"&& this.state.currentValue4 ==="o" && this.state.currentValue7 ==="o") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue2 ==="o"&& this.state.currentValue5 ==="o" && this.state.currentValue8 ==="o") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue3 ==="o"&& this.state.currentValue6 ==="o" && this.state.currentValue9 ==="o") {
            this.props.navigation.navigate('GameOver')
        }

        if(this.state.currentValue1 ==="x"&& this.state.currentValue4 ==="x" && this.state.currentValue7 ==="x") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue2 ==="x"&& this.state.currentValue5 ==="x" && this.state.currentValue8 ==="x") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue3 ==="x"&& this.state.currentValue6 ==="x" && this.state.currentValue9 ==="x") {
            this.props.navigation.navigate('GameOver')
        }
    //==============diagonal==============================================================================    
        if(this.state.currentValue1 ==="x"&& this.state.currentValue5 ==="x" && this.state.currentValue9 ==="x") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue3 ==="x"&& this.state.currentValue5 ==="x" && this.state.currentValue7 ==="x") {
            this.props.navigation.navigate('GameOver')
        }

        if(this.state.currentValue1 ==="o"&& this.state.currentValue5 ==="o" && this.state.currentValue9 ==="o") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue3 ==="o"&& this.state.currentValue5 ==="o" && this.state.currentValue7 ==="o") {
            this.props.navigation.navigate('GameOver')
        }
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
                    <Button title={this.state.currentValue1} onPress={this.changeValue.bind(this,1)} style={styles.button} />    
                    <Button title={this.state.currentValue2} onPress={this.changeValue.bind(this,2)} style={styles.button} />
                    <Button title={this.state.currentValue3} onPress={this.changeValue.bind(this,3)}style={styles.button} />
                </View>    
                <View>
                    <Button title={this.state.currentValue4} onPress={this.changeValue.bind(this,4)} style={styles.button} />
                    <Button title={this.state.currentValue5} onPress={this.changeValue.bind(this,5)} style={styles.button}/>
                    <Button title={this.state.currentValue6} onPress={this.changeValue.bind(this,6)} style={styles.button}/>
                </View>
                <View>
                    <Button title={this.state.currentValue7}  onPress={this.changeValue.bind(this,7)} style={styles.button} />
                    <Button title={this.state.currentValue8}  onPress={this.changeValue.bind(this,8)} style={styles.button}/>
                    <Button title={this.state.currentValue9} onPress={this.changeValue.bind(this,9)} style={styles.button}/>
                </View>    
                

            </View>
        )
    }
}



export default Main