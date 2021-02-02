import { useState, useEffect } from 'react';

import styles from './styles.module.scss';

const MenuIcon = ({ menuOpen }) => {
    const [menuClass, setMenuClass] = useState(styles.container);

    useEffect(() => {
        setMenuClass(menuOpen ? `${styles.container} ${styles.open}` : styles.container);
    }, [menuOpen]);

    return (
        <div className={menuClass}>
            <div className={`${styles.bar} ${styles.bar1}`}></div>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
            <div className={`${styles.bar} ${styles.bar3}`}></div>
        </div>
    );
};

export default MenuIcon;