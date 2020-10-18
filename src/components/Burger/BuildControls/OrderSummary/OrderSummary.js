import React from 'react';
import Aux from '../../../../hoc/Auxiliary';
import Button from '../../../UI/Modal/Button/Button';

const OrderSummary = props => {
    const addedItems
        = Object.keys(props.ingredients)
            .map(ingr => <li key={ingr}>{ingr} : {props.ingredients[ingr]}</li>);

    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>You have added the following ingrdients to your Burger : </p>
            <ul>
                {addedItems}
            </ul>
            <h4>Total Price : {props.totalPrice}</h4>
            <p>Continue with Checkout ?</p>
            <Button
                btnType='Danger'
                clickHandler={props.orderCancelHandler}>CANCEL</Button>
            <Button
                btnType='Success'
                clickHandler={props.orderContinueHandler}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary;