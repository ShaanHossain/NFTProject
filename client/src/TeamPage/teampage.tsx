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
     name: 'RC',
     bio: 'RC is a marketer and Finance student from the midwest. He is a Junior in university and has a passion for trading and NFTs.',
     twitterURL: 'https://mobile.twitter.com/Blockchainchilr'
 }
const henry = {
    dolphinImagePath: HenryDolphin,
    name: 'Coder Cam',
    bio: 'Cam is a fullstack (but primarily frontend) developer from the midwest. He is a Junior in university and loves to watch reality T.V.',
    twitterURL: 'https://twitter.com/coder_cam'
}
const shaan = {
    dolphinImagePath: ShaanDolphin,
    name: 'SirJPHackworth',
    bio: 'SirJPHackworth is a backend dev from Mansfield MA. He is a Junior in university and loves to build things for community use.',
    twitterURL: 'https://twitter.com/SirJPHackworth'
}
const teamMemberList = [ryan, henry, shaan]

    const openDiscord = () => {
        window.open("https://discord.gg/VHmPfwWHb7", "_blank");
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
        <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
        <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
        <div className="mb-5">
            <p className="paragraphTitle3">Our Socials</p>
        </div>
        <div className="social-links my-5 mb-5">
            <button className="btn discord-link mr-5" onClick={openDiscord} data-toggle="tooltip" data-placement="top" title={discordURL}>
                <img className="discord-icon" src={DiscordLogo} alt="Discord Logo" width="80" height="70"  />
            </button>
            <TwitterLink url={twitterURL}/>
        </div>
        <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
    </div>
)
}
export default TeamPage;