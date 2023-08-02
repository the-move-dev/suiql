import discordImg from "../images/discord.svg";
import twitterImg from "../images/twitter.svg";
import heartImg from "../images/heart.svg";
import peeranhaImg from "../images/peeranha.svg";
import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="graphiql-footer">
      <div className="graphiql-footer-left">
        <Link className="footer-aboutUs" to="/about">About us</Link>
        <span className="footer-policy">
          © 2023 SuiQL This site is protected by reCAPTCHA
          and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy </a>
          and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
        </span>
      </div>
      <div className="graphiql-footer-right">
        <div className="footer-socials">
          <a href="https://discord.gg/dQCkxUN74W" target="_blank"><img src={discordImg} alt="discordImg"/></a>
          <a href="https://twitter.com/Sui_QL" target="_blank"><img src={twitterImg} alt="twitterImg"/></a>
        </div>
        <div className="footer-madeBy">
          <span>Made with &nbsp;</span>
          <img src={heartImg} alt="heartImg"/>
          <span>&nbsp;by&nbsp;</span>
          <a href="https://peeranha.io" target="_blank"><img src={peeranhaImg} alt="peeranhaImg"/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
