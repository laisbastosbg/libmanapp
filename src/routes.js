import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/Home';
import Authors from './pages/Authors';
import Books from './pages/Books';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Authors" component={Authors} />
        <AppStack.Screen name="Books" component={Books} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;