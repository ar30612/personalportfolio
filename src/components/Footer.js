import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
import React from 'react'

function Footer() {
    return (
        <div className='main-footer bg-light'>
            <div id='horizontal-line' className='line'></div>
            <div className='containerFooter'>
                <div id='rowFooter' className='row'>
                    {/* Column 1 */}
                    <div className='col-md-3 col-sm-6'>
                        <h3>Phone</h3>
                        <ul className='list-unstyled'>
                            <li>123-456-7890</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className='col-md-3 col-sm-6'>
                        <h3>Email</h3>
                        <ul className='list-unstyled'>
                            <li>ar30612@gmail.com</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className='col-md-3 col-sm-6 followMe'>
                        <h3>Follow Me</h3>
                                {/* <a href="https://www.youtube.com/c/jamesqquick" className="youtube social">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a> */}
                                <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a> 
                                <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/learnbuildteach" className="linkedin social">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                    </div>
                    {/* Column 4 */}
                    <div className='footer-copyright col-md-3 col-sm-6'>
                        {/* &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> */}
                        &copy; {new Date().getFullYear()} By Apeksha 
                        <ul className='list-unstyled'>
                            <li>
                                Proudly created with 
                                <a href="https://www.mdbootstrap.com"> ApiTech </a>
                            </li>
                        </ul>
            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

