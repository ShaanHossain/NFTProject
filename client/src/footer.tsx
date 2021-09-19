import React from 'react';
import DiscordLogo from '../src/assets/ButtonImages/discord.png'
import TwitterLink from "./TeamPage/twitter_link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = props => {

    const twitterURL = 'https://twitter.com/LaxDlphinLagoon'
    const discordURL = 'https://discord.gg/VHmPfwWHb7'
    const smartContractURL = '#'

    return (
        <div className="mt-5">
            <div className="social-links mb-5">
                <a className="discord-link mr-3" href={discordURL}>
                    <img className="discord-icon" src={DiscordLogo} alt="Discord Logo" width="40" height="30" />
                </a>
                <TwitterLink url={twitterURL}/>
            </div>
            <div className="contract-link">
                <a href={smartContractURL}>Smart Contract</a>
            </div>
        </div>
    )
}
export default Footer;