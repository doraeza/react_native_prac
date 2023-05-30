import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import useInput from '../hooks/common/useInput';
import useLogin from '../hooks/useLogin';
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import { useNavigation } from '@react-navigation/core';
import Join from './Join';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    let { inputEmail, inputPwd, login } = useLogin()
    let navigation:any = useNavigation()
    const onLoginPress = () => {
        // Alert.alert('Credentials', `${email} + ${password}`);
        login() // todo
    }
    
    return (
        <View style={ScreenStyles.container}>
            <TextInput
                placeholder={'이메일'}
                style={ScreenStyles.input}
                {...inputEmail.props}
            />
            <TextInput
                placeholder={'비밀번호'}
                secureTextEntry={true}
                style={ScreenStyles.input}
                {...inputPwd.props}
            />
            <Button
                title={'로그인'}
                onPress={onLoginPress}
            />
            <Button
                title={'회원가입'}
                onPress={()=>{navigation.navigate('Join')}}
            />
        </View>
    );
}



export default Login