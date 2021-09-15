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
  const Row = ({type, products, deleteProduct, editProduct}) =>(
  type === "order" ?
    products.map((product,index)=>
    <Tr key={index}>

        <Td>
          {product._products.map((order, index)=>
          <div style={{display:"flex", flexDirection: "column"}} key={index}>
            <span>nombre: {order.title}</span>
            <span>descripcion: {order.description}</span>
            <span>cantidad: {order.cant}</span>
          </div>)}
        </Td>
        <Td>{product.price}</Td>
        <Td> 
    </Td>
    </Tr>
  )
  :
   products.map((product,index)=>
    <Tr key={index}>

        <Td>{product.title}</Td>

        <Td>{product.description}</Td>
        <Td>{product.price}</Td>
        <Td> 
        {editProduct && <Button colorScheme="teal" size="xs" onClick={()=> editProduct(product, index)}>
            Editar
        </Button>}
        {deleteProduct && <Button colorScheme="teal" size="xs" onClick={()=> deleteProduct(product._id)}>
            Borrar
        </Button>}
        </Td>
    </Tr>
  )

  )

  const TableComponent = ({ type, products, titles,editProduct, deleteProduct }) => (

    <Table variant="striped" colorScheme="teal">
  <Thead>
      <Titles titles={titles}/>
 </Thead>
  
  <Tbody>
     <Row 
     type={type}
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

