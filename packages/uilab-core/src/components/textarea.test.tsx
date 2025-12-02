import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from './textarea'

describe('Textarea Component', () => {
  describe('Rendering', () => {
    it('should render a textarea element', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('data-slot', 'textarea')
    })

    it('should render with placeholder', () => {
      render(<Textarea placeholder='Enter description' />)
      const textarea = screen.getByPlaceholderText('Enter description')
      expect(textarea).toBeInTheDocument()
    })
  })

  describe('User Interaction', () => {
    it('should handle user input', async () => {
      const user = userEvent.setup()
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')

      await user.type(textarea, 'Multiple\nLine\nText')
      expect(textarea).toHaveValue('Multiple\nLine\nText')
    })

    it('should call onChange handler', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<Textarea onChange={handleChange} />)

      const textarea = screen.getByRole('textbox')
      await user.type(textarea, 'Test')

      expect(handleChange).toHaveBeenCalled()
    })

    it('should handle focus and blur events', async () => {
      const handleFocus = vi.fn()
      const handleBlur = vi.fn()
      const user = userEvent.setup()

      render(<Textarea onFocus={handleFocus} onBlur={handleBlur} />)
      const textarea = screen.getByRole('textbox')

      await user.click(textarea)
      expect(handleFocus).toHaveBeenCalledTimes(1)

      await user.tab()
      expect(handleBlur).toHaveBeenCalledTimes(1)
    })
  })

  describe('States', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Textarea disabled />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toBeDisabled()
    })

    it('should not accept input when disabled', async () => {
      const user = userEvent.setup()
      render(<Textarea disabled />)
      const textarea = screen.getByRole('textbox')

      await user.type(textarea, 'Test')
      expect(textarea).toHaveValue('')
    })

    it('should apply custom className', () => {
      render(<Textarea className='custom-class' />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('custom-class')
    })

    it('should have default styling classes', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('rounded-md', 'border', 'px-3', 'py-2')
    })
  })

  describe('Dimensions', () => {
    it('should accept rows attribute', () => {
      render(<Textarea rows={5} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('rows', '5')
    })

    it('should accept cols attribute', () => {
      render(<Textarea cols={50} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('cols', '50')
    })

    it('should have min-height class', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('min-h-16')
    })
  })

  describe('Validation', () => {
    it('should accept required attribute', () => {
      render(<Textarea required />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toBeRequired()
    })

    it('should accept maxLength attribute', () => {
      render(<Textarea maxLength={200} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('maxLength', '200')
    })

    it('should handle aria-invalid state', () => {
      render(<Textarea aria-invalid />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('aria-invalid')
      expect(textarea).toHaveClass('aria-invalid:border-destructive')
    })
  })

  describe('Value Control', () => {
    it('should work as controlled component', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('')
        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data-testid='controlled-textarea'
          />
        )
      }

      const user = userEvent.setup()
      render(<TestComponent />)
      const textarea = screen.getByTestId('controlled-textarea')

      await user.type(textarea, 'Controlled Text')
      expect(textarea).toHaveValue('Controlled Text')
    })

    it('should work as uncontrolled component', async () => {
      const user = userEvent.setup()
      render(<Textarea defaultValue='Default Text' />)
      const textarea = screen.getByRole('textbox')

      expect(textarea).toHaveValue('Default Text')
      await user.clear(textarea)
      await user.type(textarea, 'New Text')
      expect(textarea).toHaveValue('New Text')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible with aria-label', () => {
      render(<Textarea aria-label='Description' />)
      const textarea = screen.getByLabelText('Description')
      expect(textarea).toBeInTheDocument()
    })

    it('should be focusable', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      textarea.focus()
      expect(textarea).toHaveFocus()
    })

    it('should have focus-visible styles', () => {
      render(<Textarea />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50')
    })
  })
})
