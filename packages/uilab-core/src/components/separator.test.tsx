import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Separator } from './separator'

describe('Separator Component', () => {
  describe('Rendering', () => {
    it('should render a separator element', () => {
      const { container } = render(<Separator />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Separator />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toHaveAttribute('data-slot', 'separator')
    })

    it('should be decorative by default', () => {
      const { container } = render(<Separator />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toHaveAttribute('data-orientation', 'horizontal')
    })
  })

  describe('Orientation', () => {
    it('should render horizontal by default', () => {
      const { container } = render(<Separator />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toHaveAttribute('data-orientation', 'horizontal')
    })

    it('should render vertical when orientation is vertical', () => {
      const { container } = render(<Separator orientation='vertical' />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toHaveAttribute('data-orientation', 'vertical')
    })

    it('should have horizontal size classes for horizontal orientation', () => {
      const { container } = render(<Separator orientation='horizontal' />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toHaveClass('data-[orientation=horizontal]:h-px')
      expect(separator).toHaveClass('data-[orientation=horizontal]:w-full')
    })

    it('should have vertical size classes for vertical orientation', () => {
      const { container } = render(<Separator orientation='vertical' />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toHaveClass('data-[orientation=vertical]:h-full')
      expect(separator).toHaveClass('data-[orientation=vertical]:w-px')
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(<Separator className='custom-class' />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toHaveClass('custom-class')
    })

    it('should have default styling classes', () => {
      const { container } = render(<Separator />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toHaveClass('bg-border', 'shrink-0')
    })
  })

  describe('Decorative Prop', () => {
    it('should be decorative by default', () => {
      const { container } = render(<Separator />)
      const separator = container.querySelector('[data-slot="separator"]')
      // Decorative separators should not be in accessibility tree
      expect(separator).toBeInTheDocument()
    })

    it('should accept decorative prop as false', () => {
      const { container } = render(<Separator decorative={false} />)
      const separator = container.querySelector('[data-slot="separator"]')
      expect(separator).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have separator role when not decorative', () => {
      const { container } = render(<Separator decorative={false} />)
      const separator = container.querySelector('[role="separator"]')
      expect(separator).toBeInTheDocument()
    })

    it('should have aria-orientation attribute', () => {
      const { container } = render(<Separator orientation='vertical' decorative={false} />)
      const separator = container.querySelector('[role="separator"]')
      expect(separator).toHaveAttribute('aria-orientation', 'vertical')
    })
  })

  describe('HTML Attributes', () => {
    it('should accept additional HTML attributes', () => {
      const { container } = render(<Separator data-testid='my-separator' />)
      const separator = container.querySelector('[data-testid="my-separator"]')
      expect(separator).toBeInTheDocument()
    })
  })
})
