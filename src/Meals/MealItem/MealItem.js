import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <h3 className={classes.description}>{props.description}</h3>
                <h3 className={classes.price}>${props.price}</h3>
            </div>
            <div>
                <MealItemForm/>
            </div>
        </li>
    )
}

export default MealItem;