import React from 'react';

interface RoadMapItemProps {
    percentage: number;
    reward: string;
}

const RoadMapItem: React.FC<RoadMapItemProps> = props => {

    return (
        <div className="roadmap-item row my-4">
            <div className="col-2 percentage">{props.percentage}%</div>
            <div className="col-10 paragraphContentPirate mt-3">{props.reward}</div>
            {/*<span className="mr-2 percentage">{props.percentage}%</span>*/}
            {/*/!*Text*!/*/}
            {/*<span>{props.reward}</span>*/}
        </div>
    )
}

export default RoadMapItem;