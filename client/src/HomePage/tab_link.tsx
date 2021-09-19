import React from 'react';

interface TabLinkProps {
    label: string;
    path: string;
}

const TabLink: React.FC<TabLinkProps> = props => {
    return (
        <div className="col">
            <a className="tabLink" href={props.path}>{props.label}</a>
        </div>
    )
}
export default TabLink;