import { Card } from 'uilab-core'

interface ComponentPreviewProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export function ComponentPreview({
  children,
  title,
  description,
}: ComponentPreviewProps) {
  return (
    <div className='not-prose my-8'>
      {(title || description) && (
        <div className='mb-4'>
          {title && (
            <h3 className='text-lg font-semibold text-foreground'>{title}</h3>
          )}
          {description && (
            <p className='text-sm text-muted-foreground'>{description}</p>
          )}
        </div>
      )}
      <Card className='relative overflow-hidden'>
        <div className='flex min-h-[350px] items-center justify-center p-8'>
          {children}
        </div>
      </Card>
    </div>
  )
}
