import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './input'

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render an input element', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('data-slot', 'input')
    })

    it('should render with placeholder', () => {
      render(<Input placeholder='Enter text' />)
      const input = screen.getByPlaceholderText('Enter text')
      expect(input).toBeInTheDocument()
    })
  })

  describe('Input Types', () => {
    it('should render as text input by default', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    })

    it('should accept email type', () => {
      render(<Input type='email' />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'email')
    })

    it('should accept password type', () => {
      render(<Input type='password' />)
      const input = document.querySelector('input[type="password"]')
      expect(input).toBeInTheDocument()
    })

    it('should accept number type', () => {
      render(<Input type='number' />)
      const input = screen.getByRole('spinbutton')
      expect(input).toHaveAttribute('type', 'number')
    })
  })

  describe('User Interaction', () => {
    it('should handle user input', async () => {
      const user = userEvent.setup()
      render(<Input />)
      const input = screen.getByRole('textbox')

      await user.type(input, 'Hello World')
      expect(input).toHaveValue('Hello World')
    })

    it('should call onChange handler', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<Input onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'Test')

      expect(handleChange).toHaveBeenCalled()
    })

    it('should handle focus and blur events', async () => {
      const handleFocus = vi.fn()
      const handleBlur = vi.fn()
      const user = userEvent.setup()

      render(<Input onFocus={handleFocus} onBlur={handleBlur} />)
      const input = screen.getByRole('textbox')

      await user.click(input)
      expect(handleFocus).toHaveBeenCalledTimes(1)

      await user.tab()
      expect(handleBlur).toHaveBeenCalledTimes(1)
    })
  })

  describe('States', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
    })

    it('should not accept input when disabled', async () => {
      const user = userEvent.setup()
      render(<Input disabled />)
      const input = screen.getByRole('textbox')

      await user.type(input, 'Test')
      expect(input).toHaveValue('')
    })

    it('should apply custom className', () => {
      render(<Input className='custom-class' />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('custom-class')
    })

    it('should have default styling classes', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('rounded-md', 'border', 'px-3')
    })
  })

  describe('Validation', () => {
    it('should accept required attribute', () => {
      render(<Input required />)
      const input = screen.getByRole('textbox')
      expect(input).toBeRequired()
    })

    it('should accept pattern attribute', () => {
      render(<Input pattern='[0-9]*' />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('pattern', '[0-9]*')
    })

    it('should accept maxLength attribute', () => {
      render(<Input maxLength={10} />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('maxLength', '10')
    })

    it('should handle aria-invalid state', () => {
      render(<Input aria-invalid />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-invalid')
      expect(input).toHaveClass('aria-invalid:border-destructive')
    })
  })

  describe('Value Control', () => {
    it('should work as controlled component', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('')
        return (
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data-testid='controlled-input'
          />
        )
      }

      const user = userEvent.setup()
      render(<TestComponent />)
      const input = screen.getByTestId('controlled-input')

      await user.type(input, 'Controlled')
      expect(input).toHaveValue('Controlled')
    })

    it('should work as uncontrolled component', async () => {
      const user = userEvent.setup()
      render(<Input defaultValue='Default' />)
      const input = screen.getByRole('textbox')

      expect(input).toHaveValue('Default')
      await user.clear(input)
      await user.type(input, 'New Value')
      expect(input).toHaveValue('New Value')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible with aria-label', () => {
      render(<Input aria-label='Username' />)
      const input = screen.getByLabelText('Username')
      expect(input).toBeInTheDocument()
    })

    it('should be focusable', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      input.focus()
      expect(input).toHaveFocus()
    })

    it('should have focus-visible styles', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50')
    })
  })
})
