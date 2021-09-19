import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

interface TabLinkProps {
    label: string;
    path: string;
}

const TabLink: React.FC<TabLinkProps> = props => {
    return (
            <Link
                className="tabLink"
                activeClass="active"
                to={props.path}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >{props.label}</Link>

    )
}
export default TabLink;