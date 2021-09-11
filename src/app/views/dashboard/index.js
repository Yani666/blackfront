import React,{useState} from "react";
import { Navbar, Cards, Footer, CardGrid } from "../../components";

    

function Dashboard(){
    const[car,setCar] = useState({
        _owner:{},
        price:0,
        _products:[]
        
    })

    const addToCar = (product,type) =>{
        let newCar={...car,_products:[...car._products,product]}
        

         const allProd = newCar._products.reduce((acc,current)=>{
        //     //buscamos si existe el elemento dentro del arreglo acc
         if( acc.find((item)=> item._id === current._id) ){
        //     //si existe buscuscamos su posicion
         const indexProd = acc.findIndex((item)=> item._id === current._id)
           acc[indexProd].cant = acc[indexProd].cant + 1
           acc[indexProd].totalXcant = Number(acc[indexProd].totalXcant) + Number(current.price)
            return acc
         }else{
        //     //si no solo agramos al carrito los valores previos pero modificamos el current agradandole las llaves de total por procuto y cantidad inicializada en 1
         return [...acc,{...current, cant: current.cant ? current.cant : 1,  totalXcant: current.totalXcant ?  current.totalXcant : current.price }]
         }
         },[]) 
         const totalCart = allProd.reduce((acc,prodCurrent)=>{
            return Number(prodCurrent.totalXcant) + acc
            }, 0); 
         newCar.price=totalCart
         newCar._products=allProd
             setCar(newCar)
             localStorage.setItem("carrito",JSON.stringify(newCar))

        
  

    }

   
    
    
      
    console.log("hay cosas en el carrito", car)

    return (
        <div>
        <CardGrid
        addToCar={addToCar}
        />

        <Footer/>
        
        </div>
    )
}

export default Dashboard;