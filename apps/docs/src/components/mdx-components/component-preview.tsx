export function ComponentPreview({
  children,
  title,
  description,
}: {
  children: React.ReactNode
  title?: string
  description?: string
}) {
  return (
    <div className="not-prose my-8">
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-foreground text-lg font-semibold">{title}</h3>
          )}
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      )}
      <div className="bg-fd-card relative flex flex-col gap-6 overflow-hidden rounded-xl border py-6 shadow-sm">
        <div className="flex min-h-[300px] items-center justify-center p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
