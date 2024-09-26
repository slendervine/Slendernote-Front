import React from "react";
import { FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


import {
  HStack,
  StatusBar,
  Center,
  Box,
  IconButton,
  NativeBaseProvider,
  Text,
} from "native-base";

function AppBar() {
  return <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box  bg={{
      linearGradient: {
        colors: ['violet.800', 'lightBlue.300'],
        start: [0, 0],
        end: [1, 0]
      }
    }} />

      <HStack bg={{
      linearGradient: {
        colors: ['violet.800', 'lightBlue.300'],
        start: [0, 0],
        end: [1, 0]
      }
    }}    justifyContent="space-between" alignItems="center" w="100%" maxW="600">
        <HStack alignItems="center">
          <IconButton icon={<FontAwesome5 name="home" size={24} color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Slendernote
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Ionicons   name="list"             size={24} color="black" />} />
        </HStack>
      </HStack>
    </>;
}

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

function AppBarComplete() {
  return <NativeBaseProvider config={config}>
    <Center>
      <AppBar />
    </Center>
    </NativeBaseProvider>;
}

export default AppBarComplete;