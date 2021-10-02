import React from "react";
import RoadmapPage from './RoadMapPage/roadmappage'
import TeamPage from "./TeamPage/teampage";
import FAQPage from "./FAQPage/faqpage";
import SocialsPage from "./SocialsPage/socials_page";

interface SandGradientPagesProps {

}

const SandGradientPages: React.FC<SandGradientPagesProps> = props => {
    return (
        <div id="sand-gradient-pages">
            <RoadmapPage />
            <hr />
            <FAQPage />
            <hr />
            <TeamPage />
            <hr />
            <SocialsPage />
        </div>
    )
}
export default SandGradientPages;