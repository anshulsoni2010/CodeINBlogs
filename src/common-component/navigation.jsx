import React from 'react';
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <section>
      <section id="top-navbar" className="mobile">
        <div className="pt-6 px-6 container is-fullhd">
          <div className="px-6 color--bg--item radius--default top-bar columns is-mobile is-gapless">
            <div className="column is-flex is-flex-wrap-nowrap is-flex-direction-row is-align-items-center">
              <button id="nav" name="Open sidebar" title="Open sidebar" type="button" className="mr-4 is-flex is-hidden-tablet">
                <span className="icon hwsize-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 0h24v24H0z" stroke="none"></path>
                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                  </svg>
                </span>
              </button>
              <div className="is-flex is-align-items-center">
                <a href="/" aria-current="page" name="Home" target="_self" className="row items-center no-wrap justify-start cursor-pointer color--default home router-link-exact-active router-link-active">
                  <div className="logo is-flex-shrink-0 pr-4-desktop pr-3-tablet pr-2-mobile">
                    <img src="/files/697/zuKqnyzNoIoLXmIVBrn1dORc4tw/f7gkVAnGJC449_dh4FTUtVHYI1KhkSShOdk1eSXlLkeCM3nnofSxtuIJXOWc/c3logo4.png" title="C3" alt="" />
                  </div>
                  <span className="has-text-weight-semibold text-size--18 is-size-3-mobile">
                    C3
                  </span>
                </a>
              </div>
            </div>
            <div className="column is-flex is-justify-content-center is-narrow">
              <div className="row col-auto no-wrap items-center justify-end">
                <button type="button" name="Login" className="primary has-text-weight-semibold right button--style" data-v-2f6f0ef7>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Navigation;
