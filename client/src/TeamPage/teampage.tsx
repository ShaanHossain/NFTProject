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
     name: 'Ryan Clapp',
     bio: 'Ryan is a goon who loves NFTs. He is also an avid fan of the Massive Multiplayer Online Game and Community, Roblox. He grew up playing as Duckster55 and dreamed of creating a project just like those of the great game builders like Telemon. This project is the result of that dream.',
 }
const henry = {
    dolphinImagePath: HenryDolphin,
    name: 'Henry Stachowiak',
    bio: 'Henry is a goon who loves front end development. He is an avid fan of the Chicago Bears as well as his favorite news source DaChiBearsNews, who cover the team better than anyone around. He hopes to one day work for the news source as a web developer!',
}
const shaan = {
    dolphinImagePath: ShaanDolphin,
    name: 'Shaan Hossain',
    bio: 'Shaan is a goon who loves back end development. His favorite thing to say is: "I hate money". Rumor has it that he thinks Ferraris are hurting the enviornment and his goal is to make sure that the company goes bankrupt!',
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

return (
    <div id="team-page" className="d-flex justify-content-around">
        {renderTeamMember(ryan)}
        {renderTeamMember(henry)}
        {renderTeamMember(shaan)}
    </div>
)
}
export default TeamPage;