import { View,Text, Image } from "react-native"
import { ProductData } from "../interface/ProductData"
import { useRoute, RouteProp } from '@react-navigation/native';
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import useSplitAndAlignText from "../hooks/common/useSentenceSort";

type RootStackParamList = {
    ProductDetail: { product: ProductData };
}
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>

const ProductDetail = () => {
    const route = useRoute<ProductDetailRouteProp>()
    const { product } = route.params;
  
    return (
        <View style={ScreenStyles.container}>
            {product && (
                <>
                <Image source={{uri: product.image}} style={ScreenStyles.detailImage} />
                <View style={{ height: 10 }} />
                <Text numberOfLines={2}>{product.title}</Text>
                <View style={{ height: 10 }} />
                <Text>{useSplitAndAlignText(product.description)}</Text>
                <View style={{ height: 10 }} />
                <Text>Price:$ {product.price}</Text>
                </>
            )}
        </View>
    )
}
export default ProductDetail