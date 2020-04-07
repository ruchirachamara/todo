import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        marginTop: 20,
        marginBottom: 20,
        height: '100%'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: '100%', 
        backgroundColor: "#000000",
        padding: 25,
        minHeight: 800
    },
    defaultTextStyle: {
        color: '#fff'
    },
    extraLargeFont: {
        fontSize: RFPercentage(3), 
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
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ea521d',
        borderRadius: 10,
        color: '#fff',
        fontSize: RFPercentage(3),        
    },
})
  
export default styles