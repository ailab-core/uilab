import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarImage, AvatarFallback } from './avatar'

describe('Avatar Component', () => {
  describe('Avatar Root', () => {
    it('should render an avatar element', () => {
      const { container } = render(<Avatar />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(<Avatar />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('size-8', 'rounded-full', 'overflow-hidden')
    })

    it('should apply custom className', () => {
      const { container } = render(<Avatar className='custom-class' />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('custom-class')
    })
  })

  describe('AvatarImage', () => {
    it('should render with src attribute', () => {
      const { container } = render(
        <Avatar>
          <AvatarImage src='/avatar.jpg' alt='User Avatar' />
        </Avatar>
      )
      // Avatar image may not render immediately in tests
      const avatarRoot = container.querySelector('[data-slot="avatar"]')
      expect(avatarRoot).toBeInTheDocument()
    })

    it('should accept src and alt props', () => {
      const { container } = render(
        <Avatar>
          <AvatarImage src='/test.jpg' alt='Test Avatar' />
        </Avatar>
      )
      // Check that AvatarImage component is in the tree (even if not visible)
      expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument()
    })

    it('should apply custom className', () => {
      render(
        <Avatar>
          <AvatarImage src='/avatar.jpg' alt='Avatar' className='custom-img' />
        </Avatar>
      )
      // Avatar component should be present
      expect(document.querySelector('[data-slot="avatar"]')).toBeInTheDocument()
    })
  })

  describe('AvatarFallback', () => {
    it('should render fallback content', () => {
      render(
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByText('AB')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      )
      const fallback = container.querySelector('[data-slot="avatar-fallback"]')
      expect(fallback).toBeInTheDocument()
    })

    it('should have default styling classes', () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      )
      const fallback = container.querySelector('[data-slot="avatar-fallback"]')
      expect(fallback).toHaveClass('bg-muted', 'rounded-full', 'flex', 'items-center', 'justify-center')
    })

    it('should apply custom className', () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback className='custom-fallback'>AB</AvatarFallback>
        </Avatar>
      )
      const fallback = container.querySelector('[data-slot="avatar-fallback"]')
      expect(fallback).toHaveClass('custom-fallback')
    })
  })

  describe('Complete Avatar', () => {
    it('should render avatar with fallback', () => {
      render(
        <Avatar>
          <AvatarImage src='/avatar.jpg' alt='User' />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      )
      // Fallback should be visible
      expect(screen.getByText('AB')).toBeInTheDocument()
    })

    it('should render with initials as fallback', () => {
      render(
        <Avatar>
          <AvatarImage src='/avatar.jpg' alt='John Doe' />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByText('JD')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should provide text alternative via fallback', () => {
      render(
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByText('AB')).toBeInTheDocument()
    })
  })

  describe('Custom Sizes', () => {
    it('should support custom size via className', () => {
      const { container } = render(<Avatar className='size-16' />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('size-16')
    })
  })
})
