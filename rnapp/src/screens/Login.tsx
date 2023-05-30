import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import useInput from '../hooks/common/useInput';
import useLogin from '../hooks/useLogin';
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import { useNavigation } from '@react-navigation/core';
import Join from './Join';
import CustomButton from '../components/button';

const Login = () => {
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
            <CustomButton
                text='로그인'
                pressFuction={()=>{onLoginPress}}
            />
            <CustomButton
                text='회원가입'
                pressFuction={()=>{navigation.navigate('Join')}}
            />
            
        </View>
    );
}



export default Login