import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label } from './label'

describe('Label Component', () => {
  describe('Rendering', () => {
    it('should render a label element', () => {
      render(<Label>Label Text</Label>)
      expect(screen.getByText('Label Text')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Label>Label</Label>)
      const label = container.querySelector('[data-slot="label"]')
      expect(label).toBeInTheDocument()
    })

    it('should render children correctly', () => {
      render(<Label>Test Label</Label>)
      expect(screen.getByText('Test Label')).toBeInTheDocument()
    })

    it('should render with htmlFor attribute', () => {
      render(<Label htmlFor='input-id'>Label</Label>)
      const label = screen.getByText('Label')
      expect(label).toHaveAttribute('for', 'input-id')
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(<Label className='custom-class'>Label</Label>)
      const label = container.querySelector('[data-slot="label"]')
      expect(label).toHaveClass('custom-class')
    })

    it('should have default styling classes', () => {
      const { container } = render(<Label>Label</Label>)
      const label = container.querySelector('[data-slot="label"]')
      expect(label).toHaveClass('text-sm', 'font-medium', 'flex', 'items-center', 'gap-2')
    })

    it('should be non-selectable', () => {
      const { container } = render(<Label>Label</Label>)
      const label = container.querySelector('[data-slot="label"]')
      expect(label).toHaveClass('select-none')
    })
  })

  describe('Association with Form Controls', () => {
    it('should work with input elements', () => {
      render(
        <>
          <Label htmlFor='username'>Username</Label>
          <input id='username' type='text' />
        </>
      )

      const label = screen.getByText('Username')
      const input = screen.getByLabelText('Username')

      expect(label).toHaveAttribute('for', 'username')
      expect(input).toBeInTheDocument()
    })
  })

  describe('Disabled State', () => {
    it('should have peer-disabled styles', () => {
      const { container } = render(<Label>Label</Label>)
      const label = container.querySelector('[data-slot="label"]')
      expect(label).toHaveClass('peer-disabled:cursor-not-allowed', 'peer-disabled:opacity-50')
    })

    it('should have group disabled styles', () => {
      const { container } = render(<Label>Label</Label>)
      const label = container.querySelector('[data-slot="label"]')
      expect(label).toHaveClass('group-data-[disabled=true]:pointer-events-none')
    })
  })

  describe('Content', () => {
    it('should render with multiple children', () => {
      render(
        <Label>
          <span>Icon</span>
          <span>Label Text</span>
        </Label>
      )
      expect(screen.getByText('Icon')).toBeInTheDocument()
      expect(screen.getByText('Label Text')).toBeInTheDocument()
    })

    it('should accept HTML attributes', () => {
      const { container } = render(<Label title='Label title'>Label</Label>)
      const label = container.querySelector('[data-slot="label"]')
      expect(label).toHaveAttribute('title', 'Label title')
    })
  })

  describe('Accessibility', () => {
    it('should be properly associated with input via htmlFor', () => {
      render(
        <div>
          <Label htmlFor='email'>Email Address</Label>
          <input id='email' type='email' />
        </div>
      )

      const label = screen.getByText('Email Address')
      const input = screen.getByLabelText('Email Address')

      expect(label.getAttribute('for')).toBe('email')
      expect(input.id).toBe('email')
    })
  })
})
