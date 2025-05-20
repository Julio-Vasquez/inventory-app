import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import TableActions from './TableActions'

describe('TableActions', () => {
  test('should render both buttons and trigger callbacks', () => {
    const onAdd = vi.fn()
    const onRefresh = vi.fn()

    render(<TableActions onAdd={onAdd} onRefresh={onRefresh} />)

    const addButton = screen.getByRole('button', { name: /add/i })
    const refreshButton = screen.getByRole('button', { name: /refresh/i })

    expect(addButton).toBeInTheDocument()
    expect(refreshButton).toBeInTheDocument()

    fireEvent.click(addButton)
    fireEvent.click(refreshButton)

    expect(onAdd).toHaveBeenCalledTimes(1)
    expect(onRefresh).toHaveBeenCalledTimes(1)
  })
})
