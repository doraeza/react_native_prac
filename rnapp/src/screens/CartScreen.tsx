import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Test from '../components/common/TestModule'
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import { useSelector } from 'react-redux'
import { AppState } from '../interface/AppState'

const CartScreen =()=> {
  const onCart = useSelector((state: AppState) => state.onCart);

  const renderCartList =(onCart:any)=> {
    console.log("onCart ==>", onCart)
    return (
      <View>
        {onCart && onCart.map((
          el:{
            itemIdx: number;
            itemName: string;
            itemQuantity: number;
            })=>
        {
          <View>
            <Text>name : {el.itemName}</Text>
            <Text>ea : {el.itemQuantity}</Text>
          </View>
        })}
      </View>
    )

  }
  
    return (
      <View style={ScreenStyles.container}>
        <Text>List</Text>
        {renderCartList(onCart)}
      </View>
    );
}


export default CartScreen