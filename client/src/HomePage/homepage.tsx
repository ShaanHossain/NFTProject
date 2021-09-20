import React from 'react';
import TabLink from "./tab_link";
import SignLogo from '../assets/sign.png';
import Castle from '../assets/castle-vid.mp4';

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = props => {
    const introParagraphTitle = 'Dive into the Lagoon'
    const introParagraphText = '9010 Dolphins chilling in an enormous sunken castle. A limited NFT collection where the token doubles as a membership to the lax dolphin lagoon. Dolphins are minted as ERC-721 tokens. Each of these cost .04 ETH to mint.'

    const clickLogoButton = () => {}

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch Mint Example' })
    };
    const mint = async () => {
        const data = await fetch('api/nft', requestOptions);
        alert(data);
    }
    const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'

    return (
        <div id="home-page" className="d-flex justify-content-around flex-column remove-all-margin-padding">
            {/*Tabs*/}
            <div id="tabs" className="d-flex justify-content-around mt-5">
                <TabLink label="Backstory" path="backstory-page"/>
                <TabLink label="Roadmap" path="roadmap-page"/>
                <a id="logo-button" onClick={mint}>
                    <img id="logo-button-image" src={SignLogo} />
                </a>
                {/*<button id="logo-tabLink" type="button" onClick={clickLogoButton}/>*/}
                <TabLink label="FAQs" path="box-page"/>
                <TabLink label="Team" path="team-page"/>
                <a className="tabLink">Smart Contract</a>
            </div>

            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            {/*Intro Paragraph*/}
            <div id="intro" className="mb-5 container">
                <div className="paragraphTitle2">
                    <p className="text-white">{introParagraphTitle}</p>
                </div>
                <div className="paragraphContent2 my-5">
                    <p className="text-white">{introParagraphText}</p>
                </div>
            </div>
            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            {/*Background*/}
            <video id="videoBG" poster="poster.JPG" autoPlay muted loop>
                <source src={Castle} type="video/mp4" />
            </video>
        </div>
    )
}
export default HomePage;