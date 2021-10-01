import React from 'react';
import { Link } from "react-scroll";

interface TabLinkProps {
    label: string
    image: string;
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
            >
                <img className='tabImage' src={props.image} alt={`tab-link-${props.label}`} />
            </Link>

    )
}
export default TabLink;