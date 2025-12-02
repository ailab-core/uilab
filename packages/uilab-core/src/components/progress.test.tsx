import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Progress } from './progress'

describe('Progress Component', () => {
  describe('Rendering', () => {
    it('should render a progress element', () => {
      const { container } = render(<Progress value={50} />)
      const progress = container.querySelector('[data-slot="progress"]')
      expect(progress).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Progress value={50} />)
      const progress = container.querySelector('[data-slot="progress"]')
      expect(progress).toHaveAttribute('data-slot', 'progress')
    })

    it('should render progress indicator', () => {
      const { container } = render(<Progress value={50} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(<Progress value={50} />)
      const progress = container.querySelector('[data-slot="progress"]')
      expect(progress).toHaveClass('h-2', 'w-full', 'rounded-full', 'overflow-hidden')
    })
  })

  describe('Progress Value', () => {
    it('should set correct transform for 0% progress', () => {
      const { container } = render(<Progress value={0} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]') as HTMLElement
      expect(indicator?.style.transform).toBe('translateX(-100%)')
    })

    it('should set correct transform for 50% progress', () => {
      const { container } = render(<Progress value={50} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]') as HTMLElement
      expect(indicator?.style.transform).toBe('translateX(-50%)')
    })

    it('should set correct transform for 100% progress', () => {
      const { container } = render(<Progress value={100} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]') as HTMLElement
      expect(indicator?.style.transform).toBe('translateX(-0%)')
    })

    it('should handle undefined value (defaults to 0)', () => {
      const { container } = render(<Progress />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]') as HTMLElement
      expect(indicator?.style.transform).toBe('translateX(-100%)')
    })

    it('should handle partial progress values', () => {
      const { container } = render(<Progress value={33} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]') as HTMLElement
      expect(indicator?.style.transform).toBe('translateX(-67%)')
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(<Progress value={50} className='custom-class' />)
      const progress = container.querySelector('[data-slot="progress"]')
      expect(progress).toHaveClass('custom-class')
    })

    it('should have background color classes', () => {
      const { container } = render(<Progress value={50} />)
      const progress = container.querySelector('[data-slot="progress"]')
      expect(progress).toHaveClass('bg-primary/20')
    })

    it('should have indicator styling classes', () => {
      const { container } = render(<Progress value={50} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toHaveClass('bg-primary', 'h-full', 'w-full', 'transition-all')
    })
  })

  describe('Accessibility', () => {
    it('should have progressbar role', () => {
      const { container } = render(<Progress value={50} />)
      const progress = container.querySelector('[role="progressbar"]')
      expect(progress).toBeInTheDocument()
    })

    it('should have aria-valuemax attribute', () => {
      const { container } = render(<Progress value={50} max={100} />)
      const progress = container.querySelector('[role="progressbar"]')
      expect(progress).toHaveAttribute('aria-valuemax', '100')
    })

    it('should support aria-label', () => {
      const { container } = render(<Progress value={50} aria-label='Loading progress' />)
      const progress = container.querySelector('[role="progressbar"]')
      expect(progress).toHaveAttribute('aria-label', 'Loading progress')
    })
  })

  describe('Edge Cases', () => {
    it('should render with negative values', () => {
      const { container } = render(<Progress value={-10} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toBeInTheDocument()
    })

    it('should render with values over 100', () => {
      const { container } = render(<Progress value={150} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]')
      expect(indicator).toBeInTheDocument()
    })
  })

  describe('Dynamic Updates', () => {
    it('should update progress when value changes', () => {
      const { container, rerender } = render(<Progress value={25} />)
      const indicator = container.querySelector('[data-slot="progress-indicator"]') as HTMLElement
      expect(indicator?.style.transform).toBe('translateX(-75%)')

      rerender(<Progress value={75} />)
      expect(indicator?.style.transform).toBe('translateX(-25%)')
    })
  })

  describe('HTML Attributes', () => {
    it('should accept additional HTML attributes', () => {
      const { container } = render(<Progress value={50} data-testid='test-progress' />)
      const progress = container.querySelector('[data-testid="test-progress"]')
      expect(progress).toBeInTheDocument()
    })
  })
})
