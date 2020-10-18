import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    return (
        <button
            className={[styles.Button, styles[props.btnType]].join(' ')}
            onClick={props.clickHandler}>
            {props.children}
        </button>
    )
}

export default Button;