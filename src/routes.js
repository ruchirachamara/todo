import React from "react"
import {
    View,
    Button,
    AsyncStorage,
    SafeAreaView,
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/Feather'

import MainScreen from './screens/main/MainScreen'
import ArchivedScreen from './screens/archived/ArchivedScreen'
import SignUpScreen from './screens/signup/SignUpScreen'
import LoginScreen from './screens/login/LoginScreen'
import AboutScreen from './screens/about/AboutScreen'
import TodosScreen from './screens/todos/TodosScreen'
import TodoScreen from './screens/todo/TodoScreen'

const TabContainer = createBottomTabNavigator({
    Home: {
        screen: TodosScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => <Icon name="home" size={20} color={`${focused ? tintColor : '#fff'}`} />,
        }
    },
    Archived: {
        screen: ArchivedScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => <Icon name="sliders" size={20} color={`${focused ? tintColor : '#fff'}`} />
        }
    },    
},{
        tabBarposition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: { 
            activeTintColor: '#ea521d',
            inactiveTintColor: '#fff',
            activeBackgroundColor: '#000000', 
            inactiveBackgroundColor: '#000000',
            labelStyle: {
                fontSize: 14,
                paddingTop: 0,
                paddingBottom: 0
            },
            style:{
                borderTopWidth: 1,
                borderTopColor:'#ea521d',
                position: 'absolute',
                bottom: 0,
                left: 0
            },
            animationEnabled: false,
            tabStyle: {
                paddingBottom: 15,
                paddingTop: 0,
                height: 75,
                marginBottom: 0,
            },
        }
    }
)

const StackContainer = createStackNavigator({
    Main: {
        screen: MainScreen, 
        navigationOptions: {
            header: null,
        },
    },
    SignUp: {
        screen: SignUpScreen,    
        navigationOptions: {
            header: null,
        },    
    }, 
    Login: {
        screen: LoginScreen,    
        navigationOptions: {
            header: null,
        },    
    },  
    Todo: {
        screen: TodoScreen,            
    },      
    TabContainer,    
},{
    defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon name="menu" size={25} color={'#069'} onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }} /> 
            ),
            headerRight: (  
                <Icon name="plus" size={30} color={'#069'} onPress={() => navigation.navigate("Todo")} style={{ marginRight: 15 }} /> 
            ),
            headerTitle: 'ToDo Application',
        };  
    },
},{
    initialRouteName : 'Home'
}) 

const logout = async(props) => {
    try {
      await AsyncStorage.removeItem('userId')
      props.navigation.navigate("Main")
    } catch (error) {
        alert(error)
    }
}

const MainDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: StackContainer,
        navigationOptions: {            
            drawerIcon: ({ tintColor }) => (
                <Icon name="home" size={20} color={'#404040'} />
            ),
        }    
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="alert-circle" size={20} color={'#404040'} />
            ),
        }    
    }, 
},{
    contentComponent:(props) => (
        <View style={{
            paddingTop: 75,
            backgroundColor: '#000',
            height: '100%'
        }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>                
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingLeft: 25,
                    marginTop: 10
                }}>
                    <Icon name="home" size={20} color={'#ea521d'} />
                    <Button title="Home" onPress={() => props.navigation.closeDrawer()} color={'#fff'} />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingLeft: 25,
                    marginTop: 10
                }}>
                    <Icon name="alert-circle" size={20} color={'#ea521d'} />
                    <Button title="About" onPress={() => props.navigation.navigate("About")} color={'#fff'} />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingLeft: 25,
                    marginTop: 10
                }}>
                    <Icon name="log-out" size={20} color={'#ea521d'} />
                    <Button title="Logout" onPress={() => logout(props)} color={'#fff'} />
                </View>
            </SafeAreaView>
        </View>
    ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
})

export default createAppContainer(MainDrawerNavigator)