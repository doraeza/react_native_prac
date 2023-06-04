import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CustomButton from '../common/CustomButton';
import { ScreenStyles } from '../../Styles/Screen/ChatScreenStyles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../interface/AppState';
import { addCart } from '../../store/action';
import { ProductData } from '../../interface/ProductData';

const AddToCart = ({ productData }:
  { productData:ProductData }) => {
  const [count, setCount] = useState(1);
  const add = useSelector((state: AppState) => state.onCart);
  const dispatch = useDispatch();
  const payload = { itemIdx: productData.id, itemName: productData.title, itemQuantity: 1 }
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleAddCart = () => {
    dispatch(addCart({payload}));
  };
  return (
    <View>
      <View style={ScreenStyles.plusminus}>
        <Text>갯수: {count}</Text>
        <Button title="+" onPress={incrementCount} />
        <Button title="-" onPress={decrementCount} />
      </View>
      <CustomButton
              text='장바구니 담기'
              pressFuction={()=>{handleAddCart()}}
      />
    </View>
  );
};

export default AddToCart;
