import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Kbd, KbdGroup } from './kbd'

describe('Kbd Component', () => {
  describe('Rendering', () => {
    it('should render a kbd element', () => {
      render(<Kbd>Ctrl</Kbd>)
      expect(screen.getByText('Ctrl')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Kbd>K</Kbd>)
      const kbd = container.querySelector('[data-slot="kbd"]')
      expect(kbd).toBeInTheDocument()
    })

    it('should render children correctly', () => {
      render(<Kbd>Enter</Kbd>)
      expect(screen.getByText('Enter')).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should have default styling classes', () => {
      const { container } = render(<Kbd>K</Kbd>)
      const kbd = container.querySelector('[data-slot="kbd"]')
      expect(kbd).toHaveClass('inline-flex', 'items-center', 'rounded-sm', 'px-1', 'text-xs')
    })

    it('should be non-selectable', () => {
      const { container } = render(<Kbd>K</Kbd>)
      const kbd = container.querySelector('[data-slot="kbd"]')
      expect(kbd).toHaveClass('select-none', 'pointer-events-none')
    })

    it('should apply custom className', () => {
      const { container } = render(<Kbd className='custom-class'>K</Kbd>)
      const kbd = container.querySelector('[data-slot="kbd"]')
      expect(kbd).toHaveClass('custom-class')
    })

    it('should have background and text color classes', () => {
      const { container } = render(<Kbd>K</Kbd>)
      const kbd = container.querySelector('[data-slot="kbd"]')
      expect(kbd).toHaveClass('bg-muted', 'text-muted-foreground')
    })
  })

  describe('Content', () => {
    it('should render single key', () => {
      render(<Kbd>K</Kbd>)
      expect(screen.getByText('K')).toBeInTheDocument()
    })

    it('should render keyboard shortcut text', () => {
      render(<Kbd>Ctrl+C</Kbd>)
      expect(screen.getByText('Ctrl+C')).toBeInTheDocument()
    })

    it('should render with icons', () => {
      render(
        <Kbd>
          <svg data-testid='icon' />K
        </Kbd>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByText('K')).toBeInTheDocument()
    })
  })

  describe('HTML Attributes', () => {
    it('should accept kbd attributes', () => {
      const { container } = render(<Kbd data-testid='test-kbd'>K</Kbd>)
      const kbd = container.querySelector('[data-testid="test-kbd"]')
      expect(kbd).toBeInTheDocument()
    })

    it('should accept title attribute', () => {
      const { container } = render(<Kbd title='Keyboard shortcut'>K</Kbd>)
      const kbd = container.querySelector('[data-slot="kbd"]')
      expect(kbd).toHaveAttribute('title', 'Keyboard shortcut')
    })
  })

  describe('Accessibility', () => {
    it('should be keyboard element', () => {
      const { container } = render(<Kbd>Escape</Kbd>)
      const kbd = container.querySelector('kbd')
      expect(kbd?.tagName).toBe('KBD')
    })
  })
})

describe('KbdGroup Component', () => {
  describe('Rendering', () => {
    it('should render a kbd group', () => {
      const { container } = render(
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      )
      const group = container.querySelector('[data-slot="kbd-group"]')
      expect(group).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
        </KbdGroup>
      )
      const group = container.querySelector('[data-slot="kbd-group"]')
      expect(group).toBeInTheDocument()
    })

    it('should render multiple kbd elements', () => {
      render(
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      )
      expect(screen.getByText('Ctrl')).toBeInTheDocument()
      expect(screen.getByText('Shift')).toBeInTheDocument()
      expect(screen.getByText('K')).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should have flex layout classes', () => {
      const { container } = render(
        <KbdGroup>
          <Kbd>K</Kbd>
        </KbdGroup>
      )
      const group = container.querySelector('[data-slot="kbd-group"]')
      expect(group).toHaveClass('inline-flex', 'items-center', 'gap-1')
    })

    it('should apply custom className', () => {
      const { container } = render(
        <KbdGroup className='custom-group'>
          <Kbd>K</Kbd>
        </KbdGroup>
      )
      const group = container.querySelector('[data-slot="kbd-group"]')
      expect(group).toHaveClass('custom-group')
    })
  })

  describe('Use Cases', () => {
    it('should represent keyboard shortcuts', () => {
      render(
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      )
      expect(screen.getByText('⌘')).toBeInTheDocument()
      expect(screen.getByText('K')).toBeInTheDocument()
    })
  })
})
