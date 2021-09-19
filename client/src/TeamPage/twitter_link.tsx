import React from 'react';
import TwitterIcon from '../assets/ButtonImages/twitter.png'
import Chest from '../assets/ButtonImages/sign.png'

interface TwitterLinkProps {
    url: string;
}


const TwitterLink: React.FC<TwitterLinkProps> = props => {
    return (
        <a className="twitter-link" href={props.url}>
            <img className="twitter-icon" src={TwitterIcon} alt="Twitter Logo" width="40" height="30" />
        </a>
    )
}
export default TwitterLink;