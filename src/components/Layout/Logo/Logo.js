import React from 'react';
import styles from './Logo.module.css';
import burgerLogo from '../../../assets/burger-logo.png';

const Logo = props => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt='burger-logo' />
        </div>
    )
}

export default Logo;