import Create from './pages/create' 
import List from './pages/list' 
import Main from './pages/main' 

import { createAppContainer } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main, 
            navigationOptions:{
                title: 'Main Screen'
            }, 
        }, 
        List: {
            screen: List, 
            navigationOptions: {
                title: 'List Ideas'
            }
        }, 
        Create: {
            screen: Create, 
            navigationOptions: {
                title: 'Create Idea'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#069', 
            headerStyle:{
                backgroundColor: '#ACF'
            }
        }
    })
)

export default Routes
