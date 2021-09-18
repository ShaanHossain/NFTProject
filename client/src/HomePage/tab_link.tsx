import React from 'react';

interface TabLinkProps {
    label: string;
    path: string;
}

const TabLink: React.FC<TabLinkProps> = props => {
    return (
        <a href={props.path}>label</a>
    )
}
export default TabLink;