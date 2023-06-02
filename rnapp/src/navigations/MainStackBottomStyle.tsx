import React, { useContext } from 'react';
// import { ThemeContext } from 'styled-components/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/FriendsScreen';
import Main from '../screens/Main';
import List from '../screens/list';
import useUserInfo from '../hooks/useUserInfo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import MyPage from '../screens/MyPage';
import { createStackNavigator } from '@react-navigation/stack';
import Join from '../screens/Join';
import useProductList from '../hooks/useProductlist/Index';
import ProductDetail from '../screens/ProductDetail';
import { ProductData } from '../interface/ProductData';

const BottomTab = createBottomTabNavigator<MainStackParamList>();
type MainStackParamList = {
  Main: undefined;
  List: undefined;
  Cart: undefined;
  Join: undefined;
  Login: undefined;
  ProductDetail: { product: ProductData };
  MyPage: undefined;
};

const MainStackBottomStyle = () => {
//   const theme = useContext(ThemeContext);
const { isLoading, error, ApiData1,ApiData2, ApiData3 } = useUserInfo()
const { productData } = useProductList()
// console.log(ProductData)
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
        name="ProductDetail"
        component={ProductDetail}
        options={
          { tabBarButton: () => null }
        }
      />
      
      <BottomTab.Screen name="Main" component={Main} />
      <BottomTab.Screen name="List" children={()=><List productData={productData} />} />
      <BottomTab.Screen name="Cart" component={Cart} />
      {isLogin ? <BottomTab.Screen name="MyPage" component={MyPage} /> : <BottomTab.Screen name="Login" component={Login} />}
    </BottomTab.Navigator>
  );
};

export default MainStackBottomStyle;