import React from 'react';
import TwitterIcon from '../assets/ButtonImages/twitter.png'

interface TeamMemberProps {
    dolphinImagePath: string;
    name: string;
    bio: string;
    twitterLink: string;
}
const TeamMember: React.FC<TeamMemberProps> = props => {
    const openTwitter = () => {
        window.open(props.twitterLink, "_blank");
    }

    return (
        <div className="team-member mt-5 d-flex flex-column justify-content-center align-items-center">
            {/*Image*/}
                <img className="team-pic" src={props.dolphinImagePath} alt={props.name + ' dolphin image'} />

                {/*Name*/}
                <div className="bioTitle mb-3">
                    {props.name}
                        <button className="btn twitter-link2" onClick={openTwitter} data-toggle="tooltip" data-placement="top" title={props.twitterLink}>
                            <img className="twitter-icon2" src={TwitterIcon} alt="Twitter Logo" />
                        </button>
                </div>

                {/*Bio*/}
                <div className="bioContent col-8 mb-5">
                    {props.bio}
                </div>
        </div>
    )
}
export default TeamMember;