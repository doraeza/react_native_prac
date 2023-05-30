import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default Join;
