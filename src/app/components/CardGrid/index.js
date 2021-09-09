import React, {useState, useEffect} from 'react'
import Cards from '../Cards'
import { getProducts} from '../../services/cardList-ws'
import { Grid, GridItem, Box } from "@chakra-ui/react"


function CardGrid (props){
   
    const[cards, setCards] = useState([])
    const getData = async() =>{
        try{
            const{data}=await getProducts()
            console.log(data)
            setCards(data.products)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
      console.log(cards)
    return(
<Grid templateColumns="repeat(5, 1fr)" gap={6}>
  {cards.map((item, index)=> <Cards key={index} {...item} w="100%" h="10" bg="blue.500" />)}
  
</Grid>
)
}


export default CardGrid