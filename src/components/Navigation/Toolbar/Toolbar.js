import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Layout/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <NavigationItems />
        </header>
    )
}

export default Toolbar;