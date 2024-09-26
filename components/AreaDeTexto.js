import React from "react";
import {
  TextArea,
  Heading,
} from "native-base";

const AreaDeTexto = () => {
  return (
  <>
  <Heading size="sm">Escreva seu texto</Heading> 
  <TextArea shadow={2} h={400} w="300" 
  _light={{
    placeholderTextColor: "trueGray.700",
    bg: "coolGray.100",
    _hover: {
      bg: "coolGray.200"
    },
    _focus: {
      bg: "coolGray.200:alpha.70"
    }
  }} _dark={{
    bg: "coolGray.800",
    _hover: {
      bg: "coolGray.900"
    },
    _focus: {
      bg: "coolGray.900:alpha.70"
    }
  }} />
  </>
)
};

  export default AreaDeTexto;