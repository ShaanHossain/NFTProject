import React from 'react';
import RoadMapItem from "./roadmap_item";

interface RoadmapPageProps {}

const RoadmapPage: React.FC<RoadmapPageProps> = props => {

    const roadMap10 = {
        percentage: 10,
        reward: 'The kingdom’s cash reserve (community wallet) gets filled with ETH. The cash reserve will be used for different things voted by Dolphin holders. We will use these funds to buy floor dolphins, acquire giveaway prizes, and support our community. A percentage of sales will be decided to make sure the project is sustained. We will be hosting competitions for the first 5 days after launch. More details to come!\n'
    }
    const roadMap20 = {
        percentage: 20,
        reward: "We donate 10% of our net mint to the following charities: Henry's charity, Shaan's charity"
    }
    const roadMap30 = {
        percentage: 30,
        reward: 'For 4 weeks, we will have the community vote on a custom 1 of 1 Dolphin once a week for our artist to create. We will then give away that dolphin to a member of our community! Votes will be casted on Monday and Tuesday, art will be revealed on Sunday, and the winner will be selected on Sunday night. New hangout areas will be revealed on the website for owners only.'
    }
    const roadMap40 = {
        percentage: 40,
        reward: 'The lagoon initiative launches. We want to get to know the community. We will be hosting bi-weekly Twitter spaces to hear stories from NFT collectors and creators.'
    }
    const roadMap50 = {
        percentage: 50,
        reward: '50% of royalties from secondary sales on OpenSea will return to dolphin holders. More information to come in the future!\n'
    }
    const roadMap75 = {
        percentage: 75,
        reward: 'We give away our custom stickers, t-shirts, and more. The Lagoon gift shop opens shortly after. \n'
    }
    const roadMap100 = {
        percentage: 100,
        reward: 'The Ocean on the Ethereum blockchain is a vast place. We reveal an NFT in the dolphin universe free for owners to mint.'
    }
    const roadMapItems = [roadMap10, roadMap20, roadMap30, roadMap40, roadMap50, roadMap75, roadMap100]

    const renderRoadMapItem = (item: { percentage: any; reward: any; }) => {
        return (
            <RoadMapItem percentage={item.percentage} reward={item.reward}/>
        )
    }
    // @ts-ignore
    const renderAllRoadMapItems = () => (
        <div>
            {/*@ts-ignore*/}
            {roadMapItems.map((roadmap: { percentage: any; reward: any }) => <li>{renderRoadMapItem(roadmap)}</li>)}
        </div>
    )

    return (
        <div id="roadmap-page">
            <p className="h1 beachFont mt-2 mb-3 roadmapTitle">Treasure Map</p>
            <p className="beachFont mb-5 roadmapParagraph">Our dolphins don't really care about money... so they will be giving back some of the wealth they found back to their community of fans!</p>
            <div id="roadmap-map" className="container mt-1">
                <ul>
                    {renderAllRoadMapItems()}
                </ul>
                {/*{roadMapItems.map((roadmap: { percentage: any; reward: any }) => {renderRoadMapItem(roadmap)})}*/}
            </div>
        </div>
    )
}
export default RoadmapPage;