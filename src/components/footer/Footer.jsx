import React, { Fragment } from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer-top">
          <div className="left">
            <h1>Scribbs</h1>
            <h2>Hair that shines so bright! So Bright!!</h2>
            <p>
              Visiting our place will be a whole lot of different experience.
            </p>
          </div>
          <div className="center1">
            <h1>Menu</h1>
            <a href="/">Home</a>
            <a href="/">Products</a>
            <a href="/">About</a>
            <a href="/">FAQ</a>
            <a href="/">Contact</a>
          </div>
          <div className="center2">
            <h1>Social</h1>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
          </div>
          <div className="right">
            <h1>Contacts</h1>
            <div>
              <h1>Email:</h1>
              <p>hello@scribbsbeauty.com</p>
            </div>
            <div>
              <h1>Phone:</h1>
              <p>+1(456)234 4532</p>
            </div>
            <div>
              <h1>Address:</h1>
              <p>No 24/34b Mainlande, Winstom, 14450, California, USA.</p>
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
