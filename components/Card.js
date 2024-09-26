import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native"
import moment from "moment/moment";

export const SLIDER_WIDTH = Dimensions.get('screen').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

import {
    Text,
    HStack,
    Heading,
    Box,
    Image,
    AspectRatio,
    Center,
    Stack,
    Divider,
  } from "native-base";

  
const Card = ({ item, index }) => {

    return <Box alignItems="center" mt={1} key={index}>
        <Box maxW="100%"  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}shadow={6}>
          <Box>
            <AspectRatio w="100%" ratio={55 / 9}>
              <Image source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }} alt="image" />
            </AspectRatio>
            <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              {item.categoria}
            </Center>
          </Box>
          <Stack p="3" space={1}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {item.titulo}
              </Heading>
              <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                {item.autor}
              </Text>
            </Stack>
            <Text fontWeight="400" numberOfLines={2} ellipsizeMode="tail" >
              {item.texto}
            </Text>

            <Divider  _light={{
              bg: "muted.800"
              }} _dark={{
              bg: "muted.800"
              }} w="100%" mt={1.5} mb={0.5} style={{opacity: 0.7}} 
            />

            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  Last updated: { moment(item.LastUpdated).format('DD/MM/YYYY') }
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>;
  };

  export default Card;