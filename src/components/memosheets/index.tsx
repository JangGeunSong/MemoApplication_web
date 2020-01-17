import React, { useState, useEffect } from 'react'

import Memopost from '../memo-post'


const Index: React.FC = () => {
    const [memos, setMemos] = useState([]);
    
    useEffect(() => {
        const response = fetch('http://localhost:5000/memos')

        response
            .then(res => res.json())
            .then(data => setMemos(data))
    }, [])

    return (
        <div className="memo-sheet">
            {memos.map((memo: { title: string; description: string; background: string; }, idx: string | number | undefined) => (
                <Memopost key={idx} title={memo.title} description={memo.description} background={memo.background}/>
            ))}
        </div>
    )
}

export default Index;