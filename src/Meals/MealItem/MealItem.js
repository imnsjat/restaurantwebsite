import classes from './MealItem.module.css'

const MealItem = (props) => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <h3 className={classes.description}>{props.description}</h3>
                <h3 className={classes.price}>${props.price}</h3>
            </div>
            <div>

            </div>
        </li>
    )
}

export default MealItem;