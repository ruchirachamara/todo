import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,    
    SafeAreaView,
    AsyncStorage,
    TouchableOpacity
} from 'react-native'

import styles from './styles/MainScreen.Stylesheet.js'

export default class MainScreen extends Component {
   
    state = {
        userId: ""
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', route => { this.retrieveUserId() })
    }

    retrieveUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId')
            if (userId !== null) {
                this.setState({ userId })
                this.props.navigation.navigate("Home")                            
            }
        } catch (error) {
            alert(error)
            console.log(error)            
        }
    }

    redirectToGivenPage = pageId => this.props.navigation.navigate(pageId)

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                                                     
                    <View style={styles.body}>      
                        <TouchableOpacity onPress={() => this.redirectToGivenPage('SignUp')}>
                            <View style={styles.defaultButtonStyle}>
                                <Text style={styles.defaultButtonTextStyle}>{'Register Here'}</Text>
                            </View>
                        </TouchableOpacity>                            
                        <TouchableOpacity onPress={() => this.redirectToGivenPage('Login')}>
                            <View style={styles.defaultButtonStyle}>
                                <Text style={styles.defaultButtonTextStyle}>{'Login'}</Text>
                            </View>
                        </TouchableOpacity>                            
                    </View>                                        
                </SafeAreaView>
            </>  
        )
    }   
}