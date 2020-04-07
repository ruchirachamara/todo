import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,    
    TextInput,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

import { registerFormUpdate, sendRegisterClearForm, submitForRegistration } from '../../actions/authActions'

import styles from './styles/SignUpScreen.Stylesheet.js'

class SignUpScreen extends Component {

    state = {
        password: "",
        emailAddress: "",
        emailRule: new RegExp(/[^@]+@[^\.]+\..+/g)    
    }

    redirectToGivenPage = pageId => this.props.navigation.navigate(pageId)

    updateFormHandler = (field, value) => {
        const valueConverted = value.toLowerCase()
        this.setState({ [field]: valueConverted })    
        this.props.registerFormUpdate([field], valueConverted)
    }

    formSubmitHandler = _ => {
        const { password, emailAddress } = this.props
        if (password && emailAddress) {  
            if (emailAddress.test(emailRule)) {
                this.props.submitEmailAndPasswordForRegistration(emailAddress, password).then(data => {
                    if (data) {
                        this.setState({ 
                            password: "",
                            emailAddress: "" 
                        })   
                        this.props.clearForm()
                        this.props.navigation.navigate("Main")
                    }
                }).catch(error => alert(error.message))                
            } else {
                alert('Invalid email address!')
            }                      
        }
    } 
   
    render() {
        const { password, emailAddress } = this.props        
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                                                                         
                    <View style={styles.body}> 
                        <Text style={styles.formTextHeader}>{'Sign Up Form'}</Text>     
                        <View style={styles.textWrapperContainer}>
                            <TextInput placeholder={'Email Address'} style={styles.textInputStyle} onChangeText={text => this.updateFormHandler('emailAddress', text)} value={emailAddress} />
                        </View>
                        <View style={styles.textWrapperContainer}>
                            <TextInput secureTextEntry={true} placeholder={'Password'} style={styles.textInputStyle} onChangeText={text => this.updateFormHandler('password', text)} value={password} />
                        </View>
                        <View>
                            <TouchableOpacity disabled={!emailAddress || !password} onPress={() => this.formSubmitHandler()}>
                                <View style={[emailAddress && password ? styles.defaultButtonTextStyle : styles.disabledBtnStyle]}>
                                    <Text style={[emailAddress && password ? styles.defaultButtonTextStyle : styles.disabledBtnTextStyle]}>{'Register Here'}</Text>
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
    password: auth.password,
    emailAddress: auth.emailAddress
})
  
const mapDispatchToProps = dispatch => ({
    clearForm: _ => dispatch(sendRegisterClearForm()),
    registerFormUpdate: (field, value) => dispatch(registerFormUpdate(field, value)),    
    submitEmailAndPasswordForRegistration: (emailAddress, password) => dispatch(submitForRegistration(emailAddress, password))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)