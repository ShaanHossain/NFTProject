import React from 'react';
import TeamMember from "./team_member";
import RyanDolphin from '../assets/dolphins/ryan-dolphin.png'
import ShaanDolphin from '../assets/dolphins/shaan-dolphin.png'
import HenryDolphin from '../assets/dolphins/henry-dolphin.png'
import DiscordLogo from '../assets/ButtonImages/discord.png'
import TwitterLink from "./twitter_link";

interface TeampageProps {

}

const TeamPage: React.FC<TeampageProps> = props => {
    const twitterURL = 'https://twitter.com/LaxDlphinLagoon'
    const discordURL = 'https://discord.gg/VHmPfwWHb7'
 const ryan = {
     dolphinImagePath: RyanDolphin,
     name: 'Ryan Clapp',
     bio: 'Ryan is a marketer and Finance student from Chicago IL. He is a Junior at Purdue University and has a passion for trading and NFTs.',
 }
const henry = {
    dolphinImagePath: HenryDolphin,
    name: 'Henry Stachowiak',
    bio: 'Henry is a fullstack (but primarily frontend) developer from Chicago IL. He is a Junior at Northeastern University and loves to watch reality T.V.',
}
const shaan = {
    dolphinImagePath: ShaanDolphin,
    name: 'Shaan Hossain',
    bio: 'Shaan is a backend dev from Mansfield MA. He is a Junior at Northeastern University and loves to build things for community use.',
}
const teamMemberList = [ryan, henry, shaan]

const renderTeamMember = (teamMember: { dolphinImagePath: any; name: any; bio: any; }) => {
 return (
         <TeamMember
             name={teamMember.name}
             bio={teamMember.bio}
             dolphinImagePath={teamMember.dolphinImagePath}
             twitterLink={'#'}
         />
 )
};

// const renderAllTeamMembers = () => {
//      return (
//          <div>
//              {teamMemberList.map((member: { dolphinImagePath: any; name: any; bio: any }) => {renderTeamMember(member)})}
//          </div>
//      )
// }

    const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'

return (
    <div id="team-page">
        <div>
            <p className="paragraphTitle">The Team</p>
        </div>
        <div className="d-flex justify-content-around">
            {renderTeamMember(ryan)}
            {renderTeamMember(henry)}
            {renderTeamMember(shaan)}
        </div>
        <div>
            <p className="paragraphTitle3">Our Socials</p>
        </div>
        <div className="social-links my-5 mb-5">
            <a className="discord-link mr-5" href={discordURL}>
                <img className="discord-icon" src={DiscordLogo} alt="Discord Logo" width="40" height="30" />
            </a>
            <TwitterLink url={twitterURL}/>
        </div>
        <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
    </div>
)
}
export default TeamPage;