import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,    
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

import styles from './styles/AboutScreen.Stylesheet.js'

export default class AboutScreen extends Component {
   
    redirectToGivenPage = pageId => this.props.navigation.navigate(pageId)

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
                            <View>
                                    <Text style={[styles.defaultTextStyle, styles.extraLargeFont]}>{'This is just a test application and now you are in the about us screen!'}</Text>    
                            </View>                            
                            <View>
                                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => this.redirectToGivenPage('Home')}>
                                    <View style={styles.defaultButtonTextStyle}>
                                        <Text style={styles.defaultButtonTextStyle}>{'Back to Home'}</Text>
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