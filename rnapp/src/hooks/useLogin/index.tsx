import { useState, useEffect } from "react"
import axios from "axios"
import useInput from "../common/useInput"
import { NativeEvent } from "react-native-reanimated/lib/types/lib/reanimated2/commonTypes"
import { NativeMouseEvent } from "react-native/types"

function useLogin() {

    const inputEmail = useInput("")
    const inputPwd = useInput("")

    
    // const apiCreate = async (answerData: AnswerValue) => {
    //     // 테마 생성
    //     try {
    //     } catch (err) {
    //         console.log(err)
    //         message.error("에러가 발생했습니다. 관리자에게 문의해주세요.")
    //     }
    // }
    const login = (e?: NativeMouseEvent) => {
        console.log("api create")
        // axios.post("http://localhost:8080/scenario/post", {}).then((res) => {
        //     console.log(res)
        //     mutate(`http://localhost:8080/scenario/list`)
        // })
    }
    return { inputEmail, inputPwd, login }
}

export default useLogin
