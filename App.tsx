import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome"

// React Navigtaion with Tabs
import Tabs from './components/Tabs'

// ReduxToolkit and ReduxPersist
import { Provider } from "react-redux"
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/HomeScreen'
import FavoriteScreen from './screens/FavoriteScreen'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: #BF4F74;
`

export type RootStackParams = {
   Home: {
     name: string;
   },
   Favorite,
}

export default function App() {
  return (
  <Provider store={store}>
    <PersistGate  loading={null} persistor={persistor}>
      <Tabs />
     </PersistGate>
  </Provider>
  );
}

