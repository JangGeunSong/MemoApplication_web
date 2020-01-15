import React from 'react'

import Memopost from '../memo-post'

const index: React.FC = () => {

    const num = 32;

    const posts = [];

    for(let i = 0; i < num; i++) {
        posts.push(<Memopost key={i} title="This is my memo!1" description="이게 메모라니!1" background="#E58B7F" />)
    }

    return (
        <div className="memo-sheet">
            {posts}
        </div>
    )
}

export default index;