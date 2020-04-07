import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,    
    TextInput,
    AsyncStorage,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'

import { authLogin, loginFormUpdate, sendRegisterClearForm } from '../../actions/authActions'

import styles from './styles/LoginScreen.Stylesheet.js'

class LoginScreen extends Component {

    state = {
        userId: "",
        password: "",
        emailAddress: "",        
        emailRule: new RegExp(/[^@]+@[^\.]+\..+/g)    
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', route => { this.retrieveUserId() })
    }

    redirectToGivenPage = pageId => this.props.navigation.navigate(pageId)
    
    retrieveUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId')
            if (userId !== null) {
                this.props.navigation.navigate("Home")                
            } else {
                this.setState({ userId })
            }
        } catch (error) {
            console.log(error)            
        }
    }

    storeUserId = async (userId) => {
        try {
            this.setState({ userId: "" })
            await AsyncStorage.setItem('userId', userId)
        } catch (error) {
            console.log(error)            
        }
    }

    updateFormHandler = (field, value) => {
        const valueConverted = value.toLowerCase()        
        this.setState({ [field]: valueConverted })    
        this.props.loginFormUpdate([field], valueConverted)
    }

    formSubmitHandler = _ => {
        const { password, emailAddress } = this.props
        this.props.submitEmailAndPasswordForAuthLogin(emailAddress, password).then(userData => {
            if (userData.data.user.uid) {
                this.setState({ password: "", emailAddress: "" })   
                this.props.clearForm()
                this.storeUserId(userData.data.user.uid)
                this.props.navigation.navigate("Home")
            } else {
                alert(data)
            }
        }).catch(error => alert(error.message))                
    } 
   
    render() {
        const { loading, password, emailAddress } = this.props        
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                                                                         
                    <View style={styles.body}> 
                        <Text style={styles.formTextHeader}>{'Login Form'}</Text>     
                        <View style={styles.textWrapperContainer}>
                            <TextInput placeholder={'Email Address'} style={styles.textInputStyle} onChangeText={text => this.updateFormHandler('emailAddress', text)} value={emailAddress} />
                        </View>
                        <View style={styles.textWrapperContainer}>
                            <TextInput secureTextEntry={true} placeholder={'Password'} style={styles.textInputStyle} onChangeText={text => this.updateFormHandler('password', text)} value={password} />
                        </View>
                        <View>
                            <TouchableOpacity disabled={!emailAddress || !password} onPress={() => this.formSubmitHandler()}>
                                <View style={[emailAddress && password ? styles.defaultButtonTextStyle : styles.disabledBtnStyle]}>
                                    <Text style={[emailAddress && password ? styles.defaultButtonTextStyle : styles.disabledBtnTextStyle]}>{'Login'}</Text>
                                </View>
                            </TouchableOpacity> 
                            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => this.redirectToGivenPage('Main')}>
                                <View style={styles.defaultButtonTextStyle}>
                                    <Text style={styles.defaultButtonTextStyle}>{'Back to Main'}</Text>
                                </View>
                            </TouchableOpacity> 
                        </View>                        
                    </View>                                        
                </SafeAreaView>
            </>  
        )
    }   
}

const mapStateToProps = ({ auth }) => ({    
    loading: auth.loading,
    password: auth.password,    
    emailAddress: auth.emailAddress
})
  
const mapDispatchToProps = dispatch => ({
    clearForm: _ => dispatch(sendRegisterClearForm()),
    loginFormUpdate: (field, value) => dispatch(loginFormUpdate(field, value)),    
    submitEmailAndPasswordForAuthLogin: (emailAddress, password) => dispatch(authLogin(emailAddress, password))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)