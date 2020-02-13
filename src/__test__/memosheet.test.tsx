import React from 'react'
import { render, fireEvent, getByText, wait } from '@testing-library/react'
import MemoSheet from '../components/memosheets'

describe('Memosheet test', () => {
    
    it('render test', async () => {
        const memosheet = render(<MemoSheet />)
        await wait(() =>  getByText(memosheet.container, 'title1'))
        expect(memosheet.asFragment()).toMatchSnapshot()
    })
    
    it('send to modal render test', async () => {
        // 모달 전환 테스트
        const memosheet = render(<MemoSheet />)
        await wait(() =>  {
            fireEvent.click(getByText(memosheet.container, 'title1'))
        })
        expect(memosheet.asFragment()).toMatchSnapshot()
        // 클릭 이벤트의 경우 fireEvent 를 불러와서 활용하면 된다. 이때 useEffect를 사용한 함수형 컴포넌트의 경우 훅스 자체가 async함수로 되어 있으므로 반드시 await wait()를 호출하여 데이터가 API를 통해 fetch 되는것을 체크하는것이 가장 중요하다.
    })

    it('modal cancel test', async () => {
        // 모달 닫기 버튼 테스트
        const memosheet = render(<MemoSheet />)
        await wait(() => {
            fireEvent.click(getByText(memosheet.container, 'title1'))
            fireEvent.click(getByText(memosheet.container, 'Close'))
        })
        expect(memosheet.container.firstChild).toHaveClass('memo-sheet')
    })
})
