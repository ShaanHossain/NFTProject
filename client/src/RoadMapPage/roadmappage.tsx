import React from 'react';
import RoadMapImage from '../assets/roadmap.png'

interface RoadmapPageProps {}

const RoadmapPage: React.FC<RoadmapPageProps> = props => {
    const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'

    return (
        <div id="roadmap-page" className="d-flex justify-content-center align-items-center remove-all-margin-padding">
            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            <div id="roadmap-map" className="container my-5">
                <img src={RoadMapImage} alt='Company roadmap' className='roadmap-resize' />
            </div>
            <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
        </div>
    )
}
export default RoadmapPage;