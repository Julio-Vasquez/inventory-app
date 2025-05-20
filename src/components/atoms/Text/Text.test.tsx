import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Text from './Text'

describe('Text component (Vitest)', () => {
  it('renders children text correctly', () => {
    render(<Text>Hello Vitest</Text>)

    const paragraph = screen.getByText('Hello Vitest')
    expect(paragraph).toBeInTheDocument()
    expect(paragraph.tagName.toLowerCase()).toBe('p')
    expect(paragraph).toHaveClass('text')
  })
})
