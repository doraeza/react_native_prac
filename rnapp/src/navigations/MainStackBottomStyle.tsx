import React, { useContext } from 'react';
// import { ThemeContext } from 'styled-components/native';
// import { createStackNavigator } from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';
import Main from '../screens/Main';
import List from '../screens/list';
import useUserInfo from '../hooks/useUserInfo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import MyPage from '../screens/MyPage';
import { createStackNavigator } from '@react-navigation/stack';
import Join from '../screens/Join';

const BottomTab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const MainStackBottomStyle = () => {
//   const theme = useContext(ThemeContext);
const { isLoading, error, ApiData1,ApiData2, ApiData3 } = useUserInfo()
// console.log(ApiData1)
const [isLogin, setIsLogin] = React.useState(false)
  return (
    
    <BottomTab.Navigator
    //   initialRouteName="Main"
    screenOptions={({ route }) => ({
      tabBarVisible: route.name === 'Main' ,
      headerTitleAlign: 'center',
    })}
    >
      <BottomTab.Screen
        name="Join"
        component={Join}
        options={{ tabBarButton: () => null }}
      />
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={{ tabBarButton: () => null }}
      />
      
      <BottomTab.Screen name="Main" component={Main} />
      <BottomTab.Screen name="List" children={()=><List ApiData1={ApiData1} ApiData2={ApiData2} ApiData3={ApiData3} />} />
      <BottomTab.Screen name="FriendsScreen" component={FriendsScreen} />
      {isLogin ? <BottomTab.Screen name="MyPage" component={MyPage} /> : <BottomTab.Screen name="Login/Join" component={Login} />}
    </BottomTab.Navigator>
  );
};

export default MainStackBottomStyle;