import React from 'react';

interface BackstoryPageProps {}

const BackstoryPage: React.FC<BackstoryPageProps> = props => {

    const backStoryTitle = 'How did our dolphins become so lax?'
    const backStoryText = 'Believe it or not, our dolphins have always been lax... They just found a castle. Jokes aside, while migrating to a new corner of the sea, the dolphins discovered the lagoon. They found an enormous abandoned castle, left in the depths for what seemed like hundreds of years at the center of the ocean floor. This was the perfect place to build their community, which was their main goal! The dolphins took over the kingdom and you can now find them chilling in the lagoon.'

    return (
        <div id="backstory-page" className="d-flex justify-content-end align-items-center flex-wrap">
            {/*Spacer Div*/}
            <div className="col-6"/>
            <div className="col-6">
                <div className="align-items-center mr-5">
                    <div><p className="paragraphTitle text-white"><strong>{backStoryTitle}</strong></p></div>
                    <div><p className="paragraphContent text-white d-flex flex-wrap">{backStoryText}</p></div>
                </div>
            </div>
        </div>
    )
}
export default BackstoryPage;