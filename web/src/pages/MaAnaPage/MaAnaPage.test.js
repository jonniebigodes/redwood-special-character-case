import { render, cleanup } from '@testing-library/react'

import MaAnaPage from './MaAnaPage'

describe('MaAnaPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<MaAnaPage />)
    }).not.toThrow()
  })
})
