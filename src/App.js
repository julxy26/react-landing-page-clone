import './App.css';
import './index.js';
import './index.css';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import homepage from './images/homepage.svg';
import logo from './images/logo.svg';

const backgroundImageStyle = css`
  background-size: cover;
  width: 103vw;
  height: auto;
  margin-left: -22px;
  margin-top: -19px;
  position: absolute;
  z-index: -1;
  overflow-x: hidden;
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  padding-top: 21px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

const divLogoStyle = css`
  display: flex;
  margin: 0 0 0 144px;
`;

const logoImageStyle = css`
  width: 35px;
`;

const logoFontStyle = css`
  font-size: 15px;
  letter-spacing: 1px;
  margin-left: 9px;
`;

const navLinkStyle = css`
  margin-left: 130px;
  font-weight: 600;

  a + a {
    margin-left: 47px;
  }
`;

const dropDownStyle = css`
  font-weight: 600;
  padding-top: 6px;
  margin-left: -20px;
`;

const navButtonStyle = css`
  width: 176px;
  height: 37px;
  padding: 13px 10px 0 15px;
  border: 1px #fc687b;
  background-color: #fd576c;
  border-radius: 45px;
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  text-align: center;
  line-height: 1.6;
  letter-spacing: 0.8px;
`;

const section1Style = css`
  display: block;
  text-align: center;
  margin-top: 148px;
`;

const h1Style = css`
  font-size: 44px;
  line-height: 1.25;
  letter-spacing: 0.4px;
`;

const h2Style = css`
  letter-spacing: 0.3px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin-top: -18px;
`;

const pricingButtonStyle = css`
  margin-top: 70px;
  & > a {
    padding: 19px 70px;
    font-weight: 700;
    background-color: #fd435a;
    border-radius: 45px;
    box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
    width: 279px;
    height: 58px;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    font-weight: 700;
  }
`;

export default function App() {
  return (
    <div>
      <div css={backgroundImageStyle}>
        <img src={homepage} alt="illustrated background" />
      </div>

      <header css={headerStyle}>
        <div css={divLogoStyle}>
          <img src={logo} alt="logo" css={logoImageStyle} />
          <h1 css={logoFontStyle}>pixeltrue</h1>
        </div>

        <nav css={navLinkStyle}>
          <a href="asdf">Case Studies</a>
          <a href="asdf">Pricing</a>
          <a href="asdf">Our Work</a>
          <a href="asdf">Our Platform</a>
          <a href="asdf">Login</a>
        </nav>

        <a css={dropDownStyle} href="asdf">
          More
        </a>

        <a href="abc" css={navButtonStyle}>
          Schedule Demo
        </a>
      </header>

      <main>
        <section css={section1Style}>
          <div>
            <h1 css={h1Style}>
              Get A Superhero Design Team <br /> To Grow Your Business
            </h1>
          </div>
          <div>
            <h2 css={h2Style}>
              We provide an experienced design team that works with you everyday
              to <br /> create high-quality design assets to help grow your
              business. Zero <br /> headaches, fixed pricing and no contracts.
            </h2>
          </div>
          <div css={pricingButtonStyle}>
            <a href="abc">See our pricing</a>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
