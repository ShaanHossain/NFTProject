import React from 'react';
import DiscordLogo from '../src/assets/ButtonImages/discord.png'
import TwitterLink from "./TeamPage/twitter_link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = props => {

    const twitterURL = 'https://twitter.com/LaxDlphinLagoon'
    const discordURL = 'https://discord.gg/VHmPfwWHb7'
    const smartContractURL = '#'
    const openSmartContract = () => {
        window.open(smartContractURL, "_blank");
    }


    return (
        <div id="footer">
            <div className="social-links my-5">
                <a className="discord-link mr-3" href={discordURL}>
                    <img className="discord-icon" src={DiscordLogo} alt="Discord Logo" width="40" height="30" />
                </a>
                <TwitterLink url={twitterURL}/>
            </div>
            <div className="contract-link mb-5">
                <button className="btn btn-primary">Smart Contract</button>
            </div>
        </div>
    )
}
export default Footer;