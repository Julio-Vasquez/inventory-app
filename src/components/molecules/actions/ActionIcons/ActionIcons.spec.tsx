import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { ActionIcons } from './ActionIcons'

describe('ActionIcons', () => {
  test('should render only view icon when onView is passed', () => {
    render(<ActionIcons onView={() => {}} />)
    expect(screen.getByTestId('icon-view')).toBeInTheDocument()
    expect(screen.queryByTestId('icon-edit')).toBeNull()
    expect(screen.queryByTestId('icon-delete')).toBeNull()
  })

  test('should render all icons when all handlers are passed', () => {
    render(
      <ActionIcons onView={() => {}} onEdit={() => {}} onDelete={() => {}} />
    )
    expect(screen.getByTestId('icon-view')).toBeInTheDocument()
    expect(screen.getByTestId('icon-edit')).toBeInTheDocument()
    expect(screen.getByTestId('icon-delete')).toBeInTheDocument()
  })

  test('should call onView and onEdit when clicked', () => {
    const onView = vi.fn()
    const onEdit = vi.fn()

    render(<ActionIcons onView={onView} onEdit={onEdit} />)

    fireEvent.click(screen.getByTestId('icon-view'))
    fireEvent.click(screen.getByTestId('icon-edit'))

    expect(onView).toHaveBeenCalledTimes(1)
    expect(onEdit).toHaveBeenCalledTimes(1)
  })

  test('should confirm delete when confirmDelete is true', () => {
    const onDelete = vi.fn()

    render(<ActionIcons onDelete={onDelete} confirmDelete />)

    fireEvent.click(screen.getByTestId('icon-delete'))
    expect(onDelete).not.toHaveBeenCalled()
  })

  test('should call onDelete immediately when confirmDelete is false', () => {
    const onDelete = vi.fn()

    render(<ActionIcons onDelete={onDelete} confirmDelete={false} />)

    fireEvent.click(screen.getByTestId('icon-delete'))

    expect(onDelete).toHaveBeenCalledTimes(1)
  })
})
