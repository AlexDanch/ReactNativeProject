import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native'
import { addFavoriteElement,  deleteFavoriteElement } from "../redux/slice"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import {useSelector, useDispatch} from "react-redux"
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import React, {useState} from 'react'

import { addLikedId, deleteLikedId } from '../redux/likesSlice'

const screenWidth = Dimensions.get('window').width
const fortyFivePercentWidth = (40 * screenWidth) / 100
const margin = (5 * screenWidth) / 100;

const CustomView = styled.View`
   height: 190px;
`

const CustomImage = styled.Image`
  width: 100%;
  height: 100%;
`
type photoProps = {
  item: {
    isLiked: boolean
    id: number
    url: string
    title: string
  }
}

const PhotoCell = (props: photoProps) => {
  let isLiked = false
  let likedPhotos = useSelector((state) => state["likes"]["likedId"])
  let elementId = props["item"]["id"]

  if (likedPhotos.includes(elementId)) {
    isLiked = true
  }
 
  const dispatch = useDispatch()

  const onHeartPress = () =>{
    let togleLike = likedPhotos.includes(props["item"].id)
    if (togleLike) {    
      onDislikedPressed()
     }else {
      onLikePressed()
    }
  }

  const onLikePressed = () => {
    dispatch(addLikedId(props.item.id))
    dispatch(addFavoriteElement(props.item)) 
  }

  const onDislikedPressed = () => {
    dispatch(deleteFavoriteElement(props.item))
    dispatch(deleteLikedId(props.item.id))
  }

  return (
    <CustomView 
      style = {{width: fortyFivePercentWidth, marginLeft: margin, marginTop: margin  }}
    >
      <CustomImage
        source={{uri: props.item.url}}
        style = {{width: fortyFivePercentWidth }}
      />
     
      <View style={{position:'absolute', top: 145, left: 100}}>
       <TouchableOpacity onPress={onHeartPress}
      >
        <FontAwesome 
          name="heart" 
          size={40} 
          color={isLiked ? "#dc143c": "#ffffff"}
         />
         </TouchableOpacity>
        </View>
      <Text>{props.item.title}</Text>
    </CustomView>
  )
}

export default PhotoCell