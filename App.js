import React, { useState, useEffect } from "react";
import { ScrollView, FlatList }       from "react-native";
import api                            from "./services/api";

import {
  Text,
  HStack,
  Divider,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Badge,
  Center,
} from "native-base";


import EscreverTexto      from "./telas/EscreverTexto";
import AppBarCompleteInfo from "./components/AppBar";
import CardTextos from "./components/Card";
import FooterInfo from "./components/AppFooterIn"; // TODO:  Componente não está renderizando, conferir..
import CarouselCards from "./components/CarrousselTextos"; //Componente está renderizando, apenas precisa ser ajeiitado para tal, assim que surgit uma necessidade
import MyBoxInfo from "./components/MyBox";
import StaggerOptionsInfo from "./components/StaggerOptions";

import TelaHome from "./telas/Home";
import Home from "./telas/Home";




// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};


// extend the theme


export default function App() {

  const [textos, setTexto] = useState([]);

  useEffect(() => {

    api.get('textos').then(({data}) => {
      setTexto(data)
    });

  }, [])


  



  



  return (
    <>
    <NativeBaseProvider>

      <AppBarCompleteInfo/> 
      <TelaHome />
      <StaggerOptionsInfo />

    </NativeBaseProvider>

    </>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
