import React from 'react'
import { render } from '@testing-library/react'
import Memopost from '../components/memo-post'

describe('memo-post component test', () => {
    const uri = 'http://localhost:5000/memos'

    it('render post component', async () => {
        const sendToModal = () => {console.log("hello")}
        const { container } = render(<Memopost 
            key={0}
            idx={0}
            title={'title1'} 
            description={'hello'} 
            background={"#fff"} 
            onClick={sendToModal}
        />)

        expect(container).toMatchSnapshot()
    })
})
