import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MemoSheet from '../components/memosheets'

describe('Memosheet test', () => {
    const memosheet = render(<MemoSheet />)
    const panel1 = memosheet.findByText(/title1/i)
    it('test 1', () => {
        console.log(panel1)
    })
})
