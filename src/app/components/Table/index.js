import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Button,
    TableCaption,
  } from "@chakra-ui/react"


  const Titles = ({titles})=>(
   
    <Tr>
        {titles.map((title,index)=><Th key={index}> {title}</Th>)}
      
    </Tr>
  
  )
  const Row = ({products, deleteProduct, editProduct}) =>(
    products.map((product,index)=>
    <Tr key={index}>

        <Td>{product.title}</Td>

        <Td>{product.description}</Td>
        <Td>{product.price}</Td>
        <Td> 
        <Button colorScheme="teal" size="xs" onClick={()=> editProduct(product, index)}>
            Editar
        </Button>
        <Button colorScheme="teal" size="xs" onClick={()=> deleteProduct(product._id)}>
            Borrar
        </Button>
        </Td>

   
  </Tr>
  ))
  const TableComponent = ({ onClick, products, titles,editProduct, deleteProduct }) => (

    <Table variant="striped" colorScheme="teal">
  <Thead>
      <Titles titles={titles}/>
 </Thead>
  
  <Tbody>
    <Row 
    products={products} 
    editProduct={editProduct} 
    deleteProduct={deleteProduct} />
    
    
  </Tbody>
  <Tfoot>
   <Titles titles={titles}/>
  </Tfoot>
</Table>
      
  )

  export default TableComponent

