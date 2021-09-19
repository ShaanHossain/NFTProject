import React from 'react';
import DolphinGif from '../src/assets/dolphin.gif'
import ShellFrame from '../src/assets/coral-background.png';

interface DolphinFrameGifProps {}

const DolphinFrameGif: React.FC<DolphinFrameGifProps> = props => {

    return (
        <div id="gif-container" className="container">
            <img id="gif-frame" src={ShellFrame} alt="Picture frame made of seashells" />
            <img id="dolphin-flash-gif" src={DolphinGif} alt="Rapidly Flashing Dolphins" />
        </div>
    )
}
export default DolphinFrameGif;