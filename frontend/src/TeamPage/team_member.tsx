import React from 'react';

interface TeamMemberProps {
    dolphinImagePath: string;
    name: string;
    bio: string;
}
const TeamMember: React.FC<TeamMemberProps> = props => {
    return (
        <div>
            {/*Image*/}
            <div>
                <img src={props.dolphinImagePath} alt={props.name + ' dolphin image'} />
            </div>

            {/*Name*/}
            <div>
                {props.name}
            </div>

            {/*Bio*/}
            <div>
                {props.bio}
            </div>
        </div>
    )
}
export default TeamMember;