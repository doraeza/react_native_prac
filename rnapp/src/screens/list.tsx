import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { userInteface } from '../interface/ApiListData'
// import styled from 'styled-components/native'
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import { ProductData } from '../interface/ProductData';
import ProductCard from '../components/product/ProductCard';

const List = ({ productData }:
    { productData:ProductData[] }) => 
    {
    // const items = [
    //     {name: ApiData1.name.last },
    //     {name: ApiData2.name.last },
    //     {name: ApiData3.name.last },
    // ]
    
    const renderProductItem = ({ item }:{ item:ProductData }) => {
        return (
          <ProductCard
            product={item}
            // onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}
          />
        );
    }


    return (
        <View style={ScreenStyles.container}>
            <FlatList
                data={productData}
                renderItem={renderProductItem}
                contentContainerStyle={ScreenStyles.productList}
                keyExtractor={(item:any) => item.id}
            />
        </View>
    )
};

export default List