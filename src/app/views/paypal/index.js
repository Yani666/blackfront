import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import PaypalBtn from 'react-paypal-checkout';
import './styles.css'
import {createOrder} from '../../services/order-ws.js'


// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Paypal({price, cart}){
  
  

    const onSuccess = async  (payment) =>{
      try{
           const {data}=await createOrder(cart)
           console.log(data)
      }catch(error){
           console.log(error)
      }
      console.log("soy onsuccess",payment)
    }

    const onError = (error) =>{
      console.log("soy error",error)
    }

    const client = {
      sandbox: "ASFqKGt2YLuiWSOBytMMe2_qgjtWaGvsAbx2-JkRc3Hv5QzYJp0dR97_0VzeWVpoCL58gS3AtmKztmC-"
    }


    return(
      <PaypalBtn
         currency="CAD"
         total={price}
        onSuccess={onSuccess}
        onError={onError}
        env="sandbox"
        client={client}
        />

      //   <PayPalButton
      //   createOrder={(data, actions) => createOrder(data, actions)}
      //   onApprove={(data, actions) => onApprove(data, actions)}
      //   onSuccess={onSuccess}
      //   onError={onError}
      // />

    )
    }

  export default Paypal  