import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

function Contact() {
  return (
    <>
        <Breadcrumbs page="Contact" title="Mini's Contact" />

        {/* Page content area start */}
        <section className="content">
            {/* Contact section start */}
            <div className="contact-section">
                <div id="contact" className="contact-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-address-content">
                                    <i className="bi bi-map-pointer"></i>
                                    <h5>address</h5>
                                    <p>1 Hacker Way, Menlo Park,
                                        <br/>California, United States</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-address-content">
                                    <i className="bi bi-phone"></i>
                                    <h5>phone</h5>
                                    <p>+8 125 254 222</p>
                                    <p>+8 125 254 333</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-address-content">
                                    <i className="bi bi-envelop"></i>   
                                    <h5>email</h5>
                                    <ul className="mail-address">
                                        <li><a href="#">company.oxygens@gmail.com</a></li>
                                        <li><a href="#">company.oxygens@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-message">
                                    <form id="mini-contact-form" action="http://habibinfo.com/habibinfo.com/template/mini-preview/mini/php/mail.php" method="POST" className="contact-form">
                                        <div className="form-head fix">
                                            <div className="single-message-content">
                                                <input type="text" name="name" className="text-field" placeholder="Name" Required/>
                                            </div>
                                            <div className="single-message-content">
                                                <input type="email" name="mail" className="text-field" placeholder="Email" Required/>
                                            </div>
                                        </div>
                                        <div className="form-head fix">
                                            <div className="single-message-content">
                                                <input type="text" name="subject" className="text-field" placeholder="Subject" Required/>
                                            </div>
                                            <div className="single-message-content">
                                                <input type="tel" name="phone" className="text-field" placeholder="Phone" Required/>
                                            </div>
                                        </div>
                                        <div className="form-body">
                                            <textarea name="message" className="text-field" placeholder="Message" Required></textarea>
                                        </div>
                                        <button type="submit" className="button btn-white-left btn-white-bg">Send Message</button>
                                    </form>
                                    <p className="mini-send-message"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mini-map"></div>
            </div>
            {/* Contact section end */}
        </section>
        {/* Page content area end */}

    </>
  )
}

export default Contact