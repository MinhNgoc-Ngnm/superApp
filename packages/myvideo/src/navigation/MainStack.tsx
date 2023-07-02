import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from '@src/navigation/types';
import {routerMain} from '@src/navigation/routes';
import Onbroad from '@src/features/Onbroad';
import Login from '@src/features/Login';

const Stack = createStackNavigator<MainStackParamList>();
const MainStack: React.FC<any> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          shadowColor: 'transparent',
        },
        gestureEnabled: false,
      }}>
      <Stack.Screen name={routerMain.Onbroad} component={Onbroad} />
      <Stack.Screen name={routerMain.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default MainStack;
