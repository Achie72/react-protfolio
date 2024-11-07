import React from "react";

type LinkCardProps = {
    title: string,
    url: string,
    description?: string,
    icon?: React.ReactNode,
}

const LinkCard: React.FC<LinkCardProps> = ({
    title,
    url,
    description,
    icon
}) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
        <div className= "link-card-content justified-content">
        <h3>
            {icon && <span className="link-icon">{icon} </span>}
            {title}
        </h3>
        {description && <p>{description}</p>}
        </div>
    </a>
);

export default LinkCard