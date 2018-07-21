import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {View,Button,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
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
        currentValue9:"",

        status1:false,
        status2:false,
        status3:false,
        status4:false,
        status5:false,
        status6:false,
        status7:false,
        status8:false,
        status9:false,
    }
    
    componentDidMount() {
        // alert("hello")
        // this.setState({
        //     currentValue1:"",
        //     currentValue2:"",
        //     currentValue3:"",
        //     currentValue4:"",
        //     currentValue5:"",
        //     currentValue6:"",
        //     currentValue7:"",
        //     currentValue8:"",
        //     currentValue9:"",

        //     status1:false,
        //     status2:false,
        //     status3:false,
        //     status4:false,
        //     status5:false,
        //     status6:false,
        //     status7:false,
        //     status8:false,
        //     status9:false,
        // })
    }

    async changeValue(index) {
       
        //  let turn = 1
        //  let countX = 0 //jalan pas genap  
        //  let countY = 0 //jalan pas ganjil
         
        if(index === 1) {
            if(Store.state.turn % 2 === 0) {
               await this.setState({
                    currentValue1:"times"
                })
            }else{
                await this.setState({
                    currentValue1:"circle"
                })
            }
            this.setState({
                status1:true
            })
            Store.state.turn = Store.state.turn+1 
        }
        
        if(index === 2) {
            if(Store.state.turn % 2 === 0) {
                await this.setState({
                    currentValue2:"times"
                })
            }else{
                await this.setState({
                    currentValue2:"circle"
                })
            }
            this.setState({
                status2:true
            })
            Store.state.turn = Store.state.turn+1  
        }

        if(index === 3) {
            if(Store.state.turn % 2 === 0) {
               await this.setState({
                    currentValue3:"times"
                })
            }else{
              await this.setState({
                    currentValue3:"circle"
                })
            }
            this.setState({
                status3:true
            })
            Store.state.turn = Store.state.turn+1 
        }

        if(index === 4) {
            if(Store.state.turn % 2 === 0) {
               await this.setState({
                    currentValue4:"times"
                })
            }else{
               await this.setState({
                    currentValue4:"circle"
                })
            }
            this.setState({
                status4:true
            })
            Store.state.turn = Store.state.turn+1 
        }

        if(index === 5) {
            if(Store.state.turn % 2 === 0) {
              await this.setState({
                    currentValue5:"times"
                })
            }else{
               await this.setState({
                    currentValue5:"circle"
                })
            }
            this.setState({
                status5:true
            })
            Store.state.turn = Store.state.turn+1 
        }
        if(index === 6) {
            if(Store.state.turn % 2 === 0) {
               await this.setState({
                    currentValue6:"times"
                })
            }else{
                await this.setState({
                    currentValue6:"circle"
                })
            }
            this.setState({
                status6:true
            })
            Store.state.turn = Store.state.turn+1 
        }

        if(index === 7) {
            if(Store.state.turn % 2 === 0) {
                await this.setState({
                    currentValue7:"times"
                })
            }else{
                await this.setState({
                    currentValue7:"circle"
                })
            }
            this.setState({
                status7:true
            })
            Store.state.turn = Store.state.turn+1 
        }

        if(index === 8) {
            if(Store.state.turn % 2 === 0) {
                await this.setState({
                    currentValue8:"times"
                })
            }else{
                await this.setState({
                    currentValue8:"circle"
                })
            }
            this.setState({
                status8:true
            })
            Store.state.turn = Store.state.turn+1 
        }

        if(index === 9) {
            if(Store.state.turn % 2 === 0) {
                await this.setState({
                    currentValue9:"times"
                })
            }else{
                await this.setState({
                    currentValue9:"circle"
                })
            }
            this.setState({
                status9:true
            })
            Store.state.turn = Store.state.turn+1 
        }
        
        if(this.state.currentValue1 ==="times"&& this.state.currentValue2 ==="times" && this.state.currentValue3 ==="times") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue4 ==="times"&& this.state.currentValue5 ==="times" && this.state.currentValue6 ==="times") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue7 ==="times"&& this.state.currentValue8 ==="times" && this.state.currentValue9 ==="times") {
            this.props.navigation.navigate('GameOver')
        }

        if(this.state.currentValue1 ==="circle"&& this.state.currentValue2 ==="circle" && this.state.currentValue3 ==="circle") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue4 ==="circle"&& this.state.currentValue5 ==="circle" && this.state.currentValue6 ==="circle") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue7 ==="circle"&& this.state.currentValue8 ==="circle" && this.state.currentValue9 ==="circle") {
            this.props.navigation.navigate('GameOver')
        }
