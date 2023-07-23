import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Text, View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import React, { useState } from 'react'

const SearchView = styled.View`
     background: #d3d3d3;
     height: 10%;
     margin: 3%;
     width: 94%;
     border-radius: 30px;
     align-items: center;
     flex-direction: row;
     padding-left: 17px;
     gap: 5px;
`

const StyledTextInput = styled.TextInput`
  font-weight: bold;
  font-size: 20px; 
  width: 100%;
`

 const SearchBar = (props) => {
   const [searchQuery, setQuery] = useState("")

   const handleSearch = (query) => {
    setQuery(previousQuery => query)
    props.onSearchQuery(query)
   }

    return (
      <SearchView>
         <FontAwesome name="search" size={22} color="#808080" />
         <StyledTextInput 
          placeholder="Search" 
          clearButtonMode="always"
          autoCapitalize="none"
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
         />
      </SearchView >
    )
  
}

export default SearchBar