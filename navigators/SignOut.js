import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import Join from "../Screens/Join";
import {BLACK_COLOR} from "../colors"

const Nav = createNativeStackNavigator();

const SignOut = () => {
    return (
        <Nav.Navigator screenOptions={{
            presentation: "modal",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: BLACK_COLOR,
            },
          }}>
            <Nav.Screen name={"Login"} component={Login}/>
            <Nav.Screen name={"Join"} component={Join}/>
        </Nav.Navigator>
    )
}

export default SignOut;