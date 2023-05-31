import { Text,Image, TouchableOpacity } from "react-native";
import { ProductData } from "../../interface/ProductData";
import {ScreenStyles} from '../../Styles/Screen/ChatScreenStyles'
import { useNavigation } from '@react-navigation/core';


const ProductCard = ({ product }:{ product:ProductData }) => {
    const { title, price, image, description, category } = product;
    const navigation:any = useNavigation()
    const goDetail = (productItem:ProductData) => {
        navigation.navigate('ProductDetail', {product:productItem})
    }
    return (
      <TouchableOpacity style={ScreenStyles.productContainer} onPress={()=>{goDetail(product)}}>
        <Image source={{uri: image}} style={ScreenStyles.image} />
        <Text>{title}</Text>
        <Text>$ {price}</Text>
      </TouchableOpacity>
      )
  };

  export default ProductCard