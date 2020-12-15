import React from 'react';
import styles from './Head.module.css';

import logo from './logo.svg';

const Header = () => {
    return (
        <div className={styles.container}>
           <div className={styles.logo}>
               <img src={logo} alt={'logo'} />
           </div>
           <div className={styles.title}>
               RUBIX RACING
           </div>
        </div>
    )
}

export default Header
