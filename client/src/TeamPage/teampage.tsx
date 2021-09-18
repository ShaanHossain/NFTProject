import React from 'react';
import TeamMember from "./team_member";

interface TeampageProps {

}

const TeamPage: React.FC<TeampageProps> = props => {
 const ryan = {
     dolphinImagePath: '../../public/assets/dolphins/patrick-dolphin.png',
     name: 'Ryan Clapp',
     bio: 'Ryan is a goon who loves NFTs',
 }
const henry = {
    dolphinImagePath: '../../public/assets/dolphins/chain-dolphin.png',
    name: 'Henry Stachowiak',
    bio: 'Henry is a goon who loves front end development',
}
const shaan = {
    dolphinImagePath: '../../public/assets/dolphins/suit-dolphin.png',
    name: 'Shaan Hossain',
    bio: 'Shaan is a goon who loves back end development',
}
const teamMemberList = [ryan, henry, shaan]

const renderTeamMember = (teamMember: { dolphinImagePath: any; name: any; bio: any; }) => {
 return (
     <div className="col">
         <TeamMember
             name={teamMember.name}
             bio={teamMember.bio}
             dolphinImagePath={teamMember.dolphinImagePath}
         />
     </div>
 )
};

const renderAllTeamMembers = () => {

     return (
         <div>
             // @ts-ignore
             {teamMemberList.forEach((member) => {renderTeamMember(member)})}
         </div>
     )
}

return (
    <div className="container">
        <div className="row">
            {renderAllTeamMembers()}
        </div>
    </div>
)
}
export default TeamPage;