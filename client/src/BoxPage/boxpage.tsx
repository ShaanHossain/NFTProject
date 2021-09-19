import React from 'react';
import JoinDiscordBanner from '../join_discord_banner'
import FAQPage from '../FAQPage/faqpage'
import DolphinFrameGif from '../dolphin-frame-gif'
import DolphinGif from '../assets/dolphin.gif'
import DiscordInvite from '../assets/discordInvite.png'

interface BoxPageProps {

}

const BoxPage: React.FC<BoxPageProps> = props => {
    const placeHolder = 'afds;ifadhs;fah;ofhasofha;ohiohiasfohaohsfo;ho;hiohio;ahfo;dasfha;sfha;osfh;oasdf;aosfhha;oih;oih;oizXCjkA"CJAPOC'

    const buttonLabel = 'Discord →'
    const openDiscord = () => {
        window.open("https://discord.gg/VHmPfwWHb7", "_blank");
    }
    const renderDiscordBanner = () => {
        return (
            <div id="join-discord-banner" className="Z">
                <div className="added-items mr-5">
                    <div><p className="h1 beachFont mb-1">Join Our Discord</p></div>
                    <div><button className="btn btn-primary" onClick={openDiscord} >{buttonLabel}</button></div>
                    <p className="invisible">{placeHolder}</p>
                    <p className="invisible">{placeHolder}</p>
                    <p className="invisible">{placeHolder}</p>

                </div>
                <div></div>
            </div>
        )
    }


    return (
        <div id="box-page">
                <div className="d-flex justify-content-around">
                        <div className="d-flex flex-column align-items-around">
                            <div className="mt-5">
                                <img id="dolphin-gif" src={DolphinGif}/>

                                <span className="paragraphContent">
                                    <p>Pick your favorite, then go ahead and ↓</p>
                                </span>
                            </div>
                            {/*<img id="dolphin-gif" className="mt-5" src={DolphinGif}/>*/}
                            <img id="discord-invite" className="my-5" src={DiscordInvite} onClick={openDiscord}/>
                        </div>
                    <FAQPage />
                </div>
        </div>
    )
}
export default BoxPage;