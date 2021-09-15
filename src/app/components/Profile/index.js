import React, {useState, useEffect} from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import { getMyOrder } from '../../services/order-ws'
import {TableComponent} from '../../components'

function Profile (){
  const [orders, setOrders] = useState([])
  const getData = async() =>{
    try{
      const{data}=await getMyOrder()
      console.log(data)
      setOrders(data.orders)

    }catch(error){
      console.log(error)
    }
  }   

  useEffect(()=>{
    getData()
  },[])
    return(

        <TableComponent
        type="order"
        products={orders}
        titles={["articulos","total" ]}/>

    )

}

export default Profile




