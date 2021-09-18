import React from 'react';

interface RoadMapItemProps {
    percentage: number;
    reward: string;
}

const RoadMapItem: React.FC<RoadMapItemProps> = props => {

    return (
        <div>
            {/*Percent*/}
            <span>{props.percentage} %</span>
            {/*Text*/}
            <span>{props.reward}</span>
        </div>
    )
}

export default RoadMapItem;