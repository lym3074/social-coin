import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import {BLACK_COLOR} from "../colors"
import { useQuery } from "react-query";
import { coins } from "../api";
import { ActivityIndicator, FlatList, View } from "react-native";
import Coin from "../components/Coin";

const Container = styled.View`
background-color: ${BLACK_COLOR};
flex: 1;
`;
const Loader = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${BLACK_COLOR};
`;


const Home = () => {
    const {isLoading, data} = useQuery("coins", coins);
    const [cleanData, setCleanData] = useState([]);
   
    useEffect(() => {
        if(data) {
            const clean = data.filter((coin) => coin.rank != 0 && coin.is_active && !coin.is_new)
            setCleanData(clean)
        }
        
    },[data]);

    if(isLoading) {
        return (
            <Loader>
                <ActivityIndicator color="white"/>
            </Loader>
        )
    }

    return (
        <Container>
            <FlatList 
            data={cleanData}
            ItemSeparatorComponent={<View style={{height: 10}}></View>}
            numColumns={3}
            columnWrapperStyle={{
                justifyContent: "space-between"
            }}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => <Coin index={index} symbol={item.symbol} />}
            />
        </Container>
    );
}

export default Home;