import React from "react";
import {
    Box,
    Button,
  } from "native-base";


const botaoSubmit = () => {
    return <Box alignItems="center" mt={8}>
        <Button w="300" onPress={() => console.log("hello world")} >Finalizar</Button>
      </Box>;
  };


  export default botaoSubmit;