import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge, badgeVariants } from './badge'

describe('Badge Component', () => {
  describe('Rendering', () => {
    it('should render a span element', () => {
      render(<Badge>Badge</Badge>)
      expect(screen.getByText('Badge')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Badge>Badge</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toBeInTheDocument()
    })

    it('should render children correctly', () => {
      render(<Badge>Test Badge</Badge>)
      expect(screen.getByText('Test Badge')).toBeInTheDocument()
    })

    it('should render with icons', () => {
      render(
        <Badge>
          <svg data-testid='icon' />
          With Icon
        </Badge>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByText('With Icon')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      const { container } = render(<Badge>Default</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('bg-primary', 'text-primary-foreground')
    })

    it('should apply secondary variant classes', () => {
      const { container } = render(<Badge variant='secondary'>Secondary</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('bg-secondary', 'text-secondary-foreground')
    })

    it('should apply success variant classes', () => {
      const { container } = render(<Badge variant='success'>Success</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('bg-success')
    })

    it('should apply warning variant classes', () => {
      const { container } = render(<Badge variant='warning'>Warning</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('bg-warning')
    })

    it('should apply destructive variant classes', () => {
      const { container } = render(<Badge variant='destructive'>Error</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('bg-destructive', 'text-white')
    })

    it('should apply outline variant classes', () => {
      const { container } = render(<Badge variant='outline'>Outline</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('text-foreground')
    })
  })

  describe('Custom Props', () => {
    it('should accept custom className', () => {
      const { container } = render(<Badge className='custom-class'>Custom</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('custom-class')
    })

    it('should have base styling classes', () => {
      const { container } = render(<Badge>Badge</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('inline-flex', 'items-center', 'rounded-md', 'px-2', 'text-xs')
    })

    it('should accept HTML span attributes', () => {
      const { container } = render(<Badge title='Badge title'>Badge</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveAttribute('title', 'Badge title')
    })
  })

  describe('asChild prop', () => {
    it('should render as Slot when asChild is true', () => {
      render(
        <Badge asChild>
          <a href='/test' data-testid='badge-link'>
            Link Badge
          </a>
        </Badge>
      )

      const link = screen.getByTestId('badge-link')
      expect(link).toBeInTheDocument()
      expect(link.tagName).toBe('A')
      expect(link).toHaveAttribute('href', '/test')
    })

    it('should apply badge classes to child element when asChild is true', () => {
      render(
        <Badge asChild variant='destructive'>
          <a href='/test' data-testid='badge-link'>
            Link
          </a>
        </Badge>
      )

      const link = screen.getByTestId('badge-link')
      expect(link).toHaveClass('bg-destructive')
    })
  })

  describe('badgeVariants', () => {
    it('should generate correct classes for default variant', () => {
      const classes = badgeVariants()
      expect(classes).toContain('bg-primary')
      expect(classes).toContain('text-primary-foreground')
    })

    it('should generate correct classes for custom variant', () => {
      const classes = badgeVariants({ variant: 'outline' })
      expect(classes).toContain('text-foreground')
    })

    it('should accept custom className', () => {
      const classes = badgeVariants({ className: 'custom-test' })
      expect(classes).toContain('custom-test')
    })
  })

  describe('Accessibility', () => {
    it('should have focus-visible styles', () => {
      const { container } = render(<Badge>Badge</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50')
    })

    it('should handle aria-invalid state', () => {
      const { container } = render(<Badge aria-invalid>Invalid</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveAttribute('aria-invalid')
      expect(badge).toHaveClass('aria-invalid:border-destructive')
    })
  })

  describe('Responsive Behavior', () => {
    it('should have whitespace-nowrap for text overflow', () => {
      const { container } = render(<Badge>Long Badge Text</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('whitespace-nowrap')
    })

    it('should have w-fit for width fitting', () => {
      const { container } = render(<Badge>Badge</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('w-fit')
    })

    it('should have shrink-0 class', () => {
      const { container } = render(<Badge>Badge</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('shrink-0')
    })
  })
})
