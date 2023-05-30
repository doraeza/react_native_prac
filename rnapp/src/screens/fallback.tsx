import { StyleSheet, Text, View } from 'react-native'
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'


const Fallback = () => {
    return (
        <View style={ScreenStyles.container}>
            <Text>Failed render</Text>
        </View>
    )
}



export default Fallback