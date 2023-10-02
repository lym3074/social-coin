import React, { useEffect, useRef } from "react"
import { Animated, View } from "react-native";
import styled from "styled-components/native";


const Wrapper = styled(Animated.createAnimatedComponent(View))`
    padding: 20px;
    border-radius: 5px;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
`;
const CoinName = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 16px;
`;
const Icon = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-bottom: 10px;
`;

const Coin = ({symbol, index}) => {
    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(()=> {
        Animated.spring(opacity, {
            toValue: 1,
            useNativeDriver: true,
            delay: index * 100
        }).start();
    }, []);

    const scale= opacity.interpolate({
        inputRange: [0,1],
        outputRange: [0.7,1]
    })

    return (
        <Wrapper style={{flex: 0.31, opacity, transform:[{scale}]}}>
            <Icon source={{uri:`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}}/>
            <CoinName numberOfLines={1}>{symbol}</CoinName>
        </Wrapper>
    )
    
}

export default Coin;