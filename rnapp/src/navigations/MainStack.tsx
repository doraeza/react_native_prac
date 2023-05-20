import React, { useContext } from 'react';
// import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';
import Main from '../screens/Main';
import List from '../screens/list';

const Stack = createStackNavigator();

const MainStack = () => {
//   const theme = useContext(ThemeContext);
// const { isLoading, error, ApiData1,ApiData2, ApiData3 } = useUserInfo()
// console.log(ApiData1)
  return (
    
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="List" component={List}/>
      <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;