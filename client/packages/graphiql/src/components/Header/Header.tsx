import React from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../../resources/header-logo.svg';
import graphApiImg from '../images/graphApi.png';
import realtimeNotificationsImg from '../images/realtimeNotifications.png';
import fastNodeImg from '../images/fastNode.png';

const Header = () => {
    return (
        <div className="graphiql-header">
            <div className="graphiql-header-logo">
                <Link to="/"><img src={headerLogo} alt="logo" className="header-logo"/></Link>
                <span className="graphiql-header-subtitle">Query Sui blockchain with GraphQL</span>
            </div>
            <div className="graphiql-header-banner">
                <div className="banner-item">
                    <img className="banner-item-image" src={graphApiImg} alt="graphApiImg"/>
                    <span className="banner-item-text">GraphQL <br/>API</span>
                </div>
                <div className="banner-item">
                    <img className="banner-item-image" src={realtimeNotificationsImg} alt="graphApiImg"/>
                    <span className="banner-item-text">Realtime <br/>Notifications API</span>
                </div>
                <div className="banner-item">
                    <img className="banner-item-image" src={fastNodeImg} alt="graphApiImg"/>
                    <span className="banner-item-text">Blazing fast <br/>node RPC API</span>
                </div>
                <a
                    className="banner-button"
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
        </div>
    )
}

export default Header;
