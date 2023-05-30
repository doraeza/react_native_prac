import { Text,Image, TouchableOpacity } from "react-native";
import { ProductData } from "../../interface/ProductData";
import {ScreenStyles} from '../../Styles/Screen/ChatScreenStyles'


const ProductCard = ({ product }:{ product:ProductData }) => {
    const { title, price, image } = product;
    
    return (
      <TouchableOpacity style={ScreenStyles.productContainer} >
        <Image source={{uri: image}} style={ScreenStyles.image} />
        <Text>{title}</Text>
        <Text>$ {price}</Text>
      </TouchableOpacity>
      )
  };

  export default ProductCard