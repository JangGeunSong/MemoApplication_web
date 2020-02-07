import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MemoSheet from '../components/memosheets'

describe('Memosheet test', () => {
    const memosheet = render(<MemoSheet />)

    it('render test', () => {
        expect(memosheet.container).toMatchSnapshot();
    })
})
