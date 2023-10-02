import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './navigators/SignIn';
import SignOut from './navigators/SignOut';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=> {
    auth().onAuthStateChanged(user => {
      if(user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    })
  }, [])
  return (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      {isLoggedIn ? <SignIn />: <SignOut />}
    </NavigationContainer>
  </QueryClientProvider>
  );
}
