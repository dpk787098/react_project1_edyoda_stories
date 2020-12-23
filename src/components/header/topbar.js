import React from 'react';
import styles from './topbar.module.css';
import down from '../../assets/images/down.png';

const TopBar = () => {
    return ( 
        <header className={styles.top_bar}>
            <a href="./topbar.js" className={styles.logo_wrapper}>
                <div className={styles.logo}>EDYODA</div>
                <p className={styles.logo_subtitle}>Stories</p>
            </a>
            <div className={styles.main_cont}>
                <ul className={styles.left_ul}>
                    <li className={styles.explore_cat_title}>Explore Catories <span><img className={styles.down_img} alt="down arrow" src={down} /></span></li>
                </ul>
                <ul className={styles.right_ul}>
                    <p>EdYoda is free learning and knowledge <br />  sharing platform for techies</p>
                    <button>Go To Main Website</button>
                </ul>
            </div>
        </header>
     );
}
 
export default TopBar;