import React, {useState, useEffect} from 'react'
import {getAllSugestion} from '../../services/suggestions-ws'
import {SuggestionCard} from '../../components'
import {Grid} from '@chakra-ui/react'



function Suggestion (){

    const [suggestions, setSuggestions] = useState([])

  const getData = async() =>{
    try{
        const{data}=await getAllSugestion()
        setSuggestions(data.suggestions)
    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    getData()
},[])

    return(

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
  {suggestions.map((item, index)=> <SuggestionCard key={index} {...item} w="100%" h="10" bg="blue.500" />)}
  
</Grid>
    
        )

}

export default Suggestion;

