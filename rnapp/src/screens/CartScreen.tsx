import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Test from '../components/common/TestModule'
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import { AppState } from '../interface/AppState'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../store/action'
import CustomButton from '../components/common/CustomButton'

const CartScreen =()=> {
  const onCart = useSelector((state: AppState) => state.onCart);
  const dispatch = useDispatch();

  const handleDeleteCart = (payload:number) => {
    dispatch(deleteCart({payload: {
      itemIdx: payload
  }}));
  };


  const renderItems = onCart.map(item => (
    <View style={ScreenStyles.cartcard} key={item.itemIdx}>
      <View style={ScreenStyles.cardelement}>
        <Text style={ScreenStyles.cardtext}>{item.itemName}</Text>
        <Text style={ScreenStyles.cardtextquantity}>{item.itemQuantity}</Text>
        <CustomButton
              text='제거'
              pressFuction={()=>{
                console.log("현재 oncart",onCart)
                console.log('보내는 상품idx',item.itemIdx)
                handleDeleteCart(item.itemIdx)
              }}
        />
      </View>
    </View>
  ));

  
    return (
      <View style={ScreenStyles.container}>
        {renderItems}
        <View style={ScreenStyles.plusminus} >
          <TouchableOpacity style={ScreenStyles.button} onPress={()=>{}}>
              <Text style={ScreenStyles.buttonText}>구매하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ScreenStyles.button} onPress={()=>{}}>
              <Text style={ScreenStyles.buttonText}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}


export default CartScreen