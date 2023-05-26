import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { userInteface } from '../interface/ApiListData'
// import styled from 'styled-components/native'


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'

    },
  });

const List = ({ ApiData1,ApiData2,ApiData3 }:
    { ApiData1:userInteface,ApiData2:userInteface,ApiData3:userInteface }) => 
    {
    const items = [
        {name: ApiData1.name.last },
        {name: ApiData2.name.last },
        {name: ApiData3.name.last },
    ]
    

    const _onPress = (item:{name: string}) => {
    }

    return (
        <View style={styles.container}>
            {items.map((item,idx:number) => (
                <Button
                    key = {idx}
                    title = {item.name}
                    onPress = {() => _onPress(item)}
                />
            ))}
        </View>
    )
};

export default List