import { TouchableOpacity, GestureResponderEvent, Text } from 'react-native';
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'

const CustomButton = ({text, pressFuction}:{text:string, pressFuction:(event: GestureResponderEvent) => void}) => {
    return (
        <TouchableOpacity style={ScreenStyles.button} onPress={pressFuction}>
            <Text style={ScreenStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton