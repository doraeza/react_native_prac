import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from '../components/test';

const FriendsScreen =()=> {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        <Text>Open up App.tsx to staaart working on your app!</Text>
        
        <Test />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default FriendsScreen;