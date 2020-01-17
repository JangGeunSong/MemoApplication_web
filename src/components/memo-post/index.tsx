import React from 'react'

import MemoProps from '../types'

import MemoModal from '../memo-modal'

const index: React.FC<MemoProps> = ({ title, description, background }) => {
    return (
        <div className="post-it" style={{ background }}>
            <h1 className="post-title">{title}</h1>
            <hr className="post-line"/>
            <p className="post-description">{description}</p>
            <MemoModal title={title} description={description} background={background}/>
        </div>
    )
}

export default index;