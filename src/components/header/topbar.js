import React from 'react';
import './topbar.css';
import down from '../../assets/images/down.png';

const TopBar = () => {
    return ( 
        <header className="top_bar">
            <a href="./topbar.js" className="logo_wrapper">
                <div className="logo">EDYODA</div>
                <p className="logo_subtitle">Stories</p>
            </a>
            <div className="main_cont">
                <ul className="left_ul">
                    <li className="explore_cat_title">Explore Catories <span><img className="down_img" alt="down arrow" src={down} /></span></li>
                </ul>
                <ul className="right_ul">
                    <p>EdYoda is free learning and knowledge <br />  sharing platform for techies</p>
                    <button>Go To Main Website</button>
                </ul>
            </div>
        </header>
     );
}
 
export default TopBar;