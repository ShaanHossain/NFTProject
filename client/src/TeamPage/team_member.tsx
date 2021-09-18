import React from 'react';
import TwitterLink from "./twitter_link";

interface TeamMemberProps {
    dolphinImagePath: string;
    name: string;
    bio: string;
    twitterLink: string;
}
const TeamMember: React.FC<TeamMemberProps> = props => {
    return (
        <div className="team-member mt-5 container">
            {/*Image*/}
            <div className="row">
                <img src={props.dolphinImagePath} alt={props.name + ' dolphin image'} />
            </div>

            <div className="row justify-content-center">
                {/*Name*/}
                <div className="paragraphTitle mb-3">
                    {props.name}
                    <span className="w-20 h-20 ml-3">
                        <TwitterLink url={props.twitterLink}/>
                    </span>
                </div>

                <div className="col-2"/>
                {/*Bio*/}
                <div className="paragraphContent col-8">
                    {props.bio}
                </div>
                <div className="col-2"/>
            </div>
        </div>
    )
}
export default TeamMember;