import { useState, useEffect } from "react"
import axios from "axios"
import useInput from "../common/useInput"
import { NativeEvent } from "react-native-reanimated/lib/types/lib/reanimated2/commonTypes"
import { NativeMouseEvent } from "react-native/types"

function useLogin() {

    const inputEmail = useInput("")
    const inputPwd = useInput("")

    const login = () => {
        console.log("api create")
        // axios.post("http://localhost:8080/scenario/post", {}).then((res) => {
        //     console.log(res)
        //     mutate(`http://localhost:8080/scenario/list`)
        // })
    }
    return { inputEmail, inputPwd, login }
}

export default useLogin
