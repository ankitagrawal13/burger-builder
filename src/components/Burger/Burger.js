import React from 'react';
import styles from "./Burger.module.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    let burgerIngredients = [];

    burgerIngredients
        = Object
            .keys(props.ingredients)
            .map(ingName => {
                return [...Array(props.ingredients[ingName])]
                    .map((_, index) => {
                        return <BurgerIngredient key={ingName + index} type={ingName} />
                    });
            })
            .reduce((result, current) => result.concat(current), []);

    if (burgerIngredients.length === 0) {
        burgerIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {burgerIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;