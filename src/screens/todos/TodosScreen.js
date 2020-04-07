import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StatusBar,    
    ScrollView,
    SafeAreaView,
    AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { fetchToDoItems, removeToDoItem } from '../../actions/todoActions'

import styles from './styles/TodosScreen.Stylesheet.js'

class TodosScreen extends Component {

    state = {
        todos: [],
        userId: "",
    }

    componentDidMount() {        
        this.props.navigation.addListener('willFocus', route => { 
            this.retrieveUserId() 
            this.props.fetchToDoItems().then(todos => this.setState({ todos }))
        })
    }

    retrieveUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId')
            this.setState({ userId }, () => {
                this.props.fetchToDoItems().then(todos => this.setState({ todos }))
            })              
        } catch (error) {
            console.log(error)            
        }
    }

    deleteSelectedItem = (itemId, item, userId) => {
        this.props.removeToDoItem(itemId, item, userId).then(data => {
            if (data) {
                this.props.fetchToDoItems().then(todos => this.setState({ todos }))
            }
        })
    }
   
    render() {
        const { todos, userId } = this.state
        if (!todos) return
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                                                     
                    <ScrollView
                        style={styles.scrollView}
                        contentInsetAdjustmentBehavior="automatic"                
                    >
                        <View style={styles.body}>      
                            {(todos && todos.length > 0) && todos.map(eachItem => {
                                if (eachItem.item.userId == userId) {
                                    return (
                                        <View style={styles.eachItemContentWrapper}>
                                            <View>
                                                <Text style={styles.defaultTextStyle}>{eachItem.item.item}</Text>
                                            </View>
                                            <View>
                                                <Icon onPress={() => this.deleteSelectedItem(eachItem.key, eachItem.item.item, eachItem.item.userId)} name="x-circle" size={25} color={'#fff'} />
                                            </View>                                    
                                        </View>                                                        
                                    )    
                                } else {
                                    return null
                                }
                            })}
                        </View>   
                    </ScrollView>
                </SafeAreaView>
            </>  
        )
    }   
}

const mapStateToProps = ({ todo }) => ({    
    todos: todo.todos,  
    loading: todo.loading,      
})
  
const mapDispatchToProps = dispatch => ({
    fetchToDoItems: _ => dispatch(fetchToDoItems()),
    removeToDoItem: (itemId, item, userId) => dispatch(removeToDoItem(itemId, item, userId))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(TodosScreen)