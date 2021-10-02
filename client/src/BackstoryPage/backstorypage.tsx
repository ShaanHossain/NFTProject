import React from 'react';

interface BackstoryPageProps {}

const BackstoryPage: React.FC<BackstoryPageProps> = props => {

    const backStoryTitle = 'How did our dolphins become so lax?'
    const backStoryText = 'Believe it or not, our dolphins have always been lax... They just found a castle. Jokes aside, while migrating to a new corner of the sea, the dolphins discovered the lagoon. They found an enormous abandoned castle at the center of the ocean floor, left in the depths for what seemed like hundreds of years. This was the perfect place to build and expand their community! The castle is now an exclusive club for lax dolphins. and they are constantly relaxing with each other in the exotic water of the lagoon.'
    const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'

    return (
        <div id="backstory-page" className="d-flex flex-column justify-content-start align-items-center">
            <p className="backStoryParagraphTitle text-white text-center my-5">{backStoryTitle}</p>
           <p className="paragraphContentBackstory text-white text-center mt-5">{backStoryText}</p>
            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
        </div>
    )
}
export default BackstoryPage;