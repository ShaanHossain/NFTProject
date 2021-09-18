import React from 'react';

interface BackstoryPageProps {}

const BackstoryPage: React.FC<BackstoryPageProps> = props => {

    return (
        <div id="backstory-page">
            {/*Backstory Title*/}
            <div>
                How did our dolphins become so lax?
            </div>
            {/*Backstory Paragraph*/}
            <div>
                Believe it or not, or dolphins have always been lax... They just found a castle
            </div>
        </div>
    )
}
export default BackstoryPage;