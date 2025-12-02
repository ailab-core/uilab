import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Alert, AlertTitle, AlertDescription } from './alert'

describe('Alert Component', () => {
  describe('Alert Root', () => {
    it('should render an alert element', () => {
      render(<Alert>Alert content</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Alert>Alert</Alert>)
      const alert = container.querySelector('[data-slot="alert"]')
      expect(alert).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(<Alert>Alert</Alert>)
      const alert = container.querySelector('[data-slot="alert"]')
      expect(alert).toHaveClass('rounded-lg', 'border', 'px-4', 'py-3')
    })

    it('should apply custom className', () => {
      const { container } = render(<Alert className='custom-class'>Alert</Alert>)
      const alert = container.querySelector('[data-slot="alert"]')
      expect(alert).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      const { container } = render(<Alert>Default Alert</Alert>)
      const alert = container.querySelector('[data-slot="alert"]')
      expect(alert).toHaveClass('bg-card', 'text-card-foreground')
    })

    it('should apply destructive variant classes', () => {
      const { container } = render(<Alert variant='destructive'>Error Alert</Alert>)
      const alert = container.querySelector('[data-slot="alert"]')
      expect(alert).toHaveClass('text-destructive', 'bg-card')
    })
  })

  describe('AlertTitle', () => {
    it('should render title content', () => {
      render(
        <Alert>
          <AlertTitle>Alert Title</AlertTitle>
        </Alert>
      )
      expect(screen.getByText('Alert Title')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Alert>
          <AlertTitle>Title</AlertTitle>
        </Alert>
      )
      const title = container.querySelector('[data-slot="alert-title"]')
      expect(title).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(
        <Alert>
          <AlertTitle>Title</AlertTitle>
        </Alert>
      )
      const title = container.querySelector('[data-slot="alert-title"]')
      expect(title).toHaveClass('font-medium', 'tracking-tight', 'col-start-2')
    })

    it('should apply custom className', () => {
      const { container } = render(
        <Alert>
          <AlertTitle className='custom-title'>Title</AlertTitle>
        </Alert>
      )
      const title = container.querySelector('[data-slot="alert-title"]')
      expect(title).toHaveClass('custom-title')
    })
  })

  describe('AlertDescription', () => {
    it('should render description content', () => {
      render(
        <Alert>
          <AlertDescription>Alert description text</AlertDescription>
        </Alert>
      )
      expect(screen.getByText('Alert description text')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Alert>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      )
      const description = container.querySelector('[data-slot="alert-description"]')
      expect(description).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(
        <Alert>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      )
      const description = container.querySelector('[data-slot="alert-description"]')
      expect(description).toHaveClass('text-muted-foreground', 'col-start-2', 'text-sm')
    })

    it('should apply custom className', () => {
      const { container } = render(
        <Alert>
          <AlertDescription className='custom-desc'>Description</AlertDescription>
        </Alert>
      )
      const description = container.querySelector('[data-slot="alert-description"]')
      expect(description).toHaveClass('custom-desc')
    })
  })

  describe('Complete Alert', () => {
    it('should render title and description together', () => {
      render(
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app.</AlertDescription>
        </Alert>
      )
      expect(screen.getByText('Heads up!')).toBeInTheDocument()
      expect(screen.getByText('You can add components to your app.')).toBeInTheDocument()
    })

    it('should render with icon', () => {
      render(
        <Alert>
          <svg data-testid='alert-icon' />
          <AlertTitle>With Icon</AlertTitle>
          <AlertDescription>Alert with icon</AlertDescription>
        </Alert>
      )
      expect(screen.getByTestId('alert-icon')).toBeInTheDocument()
      expect(screen.getByText('With Icon')).toBeInTheDocument()
    })

    it('should render destructive alert with all parts', () => {
      render(
        <Alert variant='destructive'>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Your session has expired.</AlertDescription>
        </Alert>
      )
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('text-destructive')
      expect(screen.getByText('Error')).toBeInTheDocument()
      expect(screen.getByText('Your session has expired.')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have alert role', () => {
      render(<Alert>Important message</Alert>)
      const alert = screen.getByRole('alert')
      expect(alert).toBeInTheDocument()
    })

    it('should be accessible to screen readers', () => {
      render(
        <Alert>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Please review your changes before submitting.</AlertDescription>
        </Alert>
      )
      const alert = screen.getByRole('alert')
      expect(alert).toHaveTextContent('Warning')
      expect(alert).toHaveTextContent('Please review your changes before submitting.')
    })
  })

  describe('Grid Layout', () => {
    it('should have grid layout classes', () => {
      const { container } = render(<Alert>Alert</Alert>)
      const alert = container.querySelector('[data-slot="alert"]')
      expect(alert).toHaveClass('grid')
    })

    it('should adjust grid columns when icon is present', () => {
      const { container } = render(
        <Alert>
          <svg />
          <AlertTitle>Title</AlertTitle>
        </Alert>
      )
      const alert = container.querySelector('[data-slot="alert"]')
      expect(alert).toHaveClass('has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr]')
    })
  })
})
