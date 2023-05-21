import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import useUserInfo from '../hooks/useUserInfo';
import { userInteface } from '../interface/ApiListData';
// import styled from 'styled-components/native';




const List = ({ ApiData1,ApiData2,ApiData3 }:
    { ApiData1:userInteface,ApiData2:userInteface,ApiData3:userInteface }) => 
    {
    const items = [
        { _id: 1, name: ApiData1.name.last },
        { _id: 2, name: ApiData2.name.last },
        { _id: 3, name: ApiData3.name.last },
        // { _id: 1, name: "ApiData1.name.last" },
        // { _id: 2, name: "ApiData2.name.last" },
        // { _id: 3, name: "ApiData3.name.last" },
    ];
    

    const _onPress = (item:{_id: number, name: string}) => {
    };

    return (
        <View>
            {items.map(item => (
                <Button
                    key = {item._id}
                    title = {item.name}
                    onPress = {() => _onPress(item)}
                />
            ))}
        </View>
    );
};

export default List;