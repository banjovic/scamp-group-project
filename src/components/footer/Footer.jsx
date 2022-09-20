import React, { Fragment } from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer bg-darkGrey container mx-auto px-5">
        <div className="footer-top">
          <div className="left">
            <h1 className="text-gold mt-2">Scribbs</h1>
            <h2 className="text-lightGrey">
              Hair that shines so bright! So Bright!!
            </h2>
            <p className="text-lightGrey">
              Visiting our place will be a whole lot of different experience.
            </p>
          </div>

          <div className="footer-other-half">
            <div className="center1">
              <h1 className="text-gold">Menu</h1>
              <a href="/" className="text-lightGrey">
                Home
              </a>
              <a href="/" className="text-lightGrey">
                Products
              </a>
              <a href="/" className="text-lightGrey">
                About
              </a>
              <a href="/" className="text-lightGrey">
                FAQ
              </a>
              <a href="/" className="text-lightGrey">
                Contact
              </a>
            </div>

            <div className="center2">
              <h1 className="text-gold">Social</h1>
              <a href="/" className="text-lightGrey">
                Instagram
              </a>
              <a href="/" className="text-lightGrey">
                Facebook
              </a>
              <a href="/" className="text-lightGrey">
                Twitter
              </a>
            </div>

            <div className="right">
              <h1 className="text-gold">Contacts</h1>
              <div className="inner-right">
                <div>
                  <h1 className="text-white">Email:</h1>
                  <p className="text-lightGrey">hello@scribbsbeauty.com</p>
                </div>
                <div>
                  <h1 className="text-white">Phone:</h1>
                  <p className="text-lightGrey">+1(456)234 4532</p>
                </div>
                <div>
                  <h1 className="text-white">Address:</h1>
                  <p className="text-lightGrey">
                    No 24/34b Mainlande, Winstom, 14450, California, USA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2022-2023 All rights reserved | Designed by <span>Scribbs</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
