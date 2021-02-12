import React from 'react'
// import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { HomeScreen, PatientScreen } from './screens'

const Stack = createStackNavigator()

const getHeaderStyle = (title) => ({
  title: title,
  headerTintColor: '#2A86FF',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={getHeaderStyle('Пациеты')} />
        <Stack.Screen name='Patient' component={PatientScreen} options={getHeaderStyle('Карта пациета')} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


