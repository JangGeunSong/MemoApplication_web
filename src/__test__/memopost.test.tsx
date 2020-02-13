import React from 'react'
import { render } from '@testing-library/react'
import Memopost from '../components/memo-post'

describe('memo-post component test', () => {
    const uri = 'http://localhost:5000/memos'

    it('render post component', async () => {
        // 가상의 모달을 생성하고 잘 그려지는지 테스트
        const sendToModal = () => {console.log("hello")}
        const { container } = render(<Memopost 
            key={0}
            idx={0}
            title={'title1'} 
            description={'hello'} 
            background={"#fff"} 
            onClick={sendToModal}
        />)
        // props가 들어가야만 컴포넌트가 렌더링 되므로 이를 처리

        expect(container).toMatchSnapshot()
    })
})
