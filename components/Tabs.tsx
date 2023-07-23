import React, { Component } from 'react'
import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export class Tabs extends Component {
  render() {
    return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{       
        tabBarActiveTintColor: "#00ffff",
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
          name={"Photos"} 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome 
                name="home" 
                size={26} 
                color={focused ? "#00ffff": "white" }
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
                color={focused ? "#00ffff": "white" }
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