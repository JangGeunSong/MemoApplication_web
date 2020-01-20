import React from 'react'

import { ModalProps } from '../types'

const Index:React.FC<ModalProps> = ({ title, description, background, onClick }) => {
    return (
        <div className="memo-modal" style={{background: background}}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button onClick={() => onClick()}>Close</button>
        </div>
    )
}

export default Index