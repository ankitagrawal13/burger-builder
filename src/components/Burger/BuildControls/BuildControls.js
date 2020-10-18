import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const CONTROLS = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
]

const buildControls = props => {
    return (
        <div className={styles.BuildControls}>
            <p className={styles.TotalPrice}>
                Your Dream Burger currently costs : ${props.totalPrice.toFixed(2)}
            </p>
            {
                CONTROLS.map(
                    ctrl => <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        canRemoveStatus={props.canRemoveStatus[ctrl.type]}
                        addHandler={() => props.addHandler(ctrl.type)}
                        removeHandler={() => props.removeHandler(ctrl.type)} />)
            }
            <button 
                className={styles.OrderButton}
                disabled={!props.purchasable}
                onClick={props.orderHandler}>
                ORDER NOW
            </button>
        </div>
    )
}

export default buildControls;