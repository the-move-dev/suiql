import React from 'react';
import {Link} from "react-router-dom";

import styles from './AboutUs.module.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import chevronRight from '../../components/images/chevronRight.svg';
import suiQLSectionImage from './images/suiQLSection.png';
import hasChangedImage from './images/hasChangedImg.png';
import notificationsIllustration from './images/notificationsIllustartion.png';

const SectionTitle = ({ value }: {value: string}) => {
  return <h1 className={styles.sectionTitle}>{value}</h1>
}

const SectionDescription = ({ value }: {value: string}) => {
  return <p className={styles.sectionDescription}>{value}</p>
}

const SectionImage = ({ image }: {image: string}) => {
    return <img className={styles.sectionImage} src={image} alt="Section image"/>
}

export const AboutUs = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.main}>
        <div className={styles.navigation}>
          <Link to="/">Home</Link>
          <img src={chevronRight} alt="arrow" className={styles.greaterThan} />
          <Link to="/about">About us</Link>
        </div>
        <div className={styles.content}>
          <section className={styles.suiqlSection}>
              <div className={styles.sectionHeader}>
                  <SectionTitle value="SuiQL" />
                  <SectionDescription value="Accelerate your decentralized application development with our seamless Sui indexing GraphQL API." />
                  <SectionImage image={suiQLSectionImage} />
              </div>
          </section>
            <section className={styles.hasChangedSection}>
                <div className={styles.sectionHeader}>
                    <SectionTitle value="Sui has changed Web3" />
                    <SectionDescription value="Data is stored in an object-based chain model with horizontal scaling. SuiQL makes querying the Sui blockchain fast and cost-effective." />
                    <SectionImage image={hasChangedImage} />
                </div>
            </section>
        </div>
      </div>
        <section className={styles.notificationsSection}>
            <div className={styles.moreSection}>
                <h1 className={styles.sectionTitle} style={{ zIndex: 10, position: 'relative' }}>And more is coming</h1>
                <a
                    className={styles.getAccessButton}
                    href="https://airtable.com/shrHneWjS3ijJ8kHY"
                    target="_blank"
                    onClick={() => {
                        // @ts-expect-error
                        window.dataLayer.push({ 'event': 'getAccess' })
                    }}
                >
                    Get Early Access
                </a>
            </div>
            <div className={styles.notifications}>
                <SectionTitle value="Realtime Notifications API" />
                <SectionDescription value="Leverage live Sui data to supercharge your dApp" />
                <div className={styles.notificationsContent}>
                    <div className={styles.textContent}>
                        <span className={styles.notificationsContentText_1}>
                            Comprehensive solution for decentralized applications that require <b>real-time event monitoring on Sui.</b>
                        </span>
                        <span className={styles.notificationsContentText_2}>
                            Implement a reliable listener to constantly check for new events on the blockchain and notify other parts of the system when an event occurs.
                        </span>
                    </div>
                    <img src={notificationsIllustration} alt="Illustration" className={styles.illustrationContent} />
                </div>
            </div>
        </section>
      <Footer />
    </div>
  )
}
