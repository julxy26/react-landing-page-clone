import './App.css';
import './index.js';
import './index.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import border from './images/border.svg';
import bridge from './images/bridge-logo.svg';
import built from './images/built.svg';
import calendar from './images/calendar-illu.svg';
import depressed from './images/depressed-illu.svg';
import pen from './images/dude-with-pen.svg';
import education from './images/edu-logo.png';
import homepage from './images/homepage.svg';
import inquivix from './images/inqu-logo.svg';
import ladyCalendar from './images/lady-with-calendar.svg';
import lion from './images/lion-logo.png';
import logo from './images/logo.svg';
import manyreq from './images/manyreq.svg';
import streak from './images/streak-logo.png';
import time from './images/time-illu.svg';
import moon from './images/two-people-moon.svg';

const backgroundColor = css`
  background-color: #0f123d;
  overflow-x: hidden;
`;

const backgroundImageStyle = css`
  background-size: cover;
  width: 101.5%;
  height: 107%;
  margin-left: -22px;
  margin-top: -19px;
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 1;
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  padding-top: 21px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.6px;
`;

const divLogoStyle = css`
  display: inline-flex;
  margin: 0 0 0 144px;
`;

const logoImageStyle = css`
  width: 35px;
`;

const logoFontStyle = css`
  font-size: 15px;
  letter-spacing: 0.9px;
  margin-left: 9px;
`;

const navLinkStyle = css`
  margin-left: 130px;
  font-weight: 400;
  -webkit-text-stroke: 0.4px white;

  a + a {
    margin-left: 47px;
  }
`;

const dropDownStyle = css`
  font-weight: 600;
  padding-top: 6px;
  margin-left: -20px;

  &:hover {
    transition: 0.5s;
    height: 0.01em;
    border-radius: 10px;
    background-image: linear-gradient(105deg, #fd576c, #fd435a);
  }
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
  position: absolute;
  display: block;
  left: 27%;
  text-align: center;
  margin-top: 110px;
`;

const h1Style = css`
  font-size: 44px;
  line-height: 1.25;
  letter-spacing: 0.4px;
  -webkit-text-stroke: 1px white;
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
  margin-left: 36px;
  & > a {
    width: 279px;
    height: 58px;
    padding: 19px 67px;
    font-weight: 700;
    -webkit-text-stroke: 0.3px white;
    background-color: #fd435a;
    border-radius: 45px;
    box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
    text-transform: uppercase;
    letter-spacing: 0.9px;
    font-weight: 700;
  }
`;

const contactFormButtonContainer = css`
  width: auto;
  height: 88vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 19px;

  button {
    border: none;
    border-radius: 45px;
    background-color: #fd435a;
    box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
    letter-spacing: 0.4px;
    font-size: 16px;
    font-weight: 700;
    -webkit-text-stroke: 0.5 white;
    padding: 12px 18px;
    position: fixed;
  }
`;

const logoContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;
  margin-top: 140px;
  margin-left: 10px;

  img {
    max-width: 100%;
    max-height: 58px;

    :nth-child(2) {
      max-height: 64px;
      padding-bottom: 3px;
    }

    :nth-child(3) {
      max-height: 75px;
      padding-bottom: 20px;
    }

    :nth-child(4) {
      width: 140px;
      opacity: 70%;
      padding-top: 29px;
    }

    :last-child {
      width: 85px;
      max-height: 100px;
      margin-left: -17px;
      opacity: 80%;
      padding-top: 5px;
    }
  }
`;

const logoContainerStyle2 = css`
  margin-top: 18px;
  > img {
    opacity: 80%;
    width: 145px;

    :last-child {
      width: 125px;
      padding-bottom: 5px;
      opacity: 90%;
    }
  }
`;

const textStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  -webkit-text-stroke: 0.5px;
  margin-top: 98px;
  margin-left: 8px;
  letter-spacing: -0.3px;
  span {
    color: #50b8dc;
  }
`;

const illustrationStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 240px;
  margin-right: 150px;
  margin-top: -10px;

  img {
    :first-child {
      width: 190px;
    }
    :nth-child(2) {
      width: 140px;
    }

    :last-child {
      width: 150px;
    }
  }
