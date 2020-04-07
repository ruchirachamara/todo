import React, { Component } from 'react'
// import { connect } from "react-redux"
import {
    View,
    Text,
    StatusBar,    
    ScrollView,
    SafeAreaView,
} from 'react-native'

import styles from './styles/HomeScreen.Stylesheet'

class HomeScreen extends Component {

    state = {
        toDos: []
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>      
                    <ScrollView
                        style={styles.scrollView}
                        contentInsetAdjustmentBehavior="automatic"                
                    >
                        <View style={styles.body}>      
                            
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>  
        )
    }   
}
  
export default HomeScreen