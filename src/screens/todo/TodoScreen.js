import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TextInput,
    StatusBar,    
    ScrollView,
    SafeAreaView,
    AsyncStorage,
    TouchableOpacity
} from 'react-native'

import { submitForTodo } from '../../actions/todoActions'

import styles from './styles/TodoScreen.Stylesheet.js'

class TodoScreen extends Component {

    state = {
        item: "",
        userId: "",
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', route => { this.retrieveUserId() })
    }

    retrieveUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId')
            if (userId !== null) {
                this.setState({ userId })              
            }
        } catch (error) {
            console.log(error)            
        }
    }

    updateFormHandler = value => this.setState({ "item": value })  

    formSubmitHandler = _ => {
        const { item, userId } = this.state
        if (item) {  
            this.props.submitForTodo(item, userId).then(data => {
                if (data) {
                    this.props.navigation.navigate("Home")
                }
            }).catch(error => alert(error.message))                
        }
    } 

    render() {
        const { item } = this.state
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                                                     
                    <ScrollView
                        style={styles.scrollView}
                        contentInsetAdjustmentBehavior="automatic"                
                    >
                        <View style={styles.body}>      
                            <Text style={styles.formTextHeader}>{'Todo Form'}</Text>    
                            <View style={styles.textWrapperContainer}>
                                <TextInput placeholder={'Item Name'} style={styles.textInputStyle} onChangeText={text => this.updateFormHandler(text)} value={item} />
                            </View> 
                            <View>
                                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => this.formSubmitHandler()}>
                                    <View style={[item ? styles.defaultButtonTextStyle : styles.disabledBtnStyle]}>
                                        <Text style={[item ? styles.defaultButtonTextStyle : styles.disabledBtnTextStyle]}>{'Submit'}</Text>
                                    </View>
                                </TouchableOpacity> 
                            </View>                             
                        </View>   
                    </ScrollView>
                </SafeAreaView>
            </>  
        )
    }   
}

const mapStateToProps = ({ todo }) => ({    
    loading: todo.loading,      
})
  
const mapDispatchToProps = dispatch => ({
    submitForTodo: (item, userId) => dispatch(submitForTodo(item, userId)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen)