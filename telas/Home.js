import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Card from "../components/Card";


import {
    Heading,
    Center,
    Divider,
} from "native-base";

const textos = [
{
    autor: "Maria Silva",
    titulo: "A Importância da Leitura",
    texto: "A leitura é uma das atividades mais importantes para o desenvolvimento intelectual e emocional de uma pessoa. Através dos livros, podemos viajar para outros mundos, conhecer novas culturas e expandir nossos horizontes. Além disso, a leitura melhora o vocabulário, a escrita e a capacidade de compreensão.",
    categoria: "Educação",
    lastUpdated: "2024-09-15",
    id: 1
},
{
    autor: "João Santos",
    titulo: "Tecnologia e Sociedade",
    texto: "A tecnologia tem transformado rapidamente a forma como vivemos e nos relacionamos. Desde a revolução industrial até a era da inteligência artificial, as inovações tecnológicas têm impactado todos os aspectos da sociedade. É importante refletirmos sobre como podemos usar a tecnologia de forma ética e sustentável.",
    categoria: "Tecnologia",
    lastUpdated: "2024-09-20",
    id: 2
}
];
  

  import CarouselCardsInfo from "../components/CarrousselTextos";

  function Home() {
    return <>
        <ScrollView>

            <CarouselCardsInfo />

            <Center>
                <Divider my="2" 
                    _light={{
                        bg: "violet.800"
                    }} 
                    _dark={{
                        bg: "violet.800"
                    }} w="350" mt={0} mb={1} 
                />
            </Center>
            
            <Center>
            {
                textos.map(texto => (
                    <Card item={texto} index={texto.id}/>
                ))

            }
            </Center>
            
        </ScrollView>
      </>
  }

  export default Home;