import React from 'react';

interface BackstoryPageProps {}

const BackstoryPage: React.FC<BackstoryPageProps> = props => {

    const backStoryTitle = 'How did our dolphins become so lax?'
    const backStoryText = 'Believe it or not, our dolphins have always been lax... They just found a castle. Jokes aside, while migrating to a new corner of the sea, the dolphins discovered the lagoon. They found an enormous abandoned castle, left in the depths for what seemed like hundreds of years at the center of the ocean floor. This was the perfect place to build their community, which was their main goal! The dolphins took over the kingdom and you can now find them chilling in the lagoon.'
    const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'

    return (
        <div id="backstory-page" className="d-flex justify-content-between align-items-center flex-wrap remove-all-margin-padding">
            {/*Spacer Div*/}
            <div className="col-6">

                <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            </div>
            <div id="backstory-text" className="col-6">
                <div className="my-5 mr-5">
                    <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                    <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                    <div><p className="paragraphTitle text-white mb-5"><strong>{backStoryTitle}</strong></p></div>
                    <div><p className="paragraphContent text-white d-flex flex-wrap mt-5">{backStoryText}</p></div>
                    <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                    <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                    <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                    <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                    <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                    <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
                </div>
            </div>
        </div>
    )
}
export default BackstoryPage;