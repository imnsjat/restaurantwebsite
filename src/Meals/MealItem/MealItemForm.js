import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
const MealItemForm = (props) =>{
    return (
        <form className={classes.form}>
            <Input label="Quantity" input={{id:"amount" , type:"number"}}/>
            <button type="submit">Add</button>
        </form>
    )
}
export default MealItemForm;