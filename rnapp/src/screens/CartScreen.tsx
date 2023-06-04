import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Test from '../components/common/TestModule'
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'

const CartScreen =()=> {
    return (
      <View style={ScreenStyles.container}>
        <Text>Add friends here!</Text>
        <Text>Open up App.tsx to staaart working on your app!</Text>
        
        <Test />
      </View>
    );
}


export default CartScreen