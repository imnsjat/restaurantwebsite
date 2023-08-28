

import { useState } from 'react';
import CartContext from './cart-context';



const CartProvider = (props) => {
    const[items,setItems] = useState([])



  const addItemToCartHandler = (item) => {
    setItems([...items , item]);
    console.log('here',cartContext.items)
  };


  const removeItemFromCartHandler = (id) => {
    // setItems((prevState) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter((item) => item.quantity > 0);

      console.log(updatedItems)

      setItems(updatedItems);

    //   return {
    //     ...prevState,
    //     items: updatedItems,
    //   };
    // });
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      {/* {console.log('hare',cartContext)} */}
    </CartContext.Provider>
  );
};

export default CartProvider;