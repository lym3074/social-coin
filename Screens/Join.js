import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import auth from '@react-native-firebase/auth';
import { ActivityIndicator, Alert } from "react-native";

const Container = styled.View``;
const TextInput = styled.TextInput``;

const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const passwordInput = useRef(null);
    const onSubmitEmail = () => {
        passwordInput.current.focus();
    }
    const onSubmitPassword = async () => {
        if(!email || !password) {
            return Alert.alert("양식을 완성해주세요.")
        };
        if(loading) return;

        try {
            setLoading(true);
            const userCre = await auth().createUserWithEmailAndPassword(email, password);
            console.log(userCre)
            
            setLoading(false);
        } catch(e) {
            switch(e.code) {
                case "auth/weak-password" : {
                    Alert.alert("Write a 강한 비밀 번호");
                    break;
                }
                case "auth/invalid-email" : {
                    Alert.alert("not a 이메일 양식");
                    break;
                }
            }
            setLoading(false);
        }
        
    }
    return (
        <Container>
            <TextInput
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                onSubmitEditing={onSubmitEmail}
            />
            <TextInput
                ref={passwordInput}
                value={password}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                returnKeyType="done"
                onSubmitEditing={onSubmitPassword}
            />
            <Btn onPress={onSubmitPassword}>
                {loading
                ? <ActivityIndicator color={"black"}/>
                : <BtnText>
                    Create account
                </BtnText>
                }
            </Btn>
            
        </Container>
    );
}

export default Join;