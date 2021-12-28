import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import StackNavigator from './StackNavigator'
import Profile from '../screens/Profile'

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Home" component={StackNavigator} />
      </Drawer.Navigator>
    )
  }
}
