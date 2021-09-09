import React, {useState, useEffect} from 'react'
import { getProducts} from '../../services/cardList-ws'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  Grid, GridItem,
  InputRightElement
} from "@chakra-ui/react";
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import logo from '../../assets/images/logo.png'
import { FaUserAlt, FaLock } from "react-icons/fa";
import {createProducts, deleteProducts, updateProducts} from "../../services/cardList-ws";
import { TableComponent } from '../../components'



const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
  
 function Uproducts (match, history, location, ...rest) {
     const [productos, setProductos] = useState({})
     const [docs, setDocs] = useState({})
     const[prod, setProd] = useState([])
     const [isEdit, setIsEdit] = useState(false)

     const onSubmit = async(e)=>{
         e.preventDefault()
         try{
             const formData = new FormData()
             const _datos = {...productos, img:docs}
             for (let key in _datos){
               if(key === 'img'){
                 for(let file of Array.from(_datos[key])){
                   formData.append(key, file)
                 }
               }else{
                formData.append(key, _datos[key])
               }
             }
             const submitEvent = ()=>isEdit ? updateProducts(_datos._id,formData) : createProducts(formData)
             const {data} = await submitEvent()
             console.log("holi data",data)
             if(isEdit){
                 const index = prod.findIndex(item=>item._id===data.products._id)
                 const newProd =[...prod]
                 newProd[index] = data.products
                 setProd(newProd)
                 setIsEdit(false)
             }else{

              setProd([...prod, data.products])

             }
             setProductos({})
            //  history.push("/dashboard")
           
         } catch(error){
             console.log("no se creo el producto correctamente", error.response)
         }
     }

     const editProduct = (product,index_product)=>{
       console.log(product)
       setProductos(product)
       setIsEdit(true)
     }

     const deleteProduct = async (id)=>{
       try{
         const {data} = await deleteProducts(id) 
         const newProd = [...prod]
         setProd(newProd.filter(item=>item._id!=id))
         console.log("holi data delete",data)
       }catch(error){
        console.log("no se elimino", error.response)
       }
       console.log(id)


     }

  const handleUpload = async (e) =>{
    e.preventDefault()

      setDocs(e.target.files )
      console.log(e.target.files) 
  
}
  const handleChange = (e) =>{
      setProductos({...productos,[e.target.name]:e.target.value})
      console.log(e.target.name)
  }

  
    const getData = async() =>{
        try{
            const{data}=await getProducts()
            console.log(data)
            setProd(data.products)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
      console.log(prod)


 
 return(

    <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar src={logo}/>
      <Heading color="#000000">Hola Admin</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form onSubmit={onSubmit}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="#ffff"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                />
                <Input 
                onChange={handleChange} 
                type="title" name="title" 
                placeholder="Producto"
                value={productos.title ? productos.title : ""} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  color="gray.300" 
                />

          <Input 
          onChange={handleChange} 
          type="description" 
          name="description" 
          placeholder="Descripcion" 
          value={productos.description ? productos.description : ""}/>
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  color="gray.300" 
                />
                <Input 
                onChange={handleChange} 
                type="price" 
                name="price" 
                placeholder="Precio"
                value={productos.price ? productos.price : ""} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  color="gray.300" 
                />

           <Input 
           onChange={handleChange} 
           type="categoria" 
           name="categoria" 
           placeholder="Categoria" 
           value={productos.categoria ? productos.categoria : ""}/>
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  color="gray.300" 
                />


    <Input multiple 
    onChange={handleUpload} 
    type="file" 
    name="docs" 
    id="docs" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  color="gray.300" 
                />

                
              </InputGroup>
              <FormHelperText textAlign="right">
                
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              backgroundColor="#C53030"
            >
                {isEdit ? "Editar producto" : "Crear producto"}
            </Button>

            {isEdit&&<Button
              borderRadius={0}
              onClick= {()=>{
                setIsEdit(false)
                setProductos({})
              }}
              variant="solid"
              colorScheme="teal"
              width="full"
              backgroundColor="#C53030"
            >
              Cancelar
            </Button>}
          </Stack>
        </form>
        
      </Box>
      <Stack
            spacing={4}
            p="1rem"
            backgroundColor="#ffff"
            boxShadow="md">
          <TableComponent 
          products={prod}
          editProduct={editProduct} 
          deleteProduct={deleteProduct}
          titles={["articulo", "descripcion", "precio", ""]}/>
      </Stack>
      
      
    </Stack>
  </Flex>
);
};


  export default Uproducts