import React from 'react'
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout'
import { env } from 'yargs';

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });


function Paypal(){

    onApprove(data, actions) {
        return actions.order.capture();
      }
    return(
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    )
}

    
