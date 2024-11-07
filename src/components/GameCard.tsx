import React from "react";

export type GameCardProps = {
    thumbnailPath: string,
    title: string,
    summary: string,
    tools: string,
    description: string,
    altText: string
}

const GameCard: React.FC<GameCardProps> = ({
    thumbnailPath,
    title,
    summary,
    tools,
    description,
    altText
}) => (
    <div className="game-card-container">
        <div className="game-card-thumbnail-container">
            <img src={thumbnailPath}></img>
        </div>
        <div className="game-card-text-container">
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Summary:</strong> {summary}</p>
            <p><strong>Tools:</strong> {tools}</p>
            <p> {description}</p>
        </div>
    </div>
);

export default GameCard