import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from '../components/test';

const Main = () => {
    return (
      <View style={styles.container}>
        <Text>Main Screen!</Text>
        
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

export default Main