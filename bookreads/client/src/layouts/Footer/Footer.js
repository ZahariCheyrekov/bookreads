import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <section className="footer__section">
                    <ul className="footer__ul">
                        <li className="footer__ul--li">
                            <ul className="footer__ul--inner">
                                <h4 className="footer__ul--title">
                                    COMPANY
                                </h4>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        About us
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Careers
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Terms
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Privacy
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Interesd Based Ads
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Ad Preferences
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Help
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="footer__ul--li">
                            <ul className="footer__ul--inner">
                                <h4 className="footer__ul--title">
                                    WORK WITH US
                                </h4>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Authors
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Advertise
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        Authors & ads blog
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link">
                                        API
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="footer__ul--li">
                            <h4 className="footer__ul--title">
                                CONNECT
                            </h4>
                            <ul className="footer__ul--inner footer__ul--icons">
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link footer__li--icon">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link footer__li--icon">
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link footer__li--icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                </li>
                                <li className="footer__li--item">
                                    <Link to="/" className="footer__li--link footer__li--icon">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section className="footer__section">
                    <article className="footer__article--stores">
                        <img src="https://s.gr-assets.com/assets/app/badge-ios-desktop-homepage-6ac7ae16eabce57f6c855361656a7540.svg" alt="App Store" />
                        <img src="https://www.pngmart.com/files/10/Get-It-On-Google-Play-Transparent-PNG.png" alt="Google Play" />
                    </article>
                    <p className="footer__section--paragraph">
                        &copy; {new Date().getFullYear()} Bookreads, Inc.
                    </p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;