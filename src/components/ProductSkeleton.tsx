export function ProductSkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="product-grid" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-media shimmer" />
          <div className="skeleton-line shimmer" />
          <div className="skeleton-line short shimmer" />
        </div>
      ))}
    </div>
  )
}
