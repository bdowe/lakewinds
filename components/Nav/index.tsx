import { useState, useEffect } from 'react';
import styles from './styles.module.scss';


const Nav = () => {
    return (
        <div className={styles.container}>
            <div>Book</div>
            <div>Contact</div>
        </div>
    );
};

export default Nav;
