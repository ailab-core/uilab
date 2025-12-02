import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('class1', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('should handle conditional classes', () => {
    const result = cn('class1', false && 'class2', 'class3')
    expect(result).toBe('class1 class3')
  })

  it('should merge Tailwind classes correctly', () => {
    const result = cn('px-2 py-1', 'px-4')
    expect(result).toBe('py-1 px-4')
  })

  it('should handle array of classes', () => {
    const result = cn(['class1', 'class2'])
    expect(result).toBe('class1 class2')
  })

  it('should handle object notation', () => {
    const result = cn({
      class1: true,
      class2: false,
      class3: true,
    })
    expect(result).toBe('class1 class3')
  })

  it('should handle undefined and null values', () => {
    const result = cn('class1', undefined, null, 'class2')
    expect(result).toBe('class1 class2')
  })

  it('should handle empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('should merge conflicting Tailwind classes (keep last)', () => {
    const result = cn('bg-red-500', 'bg-blue-500')
    expect(result).toBe('bg-blue-500')
  })

  it('should handle complex class combinations', () => {
    const result = cn(
      'flex items-center',
      'justify-center',
      { 'bg-blue-500': true },
      ['text-white', 'font-bold']
    )
    expect(result).toBe('flex items-center justify-center bg-blue-500 text-white font-bold')
  })
})
