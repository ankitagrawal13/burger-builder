import React from 'react';
import styles from './BuildControl.module.css'

const buildControl = props => {

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>

            <button
                className={styles.More}
                onClick={props.addHandler}
            >Add</button>

            <button
                className={styles.Less}
                disabled={!props.canRemoveStatus}
                onClick={props.removeHandler}
            >Remove</button>
        </div>
    )
}

export default buildControl;