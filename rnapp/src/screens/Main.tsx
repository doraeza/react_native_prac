import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Test from '../components/test';
import { useNavigation } from '@react-navigation/core';
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'


const Main = () => {
  const navigation:any = useNavigation()
    return (
      <View style={ScreenStyles.container}>
        <Text>Main Screen!</Text>
        
        <Test />
      </View>
    );
}

export default Main