`;
const borderStyle = css`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 65px;

  img {
    width: 350px;
    border-radius: 25px;
  }

  img + img {
    margin-left: 45px;
  }

  img:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 14px 0px rgba(0, 255, 255, 0.6);
  }
`;

const textInsideBorderStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 35px;

  span {
    width: 260px;
  }

  span + span {
    margin-left: 140px;
  }

  h3 {
    font-size: 22px;
    -webkit-text-stroke: 0.3px;
  }

  p {
    margin-top: -8px;
    color: #d4d6ff;
    font-size: 16px;
    opacity: 0.9;
    -webkit-text-stroke: 0.3px;
  }
`;

const textStyle2 = css`
  margin-top: 240px;
`;

const section2Style = css`
  text-align: center;
  img {
    width: 600px;
  }

  h3 {
    font-size: 26px;
    -webkit-text-stroke: 0.3px;
  }
  p {
    margin-top: -8px;
    color: #d4d6ff;
    font-size: 16px;
    opacity: 0.9;
    -webkit-text-stroke: 0.3px;
  }
`;

const divIlluSection = css`
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function App() {
  return (
    <div css={backgroundColor}>
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
      <div css={contactFormButtonContainer}>
        <button>Contact Us</button>
      </div>

      <section>
        <div css={logoContainerStyle}>
          <img href="asdf" src={education} alt="logo" />
          <img href="asdf" src={streak} alt="logo" />
          <img href="asdf" src={lion} alt="logo" />
          <img href="asdf" src={bridge} alt="logo" />
          <img href="asdf" src={inquivix} alt="logo" />
        </div>

        <div css={[logoContainerStyle, logoContainerStyle2]}>
          <img src={manyreq} alt="logo" />
          <img src={built} alt="logo" />
        </div>

        <div css={textStyle}>
          <h2>
            We get it. Reliable designers
            <br />
            <span>are hard to find</span>
          </h2>
        </div>
      </section>

      <div css={borderStyle}>
        <img src={border} alt="border" />
        <img src={border} alt="border" />
        <img src={border} alt="border" />
      </div>
      <div css={illustrationStyle}>
        <img href="asdf" src={time} alt="illustration" />
        <img href="asdf" src={depressed} alt="illustration" />
        <img href="asdf" src={calendar} alt="illustration" />
      </div>

      <div css={textInsideBorderStyle}>
        <span>
          <h3>Poor Quality</h3>
          <p>You’re tired of the guessing game to find the right designer</p>
        </span>
        <span>
          <h3>Bad Communication</h3>
          <p>You’re fed up with having to explain yourself multiple times.</p>
        </span>
        <span>
          <h3>Missed deadlines</h3>
          <p>You lose hope as deadlines are missed over and over again.</p>
        </span>
      </div>

      <div css={[textStyle, textStyle2]}>
        <h2>
          Design doesn’t have to be hard.
          <br />
          <span>We make it easy.</span>
        </h2>
      </div>

      <section css={section2Style}>
        <div css={divIlluSection}>
          <h3 css={textStyle}>Breath-taking Designs</h3>
          <p>
            All of our designers are carefully vetted and have years of
            experience working in the design industry.
          </p>

          <p>
            You’ll get a dedicated UI Designer, Graphic Designer, Illustrator
            and Project Manager. With a full design team, getting breath-taking
            designs couldn't be any easier!
          </p>
          <img src={pen} alt="illustration" />
        </div>
        <div>
          <img src={moon} alt="illustration" />

          <span>
            <h3>Communication That Matters</h3>
            <p>
              With a dedicated Project Manager who cares about your success and
              direct live-chat access to your experienced designers,
              communication issues will be no more!
            </p>
          </span>
        </div>
        <div>
          <img src={ladyCalendar} alt="illustration" />
          <h3>No More Missed Deadlines</h3>
          <p>
            Need that design done on a specific date? You can trust us to
            deliver it on time. Once we commit to a date, we'll get it done.
          </p>
          <p>
            Job requests will on average be delivered in a few business days.
            Simpler tasks such as graphic designs and revisions will be
            delivered within 24 hours.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer></footer>
    </div>
  );
}
