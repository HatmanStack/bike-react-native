import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, Text } from 'react-native';
import Home from './Home';
import Tickets from './Tickets';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    
    <StatusBar barStyle="dark-content" hidden />
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      headerMode='screen'
      >
        <Stack.Screen
          name='Home'
          
          options={{
            headerShown: false
          }}
          >
          {(props) => <Home {...props} username='Sports Fan' />}
          </Stack.Screen>
        <Stack.Screen
          name='Tickets'
          componenet={Tickets}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
title:{
  fontFamily: 'Ubuntu-Regular',
}
});

export default App;
