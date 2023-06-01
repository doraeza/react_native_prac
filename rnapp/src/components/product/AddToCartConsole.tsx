import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

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
      <Text>장바구니에 추가할 갯수: {count}</Text>
      <Button title="+" onPress={incrementCount} />
      <Button title="-" onPress={decrementCount} />
    </View>
  );
};

export default AddToCart;
