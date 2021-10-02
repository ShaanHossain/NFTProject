import React from 'react';
import CastleVideo from '../assets/castle-vid.mp4'
import TabLink from "./tab_link";
import BackstoryImage from "../assets/fonts/Backstoryv2.png";
import RoadMapImage from "../assets/fonts/roadmap.png";
import FAQImage from "../assets/fonts/FAQ.png";
import TeamImage from "../assets/fonts/Team.png";

interface BackgroundVideoProps {

}

const BackgroundVideo: React.FC<BackgroundVideoProps> = props => {
    const introParagraphTitle = 'Dive into the Lagoon'
    const introParagraphText = '9010 Dolphins chilling in an enormous sunken castle. A limited NFT collection where the token doubles as a membership to the lax dolphin lagoon. Dolphins are minted as ERC-721 tokens. Each of these cost .04 ETH to mint.'
    // const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'


    const renderTabLinks = () => {
        return (
            <div id="tabs" className="d-flex justify-content-around">
                <TabLink label="Backstory" path="backstory-page" image={BackstoryImage}/>
                <TabLink label="Roadmap" path="roadmap-page" image={RoadMapImage} />
                <TabLink label="FAQs" path="box-page" image={FAQImage}/>
                <TabLink label="Team" path="team-page" image={TeamImage}/>
            </div>
        )
    }

    return (
        <div id="videoDiv2">
            <video id="video2" autoPlay muted playsInline loop>
                <source src={CastleVideo} type="video/mp4" />
            </video>
            <div id="video-content">
                {/*Tabs*/}
                {renderTabLinks()}
                {/*Intro Paragraph*/}
                <div className="paragraphTitle2 my-5">
                        <p className="text-white">{introParagraphTitle}</p>
                    </div>
                    <div id="intro-paragraph" className="paragraphContent2 my-5 mx-5">
                        <p className="text-white">{introParagraphText}</p>
                    </div>
            </div>
        </div>
    )
}
export default BackgroundVideo;