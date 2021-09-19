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

    const renderDiscordBanner = () => {
        const buttonLabel = 'Discord →'
        const openDiscord = () => {
            window.open("https://discord.gg/VHmPfwWHb7", "_blank");
        }
        return (
            <div id="join-discord-banner" className="d-flex justify-content-around align-items-center">
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
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="d-flex flex-column align-items-around">
                            {/*<div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>*/}
                            <img id="discord-invite" className="my-5" src={DiscordInvite} />
                            <img id="dolphin-gif" className="mt-5" src={DolphinGif}/>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7 mt-5">
                        <FAQPage />
                    </div>
                </div>
                <div className="invisible"><p className="paragraphContent text-white d-flex flex-wrap mt-5">{placeHolder}</p></div>
            </div>
        </div>
    )
}
export default BoxPage;