import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import CardInfo from './Card'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = (props) => {

  return (
        <CardInfo 
        textoAutor={props.dataTexto.autor} 
        textoTitulo={props.dataTexto.titulo}
        textoText={props.dataTexto.texto}
        textoCategoria={props.dataTexto.categoria}
        textoLastUpdated={props.dataTexto.lastUpdated}
      />
  )
}

export default CarouselCardItem