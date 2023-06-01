import { View,Text, Image } from "react-native"
import { ProductData } from "../interface/ProductData"
import { useRoute, RouteProp } from '@react-navigation/native';
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import useSplitAndAlignText from "../hooks/common/useSentenceSort";
import CustomButton from "../components/common/CustomButton";
import AddToCart from "../components/product/AddToCartConsole";

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
                <View style={{ height: 10 }} />
                <AddToCart />
                <CustomButton
                        text='장바구니 담기'
                        pressFuction={()=>{}}
                />
                <CustomButton
                        text='바로 구매'
                        pressFuction={()=>{}}
                />
                </>
            )}
        </View>
    )
}
export default ProductDetail