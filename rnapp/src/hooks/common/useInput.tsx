import React from "react"
import { NativeEvent } from "react-native-reanimated/lib/types/lib/reanimated2/commonTypes"
import ReactNative, { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
const useInput = (el:string) => {
    const [value, setValue] = React.useState<string>("")
    // const [length, setLength] = React.useState<number>(0)

    // const onChangeText = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    //     const {text} = e.nativeEvent
    //     setValue(text);
    //   };
    const onChangeText = (text:string) => {
        setValue(text)
        console.log(text)
    }

    const clear = () => {
        setValue("")
    }

    return {
        value,
        clear,
        props: {
            value,
            onChangeText,
            // length,
        },
    }
}

export default useInput
