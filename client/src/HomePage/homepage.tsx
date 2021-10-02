import React from 'react';
import TabLink from "./tab_link";
import SignLogo from '../assets/sign.png';
import Castle from '../assets/castle-vid.mp4';
import CastleImage from '../assets/castle-image.jpg'
import BackstoryImage from '../assets/fonts/Backstoryv2.png'
import RoadMapImage from '../assets/fonts/roadmap.png'
import FAQImage from "../assets/fonts/FAQ.png";
import TeamImage from '../assets/fonts/Team.png'

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = props => {
    const introParagraphTitle = 'Dive into the Lagoon'
    const introParagraphText = '9010 Dolphins chilling in an enormous sunken castle. A limited NFT collection where the token doubles as a membership to the lax dolphin lagoon. Dolphins are minted as ERC-721 tokens. Each of these cost .04 ETH to mint.'


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch Mint Example' })
    };
    const mint = async () => {
        const data = await fetch('api/nft', requestOptions);
        alert(data);
    }
    const renderTabLinks = () => {
        return (
            <div id="tabs" className="d-flex justify-content-around mt-5">
                <TabLink label="Backstory" path="backstory-page" image={BackstoryImage}/>
                <TabLink label="Roadmap" path="roadmap-page" image={RoadMapImage} />
                <a id="logo-button" onClick={mint}>
                    <img id="logo-button-image" src={SignLogo}  alt='logo-button'/>
                </a>
                {/*<button id="logo-tabLink" type="button" onClick={clickLogoButton}/>*/}
                <TabLink label="FAQs" path="box-page" image={FAQImage}/>
                <TabLink label="Team" path="team-page" image={TeamImage}/>
            </div>
        )
    }
    const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'

    return (
        <div id="home-page" className="d-flex justify-content-around flex-column remove-all-margin-padding">
            {/*Tabs*/}
            {renderTabLinks()}
            {/*Intro Paragraph*/}
            <div id="intro" className="mb-5 container">
                <div className="paragraphTitle2">
                    <p className="text-white">{introParagraphTitle}</p>
                </div>
                <div className="paragraphContent2 my-5">
                    <p className="text-white">{introParagraphText}</p>
                </div>
            </div>
            {/*<div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>*/}
            {/*<div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>*/}
            {/*Background*/}
            {/*<video id="videoBG" poster={CastleImage} autoPlay muted loop>*/}
            {/*    <source src={Castle} type="video/mp4" />*/}
            {/*</video>*/}
        </div>
    )
}
export default HomePage;