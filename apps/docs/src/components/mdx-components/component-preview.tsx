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
      <div className='flex flex-col gap-6 rounded-xl border py-6 shadow-sm relative overflow-hidden bg-fd-card'>
        <div className='flex min-h-[300px] items-center justify-center p-8'>
          {children}
        </div>
      </div>
    </div>
  )
}
