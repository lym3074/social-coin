import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Icon } from "../components/Coin";
import { useQuery } from "react-query";
import { history, info } from "../api";
import { BLACK_COLOR } from "../colors";

const Container = styled.ScrollView`
    background-color: ${BLACK_COLOR}
`;

const Detail = ({navigation, route: {params: {symbol, id}}}) => {
    useEffect(()=> {
        navigation.setOptions({
            headerTitle: () => <Icon source={{uri:`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}}/>
        });
    },[]);

    const {isLoading: infoLoading, data: infoData} = useQuery("coinInfo", () => info(id)) // 함수형은 캐시를 잃을 수 있음
    const {isLoading: historyLoading, data: historyData} = useQuery(["coinHistory",id], history)
    
    const [victoryData, setVictoryData] = useState([]);

    useEffect(()=>{
        if(historyData) {
            const axios = historyData.map(price => ({x: new Date(price.timestamp).getTime(), y: price.price}))
            setVictoryData(axios);
        }
    },[historyData]);

    console.log(victoryData)
    return <Container></Container>
};

export default Detail;