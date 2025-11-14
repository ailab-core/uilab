import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Spinner } from './spinner'

describe('Spinner Component', () => {
  describe('Rendering', () => {
    it('should render a spinner SVG element', () => {
      const { container } = render(<Spinner />)
      const spinner = container.querySelector('svg')
      expect(spinner).toBeInTheDocument()
    })

    it('should have status role for accessibility', () => {
      const { container } = render(<Spinner />)
      const spinner = container.querySelector('[role="status"]')
      expect(spinner).toBeInTheDocument()
    })

    it('should have aria-label for accessibility', () => {
      const { container } = render(<Spinner />)
      const spinner = container.querySelector('svg')
      expect(spinner).toHaveAttribute('aria-label', 'Loading')
    })
  })

  describe('Styling', () => {
    it('should have default size classes', () => {
      const { container } = render(<Spinner />)
      const spinner = container.querySelector('svg')
      expect(spinner).toHaveClass('size-4')
    })

    it('should have animate-spin class', () => {
      const { container } = render(<Spinner />)
      const spinner = container.querySelector('svg')
      expect(spinner).toHaveClass('animate-spin')
    })

    it('should apply custom className', () => {
      const { container } = render(<Spinner className='custom-class' />)
      const spinner = container.querySelector('svg')
      expect(spinner).toHaveClass('custom-class')
    })

    it('should support custom size via className', () => {
      const { container } = render(<Spinner className='size-8' />)
      const spinner = container.querySelector('svg')
      expect(spinner).toHaveClass('size-8')
    })
  })

  describe('HTML Attributes', () => {
    it('should accept SVG attributes', () => {
      const { container } = render(<Spinner data-testid='test-spinner' />)
      const spinner = container.querySelector('[data-testid="test-spinner"]')
      expect(spinner).toBeInTheDocument()
    })

    it('should accept aria attributes', () => {
      const { container } = render(<Spinner aria-label='Custom loading' />)
      const spinner = container.querySelector('svg')
      expect(spinner).toHaveAttribute('aria-label', 'Custom loading')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible with role and aria-label', () => {
      const { container } = render(<Spinner />)
      const spinner = container.querySelector('svg')
      expect(spinner).toHaveAttribute('role', 'status')
      expect(spinner).toHaveAttribute('aria-label', 'Loading')
    })

    it('should be screen reader friendly', () => {
      const { container } = render(<Spinner />)
      const spinner = container.querySelector('[role="status"]')
      expect(spinner).toBeInTheDocument()
    })
  })

  describe('Use Cases', () => {
    it('should render as loading indicator', () => {
      const { container } = render(
        <div>
          <Spinner />
          <span>Loading...</span>
        </div>
      )
      expect(container.querySelector('svg')).toBeInTheDocument()
      expect(container.textContent).toContain('Loading...')
    })

    it('should work in buttons', () => {
      const { container } = render(
        <button>
          <Spinner className='mr-2' />
          Loading
        </button>
      )
      const spinner = container.querySelector('svg')
      expect(spinner).toBeInTheDocument()
      expect(spinner).toHaveClass('mr-2')
    })
  })
})
