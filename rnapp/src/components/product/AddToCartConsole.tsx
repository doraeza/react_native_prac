import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CustomButton from '../common/CustomButton';
import { ScreenStyles } from '../../Styles/Screen/ChatScreenStyles';

const AddToCart = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
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
              pressFuction={()=>{}}
      />
    </View>
  );
};

export default AddToCart;
