import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button, buttonVariants } from './button'

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render a button element', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
    })

    it('should render children correctly', () => {
      render(<Button>Test Button</Button>)
      expect(screen.getByText('Test Button')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('data-slot', 'button')
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      render(<Button>Default</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary', 'text-primary-foreground')
    })

    it('should apply destructive variant classes', () => {
      render(<Button variant='destructive'>Delete</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-destructive', 'text-white')
    })

    it('should apply outline variant classes', () => {
      render(<Button variant='outline'>Outline</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border', 'bg-background')
    })

    it('should apply secondary variant classes', () => {
      render(<Button variant='secondary'>Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground')
    })

    it('should apply ghost variant classes', () => {
      render(<Button variant='ghost'>Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:bg-accent')
    })

    it('should apply link variant classes', () => {
      render(<Button variant='link'>Link</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('text-primary', 'underline-offset-4')
    })
  })

  describe('Sizes', () => {
    it('should apply default size classes', () => {
      render(<Button>Default Size</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-9', 'px-4', 'py-2')
    })

    it('should apply small size classes', () => {
      render(<Button size='sm'>Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-8')
    })

    it('should apply large size classes', () => {
      render(<Button size='lg'>Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-10', 'px-6')
    })

    it('should apply icon size classes', () => {
      render(<Button size='icon'>Icon</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('size-9')
    })

    it('should apply icon-sm size classes', () => {
      render(<Button size='icon-sm'>Icon SM</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('size-8')
    })

    it('should apply icon-lg size classes', () => {
      render(<Button size='icon-lg'>Icon LG</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('size-10')
    })
  })

  describe('Custom Props', () => {
    it('should accept custom className', () => {
      render(<Button className='custom-class'>Custom</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })

    it('should handle disabled state', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50')
    })

    it('should accept onClick handler', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Button onClick={handleClick}>Click</Button>)

      const button = screen.getByRole('button')
      await user.click(button)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not trigger onClick when disabled', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      )

      const button = screen.getByRole('button')
      await user.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })

    it('should accept type prop', () => {
      render(<Button type='submit'>Submit</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
    })
  })

  describe('asChild prop', () => {
    it('should render as Slot when asChild is true', () => {
      render(
        <Button asChild>
          <a href='/test'>Link Button</a>
        </Button>
      )

      const link = screen.getByRole('link', { name: /link button/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/test')
    })

    it('should apply button classes to child element when asChild is true', () => {
      render(
        <Button asChild variant='destructive'>
          <a href='/test'>Link</a>
        </Button>
      )

      const link = screen.getByRole('link')
      expect(link).toHaveClass('bg-destructive')
    })
  })

  describe('buttonVariants', () => {
    it('should generate correct classes for default variant and size', () => {
      const classes = buttonVariants()
      expect(classes).toContain('bg-primary')
      expect(classes).toContain('h-9')
    })

    it('should generate correct classes for custom variant and size', () => {
      const classes = buttonVariants({ variant: 'outline', size: 'lg' })
      expect(classes).toContain('border')
      expect(classes).toContain('h-10')
    })

    it('should accept custom className', () => {
      const classes = buttonVariants({ className: 'custom-test' })
      expect(classes).toContain('custom-test')
    })
  })

  describe('Accessibility', () => {
    it('should be focusable', () => {
      render(<Button>Focus Test</Button>)
      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()
    })

    it('should have focus-visible styles', () => {
      render(<Button>Focus</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50')
    })

    it('should have aria-invalid styles', () => {
      render(<Button aria-invalid>Invalid</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('aria-invalid:ring-destructive/20', 'aria-invalid:border-destructive')
    })
  })
})
