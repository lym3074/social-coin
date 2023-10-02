import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import {BLACK_COLOR} from "../colors"

const Nav = createNativeStackNavigator();

const SignIn = () => {
    return (
    <Nav.Navigator 
        screenOptions={{
        presentation: "modal",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: BLACK_COLOR,
        },
      }}
    >
        <Nav.Screen  name={"Home"} component={Home}/>
    </Nav.Navigator>)
}

export default SignIn;