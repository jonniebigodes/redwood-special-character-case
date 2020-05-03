import { render, cleanup } from '@testing-library/react'

import ManPage from './ManPage'

describe('ManPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ManPage />)
    }).not.toThrow()
  })
})
