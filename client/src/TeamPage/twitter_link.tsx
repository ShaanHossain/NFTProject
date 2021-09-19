import React from 'react';
import TwitterIcon from '../assets/ButtonImages/twitter.png'
import Chest from '../assets/ButtonImages/sign.png'

interface TwitterLinkProps {
    url: string;
}


const TwitterLink: React.FC<TwitterLinkProps> = props => {

    const openTwitter = () => {
        window.open(props.url, "_blank");
    }

    return (
        <button className="btn twitter-link" onClick={openTwitter} data-toggle="tooltip" data-placement="top" title={props.url}>
            <img className="twitter-icon" src={TwitterIcon} alt="Twitter Logo" width="80" height="60" />
        </button>
    )
}
export default TwitterLink;