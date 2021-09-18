import React from 'react';
import TabLink from "./tab_link";

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = props => {
    const introParagraphTitle = 'Dive in the Lagoon'
    const introParagraphText = '9010 Dolphins chilling in an enormous sunken castle. A limited NFT collection where the token doubles as a membership to the lax dolphin lagoon. Dolphins are minted as ERC-721 tokens. Each of these cost .04 ETH to mint.'

    return (
        <div>
            {/*Tabs*/}
            <div>
                <TabLink label="Backstory" path="#"/>
                <TabLink label="Roadmap" path="#"/>
                <TabLink label="Logo" path="#"/>
                <TabLink label="FAQs" path="#"/>
                <TabLink label="Team" path="#"/>
            </div>

            {/*Intro Paragraph*/}
            <div>
                <div>{introParagraphTitle}</div>
                <div>{introParagraphText}</div>
            </div>
        </div>
    )
}
export default HomePage;