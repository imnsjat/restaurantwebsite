import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../Store/cart-context'

const HeaderCartButton = (props)=>{
    const cartCtx = useContext(CartContext);
    let noOfOrderItems = 0;
    cartCtx.items.forEach(item => 
        noOfOrderItems += Number(item.quantity)
        )
    return(
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.Icon}><CartIcon/></span>
        <span>Cart</span>
        <span className={classes.badge}>
            {noOfOrderItems}
            </span>
        </button>
    )
}
export default HeaderCartButton;