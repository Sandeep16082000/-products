
import { Image, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import styles from "./Styles";
import { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        // if (!email || !password) {
        //     ToastAndroid.show('Please enter both email and password', ToastAndroid.SHORT);
        //     return;
        // }
        setIsLoading(true);
        try {
            console.log("Logging in with:", { email, password });
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            })
            const data = await response.json();
            console.log("Response data:", data);
            if (response.ok) {
                await AsyncStorage.setItem('userToken', data.token);
                navigation.navigate('Home');
            } else {
                ToastAndroid.show(data.error || 'Login failed', ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error(error);
            ToastAndroid.show('Error occurred during login', ToastAndroid.SHORT);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.continer}>
            <View style={styles.imagecon}>
                <Image style={styles.imagess} source={require('../../Image/items/stry.png')} />
            </View>
            <Text style={styles.logtxt}>Login</Text>
            <View style={styles.inputContainer}>
                <Image style={styles.emails}
                    source={require('../../Image/items/email.png')} />
                <TextInput style={styles.input} placeholder="Email id"
                    placeholderTextColor="#888" keyboardType="email-address"
                    value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.locks}
                    source={require('../../Image/items/lock.png')}
                    />
                <TextInput style={styles.inputs} placeholder="Passowrd"
                 placeholderTextColor="#888" value={password} onChangeText={setPassword} 
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity style={styles.showpasswordbtn}
                    onPress={() => setShowPassword(prevState => !prevState)}
                >
                    <Image source={showPassword ? require('../../Image/items/unhide.png')
                        : require('../../Image/items/hide.png')}
                        style={styles.showicon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgest Passowrd?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}
                disabled={isLoading}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>{isLoading ? 'Logging in...' : 'Login'}</Text>

            </TouchableOpacity>
            <Text style={styles.OR}>OR</Text>
            <TouchableOpacity style={styles.googleButton}>
                <Image style={styles.googleimg}
                    source={require('../../Image/items/google.png')} />
                <Text style={styles.googleButtonText}>Login With google</Text>
            </TouchableOpacity>
            <Text style={styles.text}>New to Logistics ?
                <TouchableOpacity>
                    <Text style={styles.link} > Register</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}
export default Login;