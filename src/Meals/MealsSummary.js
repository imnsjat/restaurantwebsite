import classes from './MealsSummary.module.css'

const MealsSummary = (props) => {
    return (
        <section 
        className={classes.summary}
        >
            <h2>Delicious Food, Delivered To You</h2>
            <p>Hey there, hungry buddy! Take a gander at our big list of yummy treats. 
                Grab one and have a grand ol' time munching at home. </p>
            <p>
            Our cooks, the kitchen rockstars, use the good stuff and perfect timing to whip up your grub.
             It's like food magic! 🍔🎩🍕
            </p>
        </section>
    )
}

export default MealsSummary;