//===================vertical===========================================================================================================
        if(this.state.currentValue1 ==="circle"&& this.state.currentValue4 ==="circle" && this.state.currentValue7 ==="circle") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue2 ==="circle"&& this.state.currentValue5 ==="circle" && this.state.currentValue8 ==="circle") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue3 ==="circle"&& this.state.currentValue6 ==="circle" && this.state.currentValue9 ==="circle") {
            this.props.navigation.navigate('GameOver')
        }

        if(this.state.currentValue1 ==="times"&& this.state.currentValue4 ==="times" && this.state.currentValue7 ==="times") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue2 ==="times"&& this.state.currentValue5 ==="times" && this.state.currentValue8 ==="times") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue3 ==="times"&& this.state.currentValue6 ==="times" && this.state.currentValue9 ==="times") {
            this.props.navigation.navigate('GameOver')
        }
    //==============diagonal==============================================================================    
        if(this.state.currentValue1 ==="times"&& this.state.currentValue5 ==="times" && this.state.currentValue9 ==="times") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue3 ==="times"&& this.state.currentValue5 ==="times" && this.state.currentValue7 ==="times") {
            this.props.navigation.navigate('GameOver')
        }

        if(this.state.currentValue1 ==="circle"&& this.state.currentValue5 ==="circle" && this.state.currentValue9 ==="circle") {
            this.props.navigation.navigate('GameOver')
        }
        if(this.state.currentValue3 ==="circle"&& this.state.currentValue5 ==="circle" && this.state.currentValue7 ==="circle") {
            this.props.navigation.navigate('GameOver')
        }

        if(this.state.currentValue1.length>0 && this.state.currentValue2.length>0  && this.state.currentValue3.length>0&& this.state.currentValue4.length>0 && this.state.currentValue5.length>0 && this.state.currentValue6.length>0 && this.state.currentValue7.length>0 && this.state.currentValue8.length>0 && this.state.currentValue9.length>0) {
            this.props.navigation.navigate('GameOver')
        }
    }

    render() {
        alert("hellos")
        const styles = StyleSheet.create({
            main:{
                backgroundColor:"black",
                flex:1
            },
            container: {
                flex: 1,
                flexDirection:'row',
                alignItems:"center",
                justifyContent:"center",
                marginTop:60
            },
            content:{
                marginTop:"auto",
                marginRight:"auto",
                marginLeft:"auto",
                marginBottom:"auto",
            },
            button:{
                borderRadius:100,
                borderWidth:1,
                backgroundColor:'black',
                width:100,
                height:100,
                margin:3,
                borderColor:"#24BC36",
                borderWidth: 4
            }
          });
        return (
            <View style={styles.main}>

                 <View style={styles.container}>
                 
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,1)} 
                        disabled={this.state.status1}
                    >
                        <Icon name={this.state.currentValue1} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,2)} 
                        disabled={this.state.status2}
                    >
                        <Icon name={this.state.currentValue2} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,3)} 
                        disabled={this.state.status3}
                    >
                        <Icon name={this.state.currentValue3} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,4)} 
                        disabled={this.state.status4}
                    >
                        <Icon name={this.state.currentValue4} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,5)} 
                        disabled={this.state.status5}
                    >
                        <Icon name={this.state.currentValue5} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,6)} 
                        disabled={this.state.status6}
                    >
                        <Icon name={this.state.currentValue6} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>     
                 
                </View>

             <View style={styles.container}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,7)} 
                        disabled={this.state.status7}
                    >
                        <Icon name={this.state.currentValue7} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,8)} 
                        disabled={this.state.status8}
                    >
                        <Icon name={this.state.currentValue8} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.changeValue.bind(this,9)} 
                        disabled={this.state.status9}
                    >
                        <Icon name={this.state.currentValue9} size={70} color="#24BC36" style={styles.content}/>       
                    </TouchableOpacity>
             </View>


                {/* <View style={styles.container}>
                    <TouchableOpacity >
                    
                    <Text>hello</Text>
                    </TouchableOpacity>

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
                 */}

            </View>
        )
    }
}



export default Main