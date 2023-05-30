import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {ScreenStyles} from '../Styles/Screen/ChatScreenStyles'
import CustomButton from '../components/common/CustomButton';

const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation:any = useNavigation()

  const handleSignup = () => {
    // 회원가입 로직 구현
    // 이메일과 비밀번호를 사용하여 회원 가입을 처리하고,
    // 성공 시 다음 화면으로 이동하도록 구현합니다.
    // 예시로는 가입이 성공했다고 가정하고, 다음 화면으로 이동하는 코드를 작성합니다.
    navigation.navigate('Main');
  };

  return (
    <View style={ScreenStyles.container}>
      <TextInput
        style={ScreenStyles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={ScreenStyles.input}
        placeholder="이름"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={ScreenStyles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton
            text='가입'
            pressFuction={()=>{handleSignup}}
      />
      <CustomButton
            text='취소'
            pressFuction={()=>{navigation.navigate('Login')}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Join;
