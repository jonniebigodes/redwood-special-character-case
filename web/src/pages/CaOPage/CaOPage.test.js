import { render, cleanup } from '@testing-library/react'

import CaOPage from './CaOPage'

describe('CaOPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CaOPage />)
    }).not.toThrow()
  })
})
