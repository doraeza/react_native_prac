import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Test from '../components/test'

const MyPage =()=> {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Text>MyGrade</Text>
        
        <Test />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'

  },
});

export default MyPage