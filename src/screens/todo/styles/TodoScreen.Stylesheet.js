import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: '100%', 
        backgroundColor: "#B1B1B1",
        padding: 25,
        minHeight: 800
    },
    defaultTextStyle: {
        color: '#fff',
        fontSize: RFPercentage(3), 
    },
    eachItemContentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ea521d',
        width: '100%',
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    formTextHeader: {
        color: '#FFF',
        marginBottom: 20,
        fontSize: RFPercentage(4)
    },
    textWrapperContainer: {
        width: '100%',
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',        
    },
    textInputStyle: {
        backgroundColor: '#FFF',
        minWidth: 200,
        fontSize: RFPercentage(3), 
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15
    },
    defaultButtonStyle: {
        height: 50,
        width: '70%',
        minWidth: 320,        
        alignItems: 'center',
        backgroundColor: '#ea521d',
        borderRadius: 10, 
        marginBottom: 30
    }, 
    disabledBtnStyle: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'transparent',
        borderRadius: 10,
        color: '#404040',
        fontSize: RFPercentage(3), 
        borderWidth: 1,
        borderColor: '#ea521d'
    },    
    defaultButtonTextStyle: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ea521d',
        borderRadius: 10,
        color: '#fff',
        fontSize: RFPercentage(3),        
    },
    disabledBtnTextStyle: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'transparent',
        borderRadius: 10,
        color: '#404040',
        fontSize: RFPercentage(3), 
    },
})
  
export default styles