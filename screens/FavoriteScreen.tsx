import { View, Text, SafeAreaView } from 'react-native'
import {useSelector, useDispatch} from "react-redux"
import React, {useState, useEffect} from 'react'
import { FlashList } from "@shopify/flash-list"
import PhotoCell from '../components/PhotoCell'
import styled from 'styled-components/native'
import Menu from "../components/Tabs"

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
  let photo = useSelector((state)=> state["favoriteElement"].favoriteElement)
  let photos = []
  photo.map((item) => { photos.push(item) })
  
  return (
    <Container>
      <FlashListFavoriteContainer>
       <FlashList 
        data = {photos}
        renderItem = {({item}) => {
          return <PhotoCell item={item}   />;
        }}
        estimatedItemSize={100}
        numColumns= {2}
       />
     </FlashListFavoriteContainer>
    </Container>
  )
}

export default FavoriteScreen