import React from 'react';
import TwitterIcon from '../assets/ButtonImages/twitter.png'

interface TwitterLinkProps {
    url: string;
    width: number;
    height: number;
}


const TwitterLink: React.FC<TwitterLinkProps> = props => {

    const openTwitter = () => {
        window.open(props.url, "_blank");
    }

    return (
        <button className="btn twitter-link" onClick={openTwitter} data-toggle="tooltip" data-placement="top" title={props.url}>
            <img className="twitter-icon" src={TwitterIcon} alt="Twitter Logo" width={props.width} height={props.height} />
        </button>
    )
}
export default TwitterLink;