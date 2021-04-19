import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

const Routes = () => {
    return (
        <NavigationContainer>
            <StackScreens />
        </NavigationContainer>
    )
}

export default Routes;