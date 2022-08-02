import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure mergeplan!
                </p>
                {/* <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p> */}
                {/* <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email"
                            className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div> */}
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <p>ITs</p>
                        <p>_Back</p>
                        <p>IT Eunseo Go</p>
                        <p>IT Chayeon Han</p>
                        <p>_Front</p>
                        <p>IT Hyowon Lee</p>
                        <p>IT Dayoung Choi</p>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Belong To</h2>
                        <p>SookMyung Women's University</p>
                        <p>SOLUX</p>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
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
                        <Link class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer