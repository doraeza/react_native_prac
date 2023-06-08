import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Test from '../components/common/TestModule'
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import { useSelector } from 'react-redux'
import { AppState } from '../interface/AppState'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CartScreen =()=> {
  const onCart = useSelector((state: AppState) => state.onCart);

  const renderItems = onCart.map(item => (
    <View style={ScreenStyles.cartcard} key={item.itemIdx}>
      <View style={ScreenStyles.cardelement}>
        <Text style={ScreenStyles.cardtext}>{item.itemName}</Text>
        <Text style={ScreenStyles.cardtextquantity}>{item.itemQuantity}</Text>
      </View>
    </View>
  ));

  
    return (
      <View style={ScreenStyles.container}>
        <Text>List</Text>
        {renderItems}
      </View>
    );
}


export default CartScreen