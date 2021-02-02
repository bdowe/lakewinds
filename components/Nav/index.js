import { useState } from 'react';
import styles from './styles.module.scss';
import MenuIcon from './MenuIcon';


const Nav = () => {
    const [menuClass, setMenuClass] = useState(styles.menu);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggle = () => {
        if (menuOpen) {
            setMenuClass(styles.menu);
        } else {
            setMenuClass(`${styles.menu} ${styles.visible}`);
        }

        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.container}>
            <div className={styles.btn} onClick={(e)=>toggle()}>
                <MenuIcon menuOpen={menuOpen} />
            </div>
            <div className={menuClass}>
                <div className={styles.menuContainer}>
                    <h1>Navigation</h1>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                </div>
            </div>
        </div>
    );
};

export default Nav;