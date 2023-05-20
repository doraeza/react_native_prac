import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Test from '../components/test';

const Main = () => {
    return (
      <View style={styles.container}>
        <Text>Main Screen!</Text>
        <Button title='go to the FriendsScreen'/>
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