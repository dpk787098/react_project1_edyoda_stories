import React from 'react';
import './footer_component.css';
import EmailLogo from '../../assets/images/email-white-logo.svg';
import LocationLogo from '../../assets/images/location-pin.svg';
import TwitterLogo from '../../assets/images/twitter-white-icon.svg';
import FacebookLogo from '../../assets/images/facebook_logo.png';
import LinkedInLogo from '../../assets/images/linkedIn_logo.png';

const  FooterComponent= () => {
 return ( 
     <footer className="footer_wrap">
         <div className="footer_cols">
             <div className="footer_column">
                 <h3 className="footer_title">EDYODA</h3>
                 <a className="footer_item" href="./about-us">About Us</a>
                 <a className="footer_item" href="./contact-us">Contact Us</a>
                 <a className="footer_item" href="./terms_of_use">Terms of use</a>
                 <a className="footer_item" href="./privacy_policy">Privacy Policy</a>
             </div>
             <div className="footer_column">
                 <h3 className="footer_title">RESOURCES</h3>
                 <a className="footer_item" href="./courses" >Courses</a>
                 <a className="footer_item" href="./learning_videos" >Learning Videos</a>
                 <a className="footer_item" href="./educators" >Educators</a>
                 <a className="footer_item" href="./edyoda_stories" >Edyoda Stories</a>
                 <a className="footer_item" href="./university" >University</a>
            </div>
             <div className="footer_column">
                <h3 className="footer_title">FOR ENTERPRISES</h3>
                 <a className="footer_item" href="./train_your_employees" >Train Your Employees</a>
                 <h3 className="footer_title">QUICK LINKS</h3>
                 <a className="footer_item" href="./learn_and_more" >Learn and Earn</a>
                 <a className="footer_item" href="./become_a_learning_enabler" >Become a Learning-Enabler</a>
                 <a className="footer_item" href="./tips_for_learning_enabler" >Tips for Learning-Enabler</a>
                 <a className="footer_item" href="./request_new_topic" >Request New Topic</a>
             </div>
             <div className="footer_column">
                <h3 className="footer_title">CONNECT</h3>
                <a className="footer_item" href="./address">
                    2nd Floor #188, Survey No. - 123/1,
                    <br /> 
                    Incubes Building Next to McDonalds,
                    <br />
                    ITPL Main Rd, Brookefield,
                    <br />
                    Bengaluru, Karnataka-560037,
                    <br />
                    India
                </a>
                <a className="footer_item" href="./email">
                    <img src={EmailLogo} alt="email logo" />
                    hello@edyoda.com
                </a>
                <div className="social_icon_wrapper">
                    <a href="./location">
                        <img className="social_logo" alt="location logo" src={LocationLogo} />
                    </a>
                    <a href="./twitter">
                        <img className="social_logo" alt="twitter logo" src={TwitterLogo} />
                    </a>
                    <a href="./facebook">
                        <img className="social_logo" alt="facebook logo" src={FacebookLogo} />
                    </a>
                    <a href="./linkedin">
                        <img className="social_logo" alt="linkedin logo" src={LinkedInLogo} />
                    </a>
                </div>
                <a className="footer_item" href="./trademark">
                    © 2020
                    <br /> 
                    zekeLabs Technologies Private Limited
                </a>
             </div>
         </div>
     </footer>
  );
};
 
export default FooterComponent;