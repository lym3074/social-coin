import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const Login = ({navigation: {navigate}}) => {
    return (
        <Container>
            <Text>Don't have an account?</Text>
            <Btn onPress={() => navigate("Join")}>
                <BtnText>
                    Join!
                </BtnText>
            </Btn>
        </Container>
    );
}

export default Login;