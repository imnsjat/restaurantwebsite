import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import CartContext from '../../Store/cart-context';
import { useContext } from 'react';


const MealItemForm = (props) =>{
    const cartCtx = useContext(CartContext);
    const addItem = (event) =>{
        event.preventDefault()
        const quantity = document.getElementById('amount_'+props.id).value
        cartCtx.addItem({...props.item , quantity:quantity})


    }
    return (
        <form className={classes.form}>
            <Input label="Quantity" input={{id:'amount_'+props.id , type:"number" , min:1 , defaultValue:1}}/>
            <button type="submit" onClick={addItem}>+Add</button>
        </form>
    )
}
export default MealItemForm;