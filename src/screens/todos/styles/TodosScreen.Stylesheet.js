import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#b1b1b1',
        width: '100%', 
        height: '100%',         
        padding: 25,
        minHeight: 800,
        flex: 1
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
    }
})
  
export default styles