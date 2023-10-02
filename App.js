import React, { useEffect } from 'react';
import styled from 'styled-components';
import auth from '@react-native-firebase/auth';

export default function App() {
  useEffect(()=> {console.log(auth().currentUser)},[])
  return null;
}
