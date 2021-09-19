import React from 'react';

interface JoinDiscordBannerProps {}

const JoinDiscordBanner: React.FC<JoinDiscordBannerProps> = props => {
    const buttonLabel = 'Discord -->'

    return (
        <div id="join-discord-banner" className="container">
            <div className="row vertical-center">
                <div className="col-9">
                    <div><p className="h1 beachFont">Join Our Discord</p></div>
                    <div><button className="btn btn-primary">{buttonLabel}</button></div>
                </div>
            </div>
        </div>
    )
}
export default JoinDiscordBanner;