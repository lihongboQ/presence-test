import type { Product, ProductCategory, SortOption } from '../types'

export interface CatalogQuery {
  search: string
  category: ProductCategory | 'all'
  sort: SortOption
}

export function filterAndSortProducts(
  items: Product[],
  query: CatalogQuery,
  resolveName: (p: Product) => string,
): Product[] {
  const q = query.search.trim().toLowerCase()

  let result = items.filter((p) => {
    if (query.category !== 'all' && p.category !== query.category) return false
    if (!q) return true
    const name = resolveName(p).toLowerCase()
    return name.includes(q) || p.category.includes(q) || p.slug.includes(q)
  })

  result = [...result].sort((a, b) => {
    switch (query.sort) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating || b.reviewCount - a.reviewCount
      case 'featured':
      default:
        return Number(!!b.featured) - Number(!!a.featured) || b.rating - a.rating
    }
  })

  return result
}
