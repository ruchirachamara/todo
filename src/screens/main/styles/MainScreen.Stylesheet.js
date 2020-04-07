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
        backgroundColor: "#000000",
        padding: 25,
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
    defaultButtonTextStyle: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#fff',
        fontSize: RFPercentage(3),        
    },
})
  
export default styles