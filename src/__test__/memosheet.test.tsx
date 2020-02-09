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
        const memosheet = render(<MemoSheet />)
        await wait(() =>  {
            getByText(memosheet.container, 'title1')
        })
        expect(memosheet.asFragment()).toMatchSnapshot()
        // 추가적인 방안 모색 필요
    })
})
