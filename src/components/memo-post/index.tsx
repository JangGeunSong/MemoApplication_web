import React from 'react'

type MemoProps = {
    title: string;
    description: string;
    background: string;
}

const index: React.FC<MemoProps> = ({ title, description, background }) => {
    return (
        <div className="post-it" style={{ background }}>
            <h1 className="post-title">{title}</h1>
            <hr className="post-line"/>
            <p className="post-description">{description}</p>
        </div>
    )
}

export default index;