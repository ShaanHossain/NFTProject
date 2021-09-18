import React from 'react';
import TabLink from "./tab_link";
import SignLogo from '../assets/ButtonImages/sign.png'

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = props => {
    const introParagraphTitle = 'Dive in the Lagoon'
    const introParagraphText = '9010 Dolphins chilling in an enormous sunken castle. A limited NFT collection where the token doubles as a membership to the lax dolphin lagoon. Dolphins are minted as ERC-721 tokens. Each of these cost .04 ETH to mint.'

    const clickLogoButton = () => {}

    return (
        <div id="home-page" className="container">
            {/*Tabs*/}
            <div className="row justify-content-between mb-10">
                {/*<div className="col"></div>*/}
                {/*<div className="col"></div>*/}
                {/*<div className="col"></div>*/}
                {/*<div className="col"></div>*/}
                <TabLink label="Backstory" path="#"/>
                <TabLink label="Roadmap" path="#"/>
                <div className="col">
                    <button id="logo-tabLink" type="button" onClick={clickLogoButton}/>
                </div>
                <TabLink label="Logo" path="#"/>
                <TabLink label="FAQs" path="#"/>
                <TabLink label="Team" path="#"/>
            </div>

            {/*Intro Paragraph*/}
            <div className="mt-5">
                <div className="paragraphTitle">
                    <p className="h1">{introParagraphTitle}</p>
                </div>
                <div className="paragraphContent">
                    <p className="h1 text-white">{introParagraphText}</p>
                </div>
            </div>
        </div>
    )
}
export default HomePage;