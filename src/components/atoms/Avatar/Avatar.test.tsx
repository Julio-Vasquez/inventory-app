import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Avatar from './Avatar'

describe('Avatar', () => {
  test('should render with correct src and alt', () => {
    render(<Avatar src="/avatar.jpg" />)

    const img = screen.getByAltText(/avatar/i) as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('/avatar.jpg')
    expect(img).toHaveClass('avatar')
  })
})
