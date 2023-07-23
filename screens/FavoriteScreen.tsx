import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {useSelector, useDispatch} from "react-redux"
import React, {useState, useEffect} from 'react'
import PhotoCell from '../components/PhotoCell'
import { FlashList } from "@shopify/flash-list";
import Menu from "../components/Tabs"
import styled from 'styled-components/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'

const Container = styled.SafeAreaView`
   background-color: #b7410e;
   height: 100%;
`

const FlashListFavoriteContainer = styled.View`
   justify-content: center;
   height: 100%;
   width: 100%;
   background: #ffffff;
`

const FavoriteScreen = (props) => {
  console.log("FavoriteScreen Render")
  const navigation = useNavigation();
  const photo = useSelector((state)=> state["favoriteElement"].favoriteElement)
  let photos = []
  photo.map((item) => { 
    photos.push(item)
  })
  
  return (
    <Container>
      <FlashListFavoriteContainer>
       <FlashList 
        data = {photos}
        renderItem = {({item}) => {
          return <PhotoCell item={item}   />;
        }}
        estimatedItemSize={350}
        numColumns= {2}
       />
     </FlashListFavoriteContainer>
    </Container>
  )
}

export default FavoriteScreen