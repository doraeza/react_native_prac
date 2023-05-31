import { View,Text } from "react-native"
import { ProductData } from "../interface/ProductData"
import { useRoute, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    ProductDetail: { product: ProductData };
  };
  

  
  type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
  
  const ProductDetail = () => {
    const route = useRoute<ProductDetailRouteProp>();
    const { product } = route.params;
  
    return (
        <View>
            <Text>Product Detail Screen</Text>
            {product && (
                <>
                <Text>Product Name: {product.title}</Text>
                <Text>Product Price: {product.price}</Text>
                </>
            )}
        </View>
    )
}
export default ProductDetail