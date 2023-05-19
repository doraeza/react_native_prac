import React, { useContext } from 'react';
// import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '../components/test';
import FriendsScreen from '../screens/FriendsScreen';
// import { Channel, ChannelCreation } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
//   const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Main" component={FriendsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;