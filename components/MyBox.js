import React, { useState, useEffect } from "react";


import {
    Text,
    HStack,
    Divider,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    Box,
    Center,
    LinearGradient,
  } from "native-base";

const Caixa = () => {
    return <Box bg={{
      linearGradient: {
        colors: ['lightBlue.300', 'violet.800'],
        start: [0, 0],
        end: [1, 0]
      }
    }} p="12" rounded="xl" _text={{
      fontSize: 'md',
      fontWeight: 'medium',
      color: 'warmGray.50',
      textAlign: 'center'
    }}>
        This is a Box with Linear Gradient
      </Box>;
  };
  
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };
  
  function MyBox() {
    return <NativeBaseProvider config={config}>
        <Center flex={1} px="3">
          <Caixa />
        </Center>
      </NativeBaseProvider>;
  }
  
  export default MyBox;