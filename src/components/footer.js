import { Link } from 'react-router-dom';
import './footer.css';
export default function Footer(){
    return (
        <div className="footer-section pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="text-center">
                        <img src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1726826896/HHO/navbar/hho_logo_s548ea.png" className="footer-section-logo" alt="" />
                        <div className="d-flex flex-row justify-content-center mt-3">
                        <div>
                        <p className="footer-section-top-text mt-4">HHO <br />Helping Hands Organisation <br/>RGUKT RK Valley</p>
                        <p className="footer-section-bottom-text mt-4">Help For The Needy</p>
                        <div className="d-flex flex-row justify-content-center mt-3 d-md-none">
                            <div className="social-media-logo-container">
                                <i className="fa-brands fa-google social-media-logo"></i>
                            </div>
                            <div className="social-media-logo-container ml-2">
                                <i className="fa-brands fa-twitter social-media-logo"></i>
                            </div>
                            <div className="social-media-logo-container ml-2">
                                <i className="fa-brands fa-instagram social-media-logo"></i>
                            </div>
                            <div className="social-media-logo-container ml-2">
                                <i className="fa-brands fa-linkedin social-media-logo"></i>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 d-none d-lg-block">
                    <div className="d-flex flex-column justify-content-end mt-5">
                        <div className="m-auto mt-5">
                            <h1 className="footer-section-head ml-0">Quick Links</h1>
                                <Link to="/about" className="footer-section-bottom-text mr-5">About Us</Link><br/>
                                <Link to="/" className="footer-section-bottom-text mr-5">History</Link><br/>
                                <Link to="/events" className="footer-section-bottom-text mr-5">Events</Link><br/>
                                <Link to="/transactions" className="footer-section-bottom-text mr-5">Transactions</Link><br/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 d-none d-lg-block">
                    <div className="d-flex flex-column justify-content-end mt-5">
                        <div className="m-auto mt-5">
                            <h1 className="footer-section-head ml-0">Quick Links</h1>
                                <Link to="/services" className="footer-section-bottom-text mr-5">Our Services</Link><br/>
                                <Link to="/about" className="footer-section-bottom-text mr-5">Activities and Initiatives</Link><br/>
                                <Link to="/about" className="footer-section-bottom-text mr-5">Our Team</Link><br/>
                                <Link to="/contact" className="footer-section-bottom-text mr-5">Contact Us</Link><br/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 d-none d-lg-block">
                    <div className="d-flex flex-row justify-content-between mt-5">
                        <div className="m-auto mt-5">
                        <h1 className="footer-section-head">Social Media</h1>
                        <div className="social-media-logo-container">
                                <a href='/' className='footer-section-bottom-text'><i className="fa-brands fa-google footer-contact-logo ml-2 mr-3"></i> hho.in </a>
                            </div>
                            <div className="social-media-logo-container ml-2">
                            <a className="footer-section-bottom-text"><i className="fa-solid fa-envelope footer-contact-logo mr-3"></i>hho@rguktrkv.ac.in</a>
                            </div>
                            <div className="social-media-logo-container ml-2">
                                <a href="/" className="footer-section-bottom-text"><i className="fa-brands fa-instagram footer-contact-logo mr-3"></i> hho rgukt</a>
                            </div>
                            <div className="social-media-logo-container ml-2">
                                <a href="/" className="footer-section-bottom-text"><i className="fa-brands fa-linkedin footer-contact-logo mr-3"></i>hho.in</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <hr className="footer-hrule" />
                    <p className="footer-section-copyright"><i className="fa-regular fa-copyright"></i> All Rights reserved by HHO of RGUKT-IIIT, RKV</p>
                </div>
            </div>
        </div>


    </div>
    )
}