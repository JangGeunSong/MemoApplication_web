import React, { useState, useEffect } from 'react'

import Memopost from '../memo-post'

import Memomodal from '../memo-modal'

const Index: React.FC = () => {
    const [memos, setMemos] = useState([]);
    const [isModalShow, setIsModalShow] = useState(false)
    const [modalProps, setModalProps] = useState({title: 'none', description: 'none', background: '#fff'})

    useEffect(() => {
        const response = fetch('http://localhost:5000/memos')

        response
            .then(res => res.json())
            .then(data => setMemos(data))
    }, [])

    const sendToModal = (idx: number) => {
        setIsModalShow(true)
        setModalProps(memos[idx])
    }

    const closeModal = () => {
        setIsModalShow(false)
    }

    return (
        <div className="memo-sheet">
            {memos.map((memo: { title: string; description: string; background: string; }, idx: number) => (
                <Memopost 
                    key={idx} 
                    idx={idx}
                    title={memo.title} 
                    description={memo.description} 
                    background={memo.background} 
                    onClick={sendToModal}
                />
            ))}
            {isModalShow ? 
            (<Memomodal 
                title={modalProps.title} 
                description={modalProps.description} 
                background={modalProps.background} 
                onClick={closeModal}
            />) 
            : 
            (<div></div>)}
        </div>
    )
}

export default Index;