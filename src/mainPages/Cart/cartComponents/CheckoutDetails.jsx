import {NavLink} from 'react-router-dom';
import {useCart} from '../../../'


export default function CheckoutDetails(){
  const {cartManager} = useCart()

  return <div className="checkout">Checkout</div>
}
const EmptyCart =()=>{
  return<div className="emptyCart">
  <img src="\assets\mt-cart.png" alt="empty cart"  srcset="" />
  <p >You have no items in your shopping cart.</p>
 <NavLink to='/'><button>Shop Now</button></NavLink> 

  </div>
}

const FilledCart =()=>{
  return (
    <div className="filledCart">
      <div className="cutomerDetails">
       
      </div>
      <div className="orderDetails">
           <h4>Your Order</h4>
           <div className="orderBox">
            <header><span>Product</span><span>Subtotal</span></header>
            .

           </div>
      </div>
         
    </div>
  )
}