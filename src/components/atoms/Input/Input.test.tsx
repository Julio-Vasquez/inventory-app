import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  test('should render with label and associate it correctly to the input', () => {
    render(<Input label="Nombre" name="nombre" />)
    const input = screen.getByLabelText('Nombre')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'nombre')
  })

  test('should render without label', () => {
    render(<Input name="sinLabel" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('should call onChange when typed', () => {
    const handleChange = vi.fn()
    render(<Input label="Correo" name="correo" onChange={handleChange} />)
    const input = screen.getByLabelText('Correo')
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('should support additional props like placeholder', () => {
    render(<Input placeholder="Escribe aquí" name="testInput" />)
    expect(screen.getByPlaceholderText('Escribe aquí')).toBeInTheDocument()
  })

  test('should use "id" prop if provided explicitly', () => {
    render(<Input label="ID explícito" id="custom-id" />)
    const input = screen.getByLabelText('ID explícito')
    expect(input).toHaveAttribute('id', 'custom-id')
  })
})
