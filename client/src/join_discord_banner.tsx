import React from 'react';

interface JoinDiscordBannerProps {}

const JoinDiscordBanner: React.FC<JoinDiscordBannerProps> = props => {
    const buttonLabel = 'Discord →'
    const openDiscord = () => {
        window.open("https://discord.gg/VHmPfwWHb7", "_blank");
    }

    return (
        <div id="join-discord-banner" className="d-flex justify-content-around align-items-center">
            <div className="added-items mr-5">
                <div><p className="h1 beachFont mb-5">Join Our Discord</p></div>
                <div><button className="btn btn-lrg btn-primary mt-5" onClick={openDiscord} >{buttonLabel}</button></div>
            </div>
            <div></div>
        </div>
    )
}
export default JoinDiscordBanner;