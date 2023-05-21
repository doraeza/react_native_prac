import React, { useContext } from 'react';
// import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';
import Main from '../screens/Main';
import List from '../screens/list';
import useUserInfo from '../hooks/useUserInfo';

const RootStack = createStackNavigator();

const MainStack = () => {
//   const theme = useContext(ThemeContext);
const { isLoading, error, ApiData1,ApiData2, ApiData3 } = useUserInfo()
// console.log(ApiData1)
  return (
    
    <RootStack.Navigator
    //   initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}
    >
      <RootStack.Screen name="Main" component={Main} />
      {/* <RootStack.Screen name="List" component={List} /> */}
      <RootStack.Screen name="List" children={()=><List ApiData1={ApiData1} ApiData2={ApiData2} ApiData3={ApiData3} />} />
      <RootStack.Screen name="FriendsScreen" component={FriendsScreen} />
    </RootStack.Navigator>
  );
};

export default MainStack;