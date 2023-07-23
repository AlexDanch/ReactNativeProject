import React, { Component } from 'react'
import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from "@expo/vector-icons/FontAwesome"
const Tab = createBottomTabNavigator();

export class Tabs extends Component {
  render() {
    return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{       
        tabBarActiveTintColor: "navy",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "purple",
        },
        headerStyle: {
          height: 130,
          backgroundColor:"purple"
        },
        headerTitleStyle: {
          fontSize: 36,
          color: "white",
          fontWeight: "bold"
        }
      }} 
      >
        <Tab.Screen 
          name={"Home"} 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome 
                name="home" 
                size={26} 
                color={focused ? "navy": "white" }
              />
            )
          }}
        />
         <Tab.Screen 
          name={"Favorite"}
          component={FavoriteScreen} 
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome 
                name="heart" 
                size={26} 
                color={focused ? "navy": "white" }
              />
            )
          }}
        />
      
      </Tab.Navigator>
    </NavigationContainer>
      
    )
  }
}

export default Tabs