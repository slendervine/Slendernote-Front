import React, { useState, useEffect  } from "react";
import { StyleSheet } from 'react-native';
import { Ionicons, AntDesign, Octicons } from '@expo/vector-icons'; 

import {
    Text,
    HStack,
    IconButton,
    Switch,
    useColorMode,
    NativeBaseProvider,
    Icon,
    Box,
    Center,
    Stagger,
    useDisclose,
    MaterialIcons,
    MaterialCommunityIcons,
  } from "native-base";

const StaggerOptions = () => {
    const {
      isOpen,
      onToggle
    } = useDisclose();
    return <Center style={styles.touchableOpacityStyle}>
        <Box alignItems="center" minH="220">
          <Stagger visible={isOpen} initial={{
          opacity: 0,
          scale: 0,
          translateY: 34
        }} animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }} exit={{
          translateY: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}>

            <Text>Note</Text>
            <IconButton mb="4" variant="solid" bg="violet.600" colorScheme="violet" borderRadius="full" icon={<Icon as={<Ionicons name="document-outline" size={24} color="white" />} 
                _dark={{
                    color: "warmGray.50"
                }} size="6" name="microphone" color="warmGray.50" />} 
            />

            <Text>Task</Text>
            <IconButton mb="4" variant="solid" bg="violet.600" colorScheme="violet" borderRadius="full" icon={<Icon as={<Octicons name="tasklist" size={24} color="white" />} 
                _dark={{
                    color: "warmGray.50"
                }} size="6" name="video" color="warmGray.50" />} 
            />
        
            <Text>Example</Text>
            <IconButton mb="6" variant="solid" bg="violet.600" colorScheme="violet" borderRadius="full" icon={<Icon as={<AntDesign name="barschart" size={24} color="white" />} size="6" name="photo-library" _dark={{
                color: "warmGray.50"
            }} color="warmGray.50" />} />
            

          </Stagger>
        </Box>
        <HStack alignItems="center">
          <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} colorScheme="black" bg="violet.900" icon={<Icon as={<Ionicons name="add-sharp" size={24} color="white" />} size="6" name="dots-horizontal" color="warmGray.50" _dark={{
          color: "warmGray.50"
        }} />} />
        </HStack>
      </Center>;
  };

const styles = StyleSheet.create({
    touchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 150,
    }
});

  export default StaggerOptions;