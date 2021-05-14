import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Nav from '../Nav';

const Header = () => {
    const [scrollClass, setScrollClass] = useState('');
    const handleScroll = () => {
        setScrollClass(window.scrollY > 0 ? styles.scrolled : '');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container + ' ' + scrollClass}>
            <div>Lakewinds Legacy</div>
            <div className={styles.nav_container}>
                <Nav />
            </div>
        </div>
    )
}

export default Header;
