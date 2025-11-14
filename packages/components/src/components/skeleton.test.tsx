import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Skeleton } from './skeleton'

describe('Skeleton Component', () => {
  describe('Rendering', () => {
    it('should render a div element', () => {
      const { container } = render(<Skeleton />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Skeleton />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveAttribute('data-slot', 'skeleton')
    })

    it('should be a div element', () => {
      const { container } = render(<Skeleton />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton?.tagName).toBe('DIV')
    })
  })

  describe('Styling', () => {
    it('should have default styling classes', () => {
      const { container } = render(<Skeleton />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveClass('bg-accent', 'animate-pulse', 'rounded-md')
    })

    it('should apply custom className', () => {
      const { container } = render(<Skeleton className='custom-class' />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveClass('custom-class')
    })

    it('should have animate-pulse for loading animation', () => {
      const { container } = render(<Skeleton />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveClass('animate-pulse')
    })

    it('should have rounded corners', () => {
      const { container } = render(<Skeleton />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveClass('rounded-md')
    })
  })

  describe('Dimensions', () => {
    it('should accept custom dimensions via className', () => {
      const { container } = render(<Skeleton className='h-10 w-full' />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveClass('h-10', 'w-full')
    })

    it('should work with inline styles', () => {
      const { container } = render(<Skeleton style={{ width: '200px', height: '50px' }} />)
      const skeleton = container.querySelector('[data-slot="skeleton"]') as HTMLElement
      expect(skeleton?.style.width).toBe('200px')
      expect(skeleton?.style.height).toBe('50px')
    })
  })

  describe('HTML Attributes', () => {
    it('should accept div attributes', () => {
      const { container } = render(<Skeleton data-testid='test-skeleton' />)
      const skeleton = container.querySelector('[data-testid="test-skeleton"]')
      expect(skeleton).toBeInTheDocument()
    })

    it('should accept aria attributes', () => {
      const { container } = render(<Skeleton aria-label='Loading content' />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveAttribute('aria-label', 'Loading content')
    })
  })

  describe('Use Cases', () => {
    it('should render as text skeleton', () => {
      const { container } = render(<Skeleton className='h-4 w-[250px]' />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveClass('h-4', 'w-[250px]')
    })

    it('should render as circular skeleton', () => {
      const { container } = render(<Skeleton className='h-12 w-12 rounded-full' />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveClass('h-12', 'w-12', 'rounded-full')
    })

    it('should render multiple skeletons for complex layouts', () => {
      const { container } = render(
        <div>
          <Skeleton className='h-12 w-12 rounded-full' />
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      )
      const skeletons = container.querySelectorAll('[data-slot="skeleton"]')
      expect(skeletons).toHaveLength(3)
    })
  })

  describe('Accessibility', () => {
    it('should be accessible with proper aria attributes', () => {
      const { container } = render(<Skeleton aria-busy='true' role='status' />)
      const skeleton = container.querySelector('[data-slot="skeleton"]')
      expect(skeleton).toHaveAttribute('aria-busy', 'true')
      expect(skeleton).toHaveAttribute('role', 'status')
    })
  })
})
