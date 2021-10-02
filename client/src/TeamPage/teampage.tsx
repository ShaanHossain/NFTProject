import React from 'react';
import TeamMember from "./team_member";
import RyanDolphin from '../assets/dolphins/ryan-dolphin.png'
import ShaanDolphin from '../assets/dolphins/shaan-dolphin.png'
import HenryDolphin from '../assets/dolphins/henry-dolphin.png'

interface TeampageProps {

}

const TeamPage: React.FC<TeampageProps> = props => {
 const ryan = {
     dolphinImagePath: RyanDolphin,
     name: 'RC',
     bio: 'RC is a marketer from the Midwest. He met Coder Cam in elementary school and has a passion for trading and NFTs.',
     twitterURL: 'https://mobile.twitter.com/Blockchainchilr'
 }
const henry = {
    dolphinImagePath: HenryDolphin,
    name: 'Coder Cam',
    bio: 'Cam is a fullstack (but primarily frontend) developer from the Midwest. He met Sir JP in university and loves to watch reality T.V.',
    twitterURL: 'https://twitter.com/coder_cam'
}
const shaan = {
    dolphinImagePath: ShaanDolphin,
    name: 'Sir JP Hackworth',
    bio: 'Sir JP Hackworth is a backend dev from New England. He loves to build things for community use.',
    twitterURL: 'https://twitter.com/SirJPHackworth'
}

const renderTeamMember = (teamMember: { dolphinImagePath: any; name: any; bio: any; twitterURL: string}) => {
 return (
         <TeamMember
             name={teamMember.name}
             bio={teamMember.bio}
             dolphinImagePath={teamMember.dolphinImagePath}
             twitterLink={teamMember.twitterURL}
         />
 )
};

return (
    <div id="team-page">
        <div>
            <p className="paragraphTitle3">The Team</p>
        </div>
        <div className="members d-flex justify-content-around">
            {renderTeamMember(ryan)}
            {renderTeamMember(henry)}
            {renderTeamMember(shaan)}
        </div>
    </div>
)
}
export default TeamPage;