import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import useInput from '../hooks/common/useInput';
import useLogin from '../hooks/useLogin';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    let { inputEmail, inputPwd, login } = useLogin()

    const onLoginPress = () => {
        // Alert.alert('Credentials', `${email} + ${password}`);
        login() // todo
    }
    const onSignUpPress = () => {
      // Alert.alert('SignUp Credentials', `${email} + ${password}`);
  }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'이메일'}
                style={styles.input}
                {...inputEmail.props}
            />
            <TextInput
                placeholder={'비밀번호'}
                secureTextEntry={true}
                style={styles.input}
                {...inputPwd.props}
            />
            <Button
                title={'로그인'}
                onPress={onLoginPress}
            />
            <Button
                title={'회원가입'}
                onPress={onSignUpPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
    },
    button: {
      marginTop: 10,
    },
});

export default Login