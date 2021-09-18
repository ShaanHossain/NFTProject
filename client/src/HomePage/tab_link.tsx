import React from 'react';

interface TabLinkProps {
    label: string;
    path: string;
}

const TabLink: React.FC<TabLinkProps> = props => {
    return (
        <a className="tabLink ml-1" href={props.path}>{props.label}</a>
    )
}
export default TabLink;