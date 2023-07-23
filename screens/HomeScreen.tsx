import { View, Text, Image, SafeAreaView, TextInput, ScrollView, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {useSelector, useDispatch} from "react-redux"
import SearchBar from '../components/SearchBar';
import { FlashList } from "@shopify/flash-list";
import filter from "lodash.filter"

import styled from 'styled-components/native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import PhotoCell from '../components/PhotoCell'
import Menu from "../components/Tabs"

import { RootStackParams } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Container = styled.SafeAreaView`
    background: #F7F7FF;
`

const SearchView = styled.View`
     background: #d3d3d3;
     height: 7%;
     align-items: center;
     flex-direction: row;
     padding-left: 17px;
     gap: 5px;
`

const FlashListContainer = styled.View`
   justify-content: center;
   height: 93%;
   width: 100%;
   background: #ffffff;
`

const HomeScreen = (props) => {
  console.log("homeScreenRerender")
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [photos, setPhotos] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [photoFiltr, setFiltrPhotos] = useState([])

  const url = "https://jsonplaceholder.typicode.com/photos?albumId=1"
  useEffect(() => {
    fetch(url)
    .then(response => {
      response.json()
    .then(data => {
     setPhotos(prevData => data)
     setFiltrPhotos(prevFilt => data)
    })
   })

  }, [])

  const contains = ({title}, query) => {
    let contains = title.includes(query)
    return contains
  }
 function setHSearchQuery(query) {
   if (query == "") {
    setPhotos(prevPhotos => photoFiltr)
   }
    filerDataSearch(query)
 }

 function filerDataSearch(query) {
  let photosCloneFiter = []
  let formatedQuery = query.toLowerCase()
  photoFiltr.forEach(element => photosCloneFiter.push(element))

  let filteredData = filter(photosCloneFiter, (photo) => {
   return contains(photo, formatedQuery)
  }) 
  setPhotos(preveousData => filteredData)
 }
  
  return (
  <Container>
     <SearchBar onSearchQuery={setHSearchQuery}/>
    <FlashListContainer>
      <FlashList 
        data = {photos}
        renderItem = {({item}) => {
          return <PhotoCell item={item}  />;
        }}
        estimatedItemSize={350}
        numColumns= {2}
      />
     </FlashListContainer>
  </Container>
  )
}


export default HomeScreen;