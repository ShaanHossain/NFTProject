import React from 'react';
import TabLink from "./tab_link";
import SignLogo from '../assets/sign.png'

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = props => {
    const introParagraphTitle = 'Dive into the Lagoon'
    const introParagraphText = '9010 Dolphins chilling in an enormous sunken castle. A limited NFT collection where the token doubles as a membership to the lax dolphin lagoon. Dolphins are minted as ERC-721 tokens. Each of these cost .04 ETH to mint.'

    const clickLogoButton = () => {}

    return (
        <div id="home-page" className="d-flex flex-column">
            {/*Tabs*/}
            <div id="tabs" className="d-flex justify-content-between mt-5">
                <TabLink label="Backstory" path="#"/>
                <TabLink label="Roadmap" path="#"/>
                {/*<img id="logo-button" src={SignLogo} />*/}
                <button id="logo-tabLink" type="button" onClick={clickLogoButton}/>
                <TabLink label="FAQs" path="#"/>
                <TabLink label="Team" path="#"/>
            </div>

            {/*Intro Paragraph*/}
            <div id="intro" className="mb-5 container">
                <div className="paragraphTitle2">
                    <p className="text-white">{introParagraphTitle}</p>
                </div>
                <div className="paragraphContent2 my-5">
                    <p className="text-white">{introParagraphText}</p>
                </div>
            </div>
        </div>
    )
}
export default HomePage;