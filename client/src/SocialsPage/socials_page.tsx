import React from "react";
import DiscordLogo from "../assets/ButtonImages/discord.png";
import TwitterLink from "../TeamPage/twitter_link";
import DolphinBanner from "../assets/banner.png";

interface SocialsPageProps {

}

const SocialsPage: React.FC<SocialsPageProps> = props => {
    const twitterURL = 'https://twitter.com/LaxDlphinLagoon'
    const discordURL = 'https://discord.gg/VHmPfwWHb7'
    const openDiscord = () => {
        window.open(discordURL, "_blank");
    }
    const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'

    return (
       <div>
           <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
           <div className="mb-5">
               <p className="paragraphTitle">Our Socials</p>
           </div>
           <div className="d-flex flex-column " >
               <div className="social-links d-flex justify-content-center mt-5">
                   <button className="btn discord-link mr-5" onClick={openDiscord} data-toggle="tooltip" data-placement="top" title={discordURL}>
                       <img className="discord-icon" src={DiscordLogo} alt="Discord Logo" width="200" height="160"  />
                   </button>
                   <TwitterLink url={twitterURL} width={200} height={160}/>
               </div>
               <img src={DolphinBanner} alt='banner-with-dolphins' />
           </div>
       </div>
    )
}
export default SocialsPage;