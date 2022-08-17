import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure MergePlan!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                {/* <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email"
                            className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div> */}
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        {/* <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link> */}
                        <p>ITs</p>
                        <p>_Back</p>
                        <p>IT Eunseo Go</p>
                        <p>IT Chayeon Han</p>
                        <p>_Front</p>
                        <p>IT Hyowon Lee</p>
                        <p>IT Dayoung Choi</p>
                    </div>
                    <div className='footer-link-items'>
                        {/* <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link> */}
                        <h2>Belong To</h2>
                        <p>SookMyung Women's University</p>
                        <p>SOLUX</p>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Account</h2>
                        <p>You can check your income, expense<br></br>for using account page</p>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Planner</h2>
                        <p>You can manage your assets<br></br>with plan</p>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            MergePlan <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">MergePlan © 2022</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer