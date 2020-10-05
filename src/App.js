import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="contact-page-section">
        <div className="container">
          <div className="sec-title">
            <h2>Let's Get in Touch.</h2>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/*Form Column*/}
              <div className="form-column col-md-8 col-sm-12 col-xs-12">
                <div className="inner-column">
                  {/*Contact Form*/}
                  <div className="contact-form">
                    <form method="post" id="contact-form">
                      <div className="row clearfix">
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea
                            name="message"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <button
                            name="submit"
                            type="submit"
                            class="btn btn-color2 btn-block"
                            data-error-message="Error!"
                            data-sending-message="Sending..."
                            data-ok-message="Message Sent"
                          >
                            <i class="fa fa-paper-plane"></i> Send Message
                          </button>{" "}
                        
                        </div>
                      </div>
                    </form>
                  </div>

                  {/*End Contact Form*/}
                </div>
              </div>
              {/*Info Column*/}
              <div className="info-column col-md-4 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <h2>Headquarters :</h2>
                  <ul className="list-info">
                    <li>
                      <i className="fas fa-globe" />
                      314 Imam Haron road, Landsdowne Cape Town 7780
                    </li>
                    <li>
                      <i className="far fa-envelope" />
                      info@lcstudio.co.za
                    </li>
                    <li>
                      <i className="fas fa-phone" />
                      021 696 4157 <br />{" "}
                    </li>
                  </ul>
                  <ul className="social-icon-four">
                    <li className="follow">Follow us: </li>
                    <li>
                      <a
                        href="https://www.facebook.com/salesianlifechoices/"
                        target="blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/lifechoicesza?lang=en"
                        target="blank"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/salesian-life-choices"
                        target="blank"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa fa-facebook fa-fw" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank">
              <i className="fa fa-twitter fa-fw" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/AMostafaH/" target="_blank">
              <i className="fa fa-linkedin fa-fw" />
            </a>
          </li>
        </ul>
        <p>Made by @LC Studio</p>
      </div>
    </div>
  );
}

export default App;
