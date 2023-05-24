import React from "react"

const useInput = () => {
    const [value, setValue] = React.useState<string>("")
    // const [length, setLength] = React.useState<number>(0)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        // setLength(e.target.value.length)
    }

    const clear = () => {
        setValue("")
    }

    return {
        value,
        clear,
        props: {
            value,
            onChange,
            // length,
        },
    }
}

export default useInput
