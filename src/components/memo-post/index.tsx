import React from 'react'

import { MemoProps } from '../types'

const index: React.FC<MemoProps> = ({ idx, title, description, background, onClick}) => {
    return (
        <div className="post-it" style={{ background }} onClick={() => onClick(idx)}>
            <h1 className="post-title">{title}</h1>
            <hr className="post-line"/>
            <p className="post-description">{description}</p>
        </div>
    )
}

export default index;