import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle, toggleVariants } from './toggle'

describe('Toggle Component', () => {
  describe('Rendering', () => {
    it('should render a toggle button', () => {
      render(<Toggle aria-label='Toggle'>Toggle</Toggle>)
      const toggle = screen.getByRole('button', { name: /toggle/i })
      expect(toggle).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Toggle>Toggle</Toggle>)
      const toggle = container.querySelector('[data-slot="toggle"]')
      expect(toggle).toBeInTheDocument()
    })

    it('should render children correctly', () => {
      render(<Toggle>Toggle Text</Toggle>)
      expect(screen.getByText('Toggle Text')).toBeInTheDocument()
    })
  })

  describe('User Interaction', () => {
    it('should toggle when clicked', async () => {
      const user = userEvent.setup()
      render(<Toggle aria-label='Toggle'>Toggle</Toggle>)
      const toggle = screen.getByRole('button')

      expect(toggle).toHaveAttribute('data-state', 'off')
      await user.click(toggle)
      expect(toggle).toHaveAttribute('data-state', 'on')
      await user.click(toggle)
      expect(toggle).toHaveAttribute('data-state', 'off')
    })

    it('should call onPressedChange handler', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<Toggle onPressedChange={handleChange}>Toggle</Toggle>)

      const toggle = screen.getByRole('button')
      await user.click(toggle)

      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('should not toggle when disabled', async () => {
      const user = userEvent.setup()
      render(<Toggle disabled>Toggle</Toggle>)
      const toggle = screen.getByRole('button')

      await user.click(toggle)
      expect(toggle).toHaveAttribute('data-state', 'off')
    })
  })

  describe('States', () => {
    it('should be pressed when pressed prop is true', () => {
      render(<Toggle pressed>Toggle</Toggle>)
      const toggle = screen.getByRole('button')
      expect(toggle).toHaveAttribute('data-state', 'on')
    })

    it('should be disabled when disabled prop is true', () => {
      render(<Toggle disabled>Toggle</Toggle>)
      const toggle = screen.getByRole('button')
      expect(toggle).toBeDisabled()
    })

    it('should apply custom className', () => {
      const { container } = render(<Toggle className='custom-class'>Toggle</Toggle>)
      const toggle = container.querySelector('[data-slot="toggle"]')
      expect(toggle).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      const { container } = render(<Toggle>Toggle</Toggle>)
      const toggle = container.querySelector('[data-slot="toggle"]')
      expect(toggle).toHaveClass('bg-transparent')
    })

    it('should apply outline variant classes', () => {
      const { container } = render(<Toggle variant='outline'>Toggle</Toggle>)
      const toggle = container.querySelector('[data-slot="toggle"]')
      expect(toggle).toHaveClass('border', 'border-input', 'shadow-xs')
    })
  })

  describe('Sizes', () => {
    it('should apply default size classes', () => {
      const { container } = render(<Toggle>Toggle</Toggle>)
      const toggle = container.querySelector('[data-slot="toggle"]')
      expect(toggle).toHaveClass('h-9', 'px-2', 'min-w-9')
    })

    it('should apply small size classes', () => {
      const { container } = render(<Toggle size='sm'>Toggle</Toggle>)
      const toggle = container.querySelector('[data-slot="toggle"]')
      expect(toggle).toHaveClass('h-8')
    })

    it('should apply large size classes', () => {
      const { container } = render(<Toggle size='lg'>Toggle</Toggle>)
      const toggle = container.querySelector('[data-slot="toggle"]')
      expect(toggle).toHaveClass('h-10')
    })
  })

  describe('toggleVariants', () => {
    it('should generate correct classes for default variant and size', () => {
      const classes = toggleVariants()
      expect(classes).toContain('bg-transparent')
      expect(classes).toContain('h-9')
    })

    it('should generate correct classes for custom variant and size', () => {
      const classes = toggleVariants({ variant: 'outline', size: 'lg' })
      expect(classes).toContain('border')
      expect(classes).toContain('h-10')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible with aria-label', () => {
      render(<Toggle aria-label='Toggle feature'>Toggle</Toggle>)
      const toggle = screen.getByLabelText('Toggle feature')
      expect(toggle).toBeInTheDocument()
    })

    it('should be focusable', () => {
      render(<Toggle>Toggle</Toggle>)
      const toggle = screen.getByRole('button')
      toggle.focus()
      expect(toggle).toHaveFocus()
    })

    it('should have focus-visible styles', () => {
      const { container } = render(<Toggle>Toggle</Toggle>)
      const toggle = container.querySelector('[data-slot="toggle"]')
      expect(toggle).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50')
    })
  })

  describe('Visual States', () => {
    it('should apply pressed state styles', () => {
      render(<Toggle pressed>Toggle</Toggle>)
      const toggle = screen.getByRole('button')
      expect(toggle).toHaveClass('data-[state=on]:bg-accent')
    })
  })
})
