import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../Store/cart-context';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  console.log('calling cart item',props)

  const cartItemRemoveHandler = (id) => { 
    // console.log('here',id)
    // console.log(cartCtx.removeItem)
    cartCtx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item)
  };

  let totalAmount = 0;
  cartCtx.items.forEach(item => 
        totalAmount += (Number(item.price) * Number(item.quantity))
        )
  totalAmount = totalAmount.toFixed(2);

  const mergedItems = [];
  cartCtx.items.forEach(item => {
    const existingItem = mergedItems.find(
      mergedItem => mergedItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity = Number(existingItem.quantity) + Number(item.quantity);
    } else {
      mergedItems.push({ ...item });
    }})

  const cartItems = (<ul>
     {mergedItems.map((item) =>
    (<CartItem
              key={item.quantity+item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onRemove={() => cartItemRemoveHandler(item.id)}
              onAdd={()=>cartItemAddHandler({ ...item, quantity: 1 })}
      />))
    }</ul>)
  
  

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {<button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;