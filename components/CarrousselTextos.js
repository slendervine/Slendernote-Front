import React, { useState, useEffect } from "react";
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { SLIDER_WIDTH, ITEM_WIDTH } from './Card'
import api          from "../services/api";
import Card from "./Card";
import { Box, Badge, Text } from "native-base";


const CarouselCards = () => {

  const isCarousel          = React.useRef(null)
  const [index, setIndex]   = React.useState(0)
  const [textos, setTexto]  = useState({});

  useEffect(() => {

    api.get('textos').then(({data}) => {
      setTexto(data)
    });

  }, [])



  return (
    
      <>

      <Text>entrou aq</Text>
      <Badge rounded="full" colorScheme="info" variant="default" alignSelf="center" mt={8} 
        _text={{
          fontSize: 18
        }}> Recently Updated Texts
      </Badge>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={textos}
        renderItem={Card}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      />
       
      <Pagination
        dotsLength={textos.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />

        </>
   
  )
}


export default CarouselCards