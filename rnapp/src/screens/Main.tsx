import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Test from '../components/test';
import { useNavigation } from '@react-navigation/core';



const Main = () => {
  const navigation:any = useNavigation()
    return (
      <View style={styles.container}>
        <Text>Main Screen!</Text>
        <Button title='go to the FriendsScreen' 
        onPress={()=>{navigation.push('FriendsScreen')}}/>
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