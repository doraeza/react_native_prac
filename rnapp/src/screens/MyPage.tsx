import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Test from '../components/common/TestModule'
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'

const MyPage =()=> {
    return (
      <View style={ScreenStyles.container}>
        <Text>Profile</Text>
        <Text>MyGrade</Text>
        <Test />
      </View>
    );
}


export default MyPage