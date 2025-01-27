import React, { useState } from 'react';
import './login.scss'

const LoginPage = () => {

    const [ShowPassword, setShowPassword] = useState(false);

    return (
        <div className='et-login-container'>
            <div className='et-login-page'>
                <nav className='et-login-navbar'>
                    <div className='et-logo-content'>
                        <img src="images/svg/eternity-logo.svg" alt='eternity-logo' />
                        <span className='et-logo-name'>Eternity Vision</span>
                    </div>
                    <div className='et-create-acc et-ul-text'>Create an Account</div>
                </nav>
                <div className='et-login-content'>
                    <div className='et-text'>
                        <span className='et-login-text'>Enter your untitled login details</span>
                    </div>
                    <div className='et-social-login'>
                        <button className='et-dynamic-login'>
                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.99 11.2059C20.99 10.3045 20.9186 9.64681 20.764 8.96472H10.7092V13.0329H16.6111C16.4922 14.0439 15.8496 15.5664 14.4217 16.5895L14.4017 16.7257L17.5808 19.2467L17.8011 19.2692C19.8239 17.3569 20.99 14.5432 20.99 11.2059Z" fill="#4285F4" />
                                <path d="M10.7153 21.9773C13.6068 21.9773 16.0342 21.0029 17.8072 19.3221L14.4278 16.6423C13.5235 17.2879 12.3098 17.7386 10.7153 17.7386C7.88337 17.7386 5.47977 15.8263 4.62295 13.1832L4.49736 13.1941L1.19167 15.8129L1.14844 15.9359C2.90948 19.5169 6.52682 21.9773 10.7153 21.9773Z" fill="#34A853" />
                                <path d="M4.6168 13.1303C4.39072 12.4482 4.25988 11.7174 4.25988 10.9622C4.25988 10.207 4.39072 9.47621 4.60491 8.79413L4.59892 8.64886L1.2518 5.98804L1.14229 6.04136C0.416473 7.52737 0 9.19609 0 10.9622C0 12.7284 0.416473 14.397 1.14229 15.883L4.6168 13.1303Z" fill="#FBBC05" />
                                <path d="M10.7153 4.23869C12.7262 4.23869 14.0827 5.12785 14.8562 5.87089L17.8785 2.85018C16.0223 1.08405 13.6068 0 10.7153 0C6.52682 0 2.90948 2.46039 1.14844 6.04135L4.61106 8.79412C5.47977 6.15102 7.88337 4.23869 10.7153 4.23869Z" fill="#EA4335" />
                            </svg>
                            Continue With Google
                        </button>
                    </div>
                    <div className='et-option-line'>
                        <hr className='et-line' />
                        <span className='wkit-wb-line-text'>OR</span>
                        <hr className='et-line' />
                    </div>
                    <div className='et-login-form'>
                        <input className='et-email-field' type='email' placeholder='Email' />
                        <span className='et-pass-container'>
                            <input className='et-pass-field' type={ShowPassword ? 'text' : 'password'} placeholder='Password' />
                            {
                                !ShowPassword ?
                                    <svg className='et-eye-svg' onClick={() => {setShowPassword(!ShowPassword)}} xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                        <path d="M0.583333 6C0.583333 6 2.91667 1.33333 7 1.33333C11.0833 1.33333 13.4167 6 13.4167 6C13.4167 6 11.0833 10.6667 7 10.6667C2.91667 10.6667 0.583333 6 0.583333 6Z" stroke="#C0C0E0" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7.75C7.9665 7.75 8.75 6.9665 8.75 6C8.75 5.0335 7.9665 4.25 7 4.25C6.0335 4.25 5.25 5.0335 5.25 6C5.25 6.9665 6.0335 7.75 7 7.75Z" stroke="#C0C0E0" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    :
                                    <svg className='et-eye-svg' onClick={() => {setShowPassword(!ShowPassword)}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M10.465 10.465C9.46785 11.2251 8.25365 11.6462 7 11.6667C2.91667 11.6667 0.583336 7 0.583336 7C1.30894 5.64777 2.31533 4.46636 3.535 3.535M5.775 2.47334C6.17653 2.37935 6.58762 2.33237 7 2.33334C11.0833 2.33334 13.4167 7 13.4167 7C13.0626 7.66244 12.6403 8.2861 12.1567 8.86083M8.23667 8.23667C8.07646 8.4086 7.88326 8.54651 7.66859 8.64216C7.45393 8.7378 7.22219 8.78924 6.98722 8.79338C6.75225 8.79753 6.51885 8.7543 6.30094 8.66629C6.08304 8.57827 5.88509 8.44727 5.71891 8.28109C5.55274 8.11491 5.42173 7.91697 5.33372 7.69906C5.2457 7.48116 5.20248 7.24776 5.20662 7.01278C5.21077 6.77781 5.2622 6.54608 5.35785 6.33141C5.45349 6.11675 5.5914 5.92355 5.76334 5.76334" stroke="#C0C0E0" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M0.583336 0.583332L13.4167 13.4167" stroke="#C0C0E0" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                            }
                        </span>
                        <span className='et-remember-me'>
                            <input type="checkbox" className='et-check-box' id='et-rememberMe'/>
                            <label htmlFor='et-rememberMe' className='et-remember-label'>Remember Me</label>
                        </span>
                    </div>
                    <div className='et-login-btn-container'>
                        <button className='et-pink-btn et-login-btn'>Login</button>
                    </div>
                </div>
            </div>
            <div className='et-login-img'>
                <span className='et-main-logo'>
                    <img src="images/svg/eternity-logo.svg" alt='eternity-logo' />
                </span>
                <span className='et-logo-alt-text'>
                    Extend Your Design Capacity with
                    <br />
                    Eternity Vision
                </span>
            </div>
        </div>
    )
}

export default LoginPage;
