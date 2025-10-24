import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders the home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const elements = screen.getAllByText(/LIMINAL/i)
    expect(elements.length).toBeGreaterThan(0)
  })
})
