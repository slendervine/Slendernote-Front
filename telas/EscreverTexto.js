import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import {
    Heading,
    VStack,
    Divider,
  } from "native-base";
  
  import BotaoSubmitInfo    from "../components/Inputs/botaoSubmit";
  import TipoTextoInfo      from "../components/Select/TipoTexto";
  import AreaDeTextoInfo    from "../components/AreaDeTexto";

  function EscreverTexto() {
    return <>
            <VStack alignItems="center">

            <Heading  size="sm">Categoria do texto</Heading>

            <TipoTextoInfo/>

            <Divider my="2" _light={{
                bg: "violet.800"
                }} _dark={{
                bg: "violet.800"
                }} w="350" mt={8} mb={8} 
            />
            
            <AreaDeTextoInfo />

            <BotaoSubmitInfo mt={4} />

            </VStack>
      </>
  }

  export default EscreverTexto;