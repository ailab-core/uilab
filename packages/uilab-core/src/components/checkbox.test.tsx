import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './checkbox'

describe('Checkbox Component', () => {
  describe('Rendering', () => {
    it('should render a checkbox element', () => {
      render(<Checkbox />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      render(<Checkbox />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveAttribute('data-slot', 'checkbox')
    })

    it('should render unchecked by default', () => {
      render(<Checkbox />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).not.toBeChecked()
    })
  })

  describe('User Interaction', () => {
    it('should toggle when clicked', async () => {
      const user = userEvent.setup()
      render(<Checkbox />)
      const checkbox = screen.getByRole('checkbox')

      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
      await user.click(checkbox)
      expect(checkbox).not.toBeChecked()
    })

    it('should call onCheckedChange handler', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<Checkbox onCheckedChange={handleChange} />)

      const checkbox = screen.getByRole('checkbox')
      await user.click(checkbox)

      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('should not toggle when disabled', async () => {
      const user = userEvent.setup()
      render(<Checkbox disabled />)
      const checkbox = screen.getByRole('checkbox')

      await user.click(checkbox)
      expect(checkbox).not.toBeChecked()
    })
  })

  describe('States', () => {
    it('should be checked when checked prop is true', () => {
      render(<Checkbox checked />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeChecked()
    })

    it('should be disabled when disabled prop is true', () => {
      render(<Checkbox disabled />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeDisabled()
    })

    it('should apply custom className', () => {
      render(<Checkbox className='custom-class' />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveClass('custom-class')
    })

    it('should have default styling classes', () => {
      render(<Checkbox />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveClass('size-4', 'rounded-[4px]', 'border')
    })
  })

  describe('Controlled Component', () => {
    it('should work as controlled component', async () => {
      const TestComponent = () => {
        const [checked, setChecked] = React.useState(false)
        return (
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            data-testid='controlled-checkbox'
          />
        )
      }

      const user = userEvent.setup()
      render(<TestComponent />)
      const checkbox = screen.getByTestId('controlled-checkbox')

      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
      await user.click(checkbox)
      expect(checkbox).not.toBeChecked()
    })
  })

  describe('Indeterminate State', () => {
    it('should support indeterminate state', () => {
      render(<Checkbox checked='indeterminate' />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveAttribute('data-state', 'indeterminate')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible with aria-label', () => {
      render(<Checkbox aria-label='Accept terms' />)
      const checkbox = screen.getByLabelText('Accept terms')
      expect(checkbox).toBeInTheDocument()
    })

    it('should be focusable', () => {
      render(<Checkbox />)
      const checkbox = screen.getByRole('checkbox')
      checkbox.focus()
      expect(checkbox).toHaveFocus()
    })

    it('should handle keyboard interaction (Space)', async () => {
      const user = userEvent.setup()
      render(<Checkbox />)
      const checkbox = screen.getByRole('checkbox')

      checkbox.focus()
      await user.keyboard(' ')
      expect(checkbox).toBeChecked()
    })

    it('should have focus-visible styles', () => {
      render(<Checkbox />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50')
    })

    it('should handle aria-invalid state', () => {
      render(<Checkbox aria-invalid />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveAttribute('aria-invalid')
      expect(checkbox).toHaveClass('aria-invalid:border-destructive')
    })
  })

  describe('Visual States', () => {
    it('should apply checked state styles', () => {
      render(<Checkbox checked />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveClass('data-[state=checked]:bg-primary')
    })

    it('should display check indicator when checked', () => {
      const { container } = render(<Checkbox checked />)
      const indicator = container.querySelector('[data-slot="checkbox-indicator"]')
      expect(indicator).toBeInTheDocument()
    })
  })
})
