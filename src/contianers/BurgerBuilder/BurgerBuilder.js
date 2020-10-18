import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/BuildControls/OrderSummary/OrderSummary";

const INGRDIENT_PRICES = {
    salad: 0.1,
    bacon: 0.2,
    meat: 0.3,
    cheese: 0.4
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    }

    canRemoveStatus = {
        salad: false,
        bacon: false,
        meat: false,
        cheese: false
    }

    orderHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    removeBackdropHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    updateInteractiveState = (type, updatedCount) => {
        if (updatedCount > 0) {
            this.canRemoveStatus[type] = true;
        }
        else {
            this.canRemoveStatus[type] = false;
        }
    }

    addIngredientHandler = type => {
        const updatedState = { ...this.state };
        const updatedIngredients = updatedState.ingredients;

        let updatedCount = updatedIngredients[type];
        updatedCount += 1;
        updatedIngredients[type] = updatedCount;

        let updatedTotalPrice = updatedState.totalPrice;
        updatedTotalPrice += INGRDIENT_PRICES[type];

        updatedState.ingredients = updatedIngredients;
        updatedState.totalPrice = updatedTotalPrice;

        updatedState.purchasable = updatedTotalPrice > 0;

        this.updateInteractiveState(type, updatedCount);
        this.setState(updatedState);
    }

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] === 0) {
            return;
        }

        const updatedState = { ...this.state };
        const updatedIngredients = updatedState.ingredients;

        let updatedCount = updatedIngredients[type];
        updatedCount -= 1;
        updatedIngredients[type] = updatedCount;

        let updatedTotalPrice = updatedState.totalPrice;
        updatedTotalPrice -= INGRDIENT_PRICES[type];

        updatedState.ingredients = updatedIngredients;
        updatedState.totalPrice = updatedTotalPrice;

        updatedState.purchasable = updatedTotalPrice > 0;

        this.updateInteractiveState(type, updatedCount);
        this.setState(updatedState);
    }

    orderCancelHandler = () => {
        this.removeBackdropHandler();
    }

    orderContinueHandler = () => {
        this.removeBackdropHandler();
    }

    render() {
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    removeBackdropHandler={this.removeBackdropHandler}>
                    <OrderSummary 
                        totalPrice={this.state.totalPrice.toFixed(2)}
                        ingredients={this.state.ingredients}
                        orderCancelHandler={this.orderCancelHandler} 
                        orderContinueHandler={this.orderContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    canRemoveStatus={this.canRemoveStatus}
                    purchasable={this.state.purchasable}
                    orderHandler={this.orderHandler}
                    addHandler={this.addIngredientHandler}
                    removeHandler={this.removeIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;