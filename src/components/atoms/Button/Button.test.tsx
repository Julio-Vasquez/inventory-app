import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  test('should render with children text', () => {
    render(<Button>Click me</Button>)
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument()
  })

  test('should call onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Submit</Button>)
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('should apply additional props like type and disabled', () => {
    render(
      <Button type="submit" disabled>
        Enviar
      </Button>
    )
    const button = screen.getByRole('button', { name: /enviar/i })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toBeDisabled()
  })
})
