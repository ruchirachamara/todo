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

import { fetchArchivedToDoItems } from '../../actions/todoActions'

import styles from './styles/ArchivedScreen.Stylesheet.js'

class ArchivedScreen extends Component {

    state = {
        archivedTodos: [],
        userId: "",
    }

    componentDidMount() {        
        this.props.navigation.addListener('willFocus', route => { 
            this.retrieveUserId() 
            this.props.fetchArchivedToDoItems().then(archivedTodos => this.setState({ archivedTodos }))
        })
    }

    retrieveUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId')
            this.setState({ userId }, () => {
                this.props.fetchArchivedToDoItems().then(archivedTodos => this.setState({ archivedTodos }))
            })              
        } catch (error) {
            console.log(error)            
        }
    }

    render() {
        const { archivedTodos, userId } = this.state
        if (!archivedTodos) return
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                                                     
                    <ScrollView
                        style={styles.scrollView}
                        contentInsetAdjustmentBehavior="automatic"                
                    >
                        <View style={styles.body}>      
                            {(archivedTodos && archivedTodos.length > 0) && archivedTodos.map(eachItem => {
                                if (eachItem.item.userId == userId) {
                                    return (
                                        <View style={styles.eachItemContentWrapper}>
                                            <View>
                                                <Text style={styles.defaultTextStyle}>{eachItem.item.item}</Text>
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
    fetchArchivedToDoItems: _ => dispatch(fetchArchivedToDoItems()),
    removeToDoItem: (itemId, item, userId) => dispatch(removeToDoItem(itemId, item, userId))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ArchivedScreen)