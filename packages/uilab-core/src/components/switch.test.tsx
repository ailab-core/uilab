import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './switch'

describe('Switch Component', () => {
  describe('Rendering', () => {
    it('should render a switch element', () => {
      render(<Switch aria-label='Toggle switch' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      render(<Switch aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toHaveAttribute('data-slot', 'switch')
    })

    it('should render unchecked by default', () => {
      render(<Switch aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toHaveAttribute('data-state', 'unchecked')
    })

    it('should render switch thumb', () => {
      const { container } = render(<Switch aria-label='Toggle' />)
      const thumb = container.querySelector('[data-slot="switch-thumb"]')
      expect(thumb).toBeInTheDocument()
    })
  })

  describe('User Interaction', () => {
    it('should toggle when clicked', async () => {
      const user = userEvent.setup()
      render(<Switch aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')

      expect(switchElement).toHaveAttribute('data-state', 'unchecked')
      await user.click(switchElement)
      expect(switchElement).toHaveAttribute('data-state', 'checked')
      await user.click(switchElement)
      expect(switchElement).toHaveAttribute('data-state', 'unchecked')
    })

    it('should call onCheckedChange handler', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<Switch onCheckedChange={handleChange} aria-label='Toggle' />)

      const switchElement = screen.getByRole('switch')
      await user.click(switchElement)

      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('should not toggle when disabled', async () => {
      const user = userEvent.setup()
      render(<Switch disabled aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')

      await user.click(switchElement)
      expect(switchElement).toHaveAttribute('data-state', 'unchecked')
    })
  })

  describe('States', () => {
    it('should be checked when checked prop is true', () => {
      render(<Switch checked aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toHaveAttribute('data-state', 'checked')
    })

    it('should be disabled when disabled prop is true', () => {
      render(<Switch disabled aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toBeDisabled()
    })

    it('should apply custom className', () => {
      render(<Switch className='custom-class' aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toHaveClass('custom-class')
    })

    it('should have default styling classes', () => {
      render(<Switch aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toHaveClass('inline-flex', 'rounded-full', 'h-[1.15rem]', 'w-8')
    })
  })

  describe('Controlled Component', () => {
    it('should work as controlled component', async () => {
      const TestComponent = () => {
        const [checked, setChecked] = React.useState(false)
        return (
          <Switch
            checked={checked}
            onCheckedChange={setChecked}
            aria-label='Controlled switch'
          />
        )
      }

      const user = userEvent.setup()
      render(<TestComponent />)
      const switchElement = screen.getByRole('switch')

      expect(switchElement).toHaveAttribute('data-state', 'unchecked')
      await user.click(switchElement)
      expect(switchElement).toHaveAttribute('data-state', 'checked')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible with aria-label', () => {
      render(<Switch aria-label='Enable notifications' />)
      const switchElement = screen.getByLabelText('Enable notifications')
      expect(switchElement).toBeInTheDocument()
    })

    it('should be focusable', () => {
      render(<Switch aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      switchElement.focus()
      expect(switchElement).toHaveFocus()
    })

    it('should handle keyboard interaction (Space)', async () => {
      const user = userEvent.setup()
      render(<Switch aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')

      switchElement.focus()
      await user.keyboard(' ')
      expect(switchElement).toHaveAttribute('data-state', 'checked')
    })

    it('should have focus-visible styles', () => {
      render(<Switch aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50')
    })
  })

  describe('Visual States', () => {
    it('should apply checked state styles', () => {
      render(<Switch checked aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toHaveClass('data-[state=checked]:bg-primary')
    })

    it('should apply unchecked state styles', () => {
      render(<Switch aria-label='Toggle' />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toHaveClass('data-[state=unchecked]:bg-input')
    })

    it('should have thumb translation styles', () => {
      const { container } = render(<Switch checked aria-label='Toggle' />)
      const thumb = container.querySelector('[data-slot="switch-thumb"]')
      expect(thumb).toHaveClass('data-[state=checked]:translate-x-[calc(100%-2px)]')
    })
  })
})
