import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card'

describe('Card Component', () => {
  describe('Card Root', () => {
    it('should render a card element', () => {
      const { container } = render(<Card>Card content</Card>)
      const card = container.querySelector('[data-slot="card"]')
      expect(card).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(<Card>Card</Card>)
      const card = container.querySelector('[data-slot="card"]')
      expect(card).toHaveClass('bg-card', 'rounded-xl', 'border', 'shadow-sm', 'flex', 'flex-col')
    })

    it('should apply custom className', () => {
      const { container } = render(<Card className='custom-class'>Card</Card>)
      const card = container.querySelector('[data-slot="card"]')
      expect(card).toHaveClass('custom-class')
    })
  })

  describe('CardHeader', () => {
    it('should render header content', () => {
      render(
        <Card>
          <CardHeader>Header Content</CardHeader>
        </Card>
      )
      expect(screen.getByText('Header Content')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Card>
          <CardHeader>Header</CardHeader>
        </Card>
      )
      const header = container.querySelector('[data-slot="card-header"]')
      expect(header).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(
        <Card>
          <CardHeader>Header</CardHeader>
        </Card>
      )
      const header = container.querySelector('[data-slot="card-header"]')
      expect(header).toHaveClass('grid', 'px-6', 'gap-2')
    })

    it('should apply custom className', () => {
      const { container } = render(
        <Card>
          <CardHeader className='custom-header'>Header</CardHeader>
        </Card>
      )
      const header = container.querySelector('[data-slot="card-header"]')
      expect(header).toHaveClass('custom-header')
    })
  })

  describe('CardTitle', () => {
    it('should render title content', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByText('Card Title')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Card>
          <CardTitle>Title</CardTitle>
        </Card>
      )
      const title = container.querySelector('[data-slot="card-title"]')
      expect(title).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(
        <Card>
          <CardTitle>Title</CardTitle>
        </Card>
      )
      const title = container.querySelector('[data-slot="card-title"]')
      expect(title).toHaveClass('font-semibold', 'leading-none')
    })

    it('should apply custom className', () => {
      const { container } = render(
        <Card>
          <CardTitle className='custom-title'>Title</CardTitle>
        </Card>
      )
      const title = container.querySelector('[data-slot="card-title"]')
      expect(title).toHaveClass('custom-title')
    })
  })

  describe('CardDescription', () => {
    it('should render description content', () => {
      render(
        <Card>
          <CardDescription>Card description text</CardDescription>
        </Card>
      )
      expect(screen.getByText('Card description text')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Card>
          <CardDescription>Description</CardDescription>
        </Card>
      )
      const description = container.querySelector('[data-slot="card-description"]')
      expect(description).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(
        <Card>
          <CardDescription>Description</CardDescription>
        </Card>
      )
      const description = container.querySelector('[data-slot="card-description"]')
      expect(description).toHaveClass('text-muted-foreground', 'text-sm')
    })
  })

  describe('CardAction', () => {
    it('should render action content', () => {
      render(
        <Card>
          <CardHeader>
            <CardAction>
              <button>Action</button>
            </CardAction>
          </CardHeader>
        </Card>
      )
      expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Card>
          <CardAction>Action</CardAction>
        </Card>
      )
      const action = container.querySelector('[data-slot="card-action"]')
      expect(action).toBeInTheDocument()
    })

    it('should have grid positioning classes', () => {
      const { container } = render(
        <Card>
          <CardAction>Action</CardAction>
        </Card>
      )
      const action = container.querySelector('[data-slot="card-action"]')
      expect(action).toHaveClass('col-start-2', 'row-span-2', 'justify-self-end')
    })
  })

  describe('CardContent', () => {
    it('should render content', () => {
      render(
        <Card>
          <CardContent>Main content</CardContent>
        </Card>
      )
      expect(screen.getByText('Main content')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Card>
          <CardContent>Content</CardContent>
        </Card>
      )
      const content = container.querySelector('[data-slot="card-content"]')
      expect(content).toBeInTheDocument()
    })

    it('should have padding classes', () => {
      const { container } = render(
        <Card>
          <CardContent>Content</CardContent>
        </Card>
      )
      const content = container.querySelector('[data-slot="card-content"]')
      expect(content).toHaveClass('px-6')
    })
  })

  describe('CardFooter', () => {
    it('should render footer content', () => {
      render(
        <Card>
          <CardFooter>Footer content</CardFooter>
        </Card>
      )
      expect(screen.getByText('Footer content')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Card>
          <CardFooter>Footer</CardFooter>
        </Card>
      )
      const footer = container.querySelector('[data-slot="card-footer"]')
      expect(footer).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(
        <Card>
          <CardFooter>Footer</CardFooter>
        </Card>
      )
      const footer = container.querySelector('[data-slot="card-footer"]')
      expect(footer).toHaveClass('flex', 'items-center', 'px-6')
    })
  })

  describe('Complete Card', () => {
    it('should render full card with all parts', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description</CardDescription>
            <CardAction>
              <button>Action</button>
            </CardAction>
          </CardHeader>
          <CardContent>Main content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      )

      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('Card description')).toBeInTheDocument()
      expect(screen.getByText('Main content')).toBeInTheDocument()
      expect(screen.getByText('Footer')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument()
    })
  })

  describe('HTML Attributes', () => {
    it('should accept additional HTML attributes', () => {
      const { container } = render(<Card data-testid='test-card'>Card</Card>)
      const card = container.querySelector('[data-testid="test-card"]')
      expect(card).toBeInTheDocument()
    })
  })
})
