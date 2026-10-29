export type ProductCategory =
  | 'apparel'
  | 'home'
  | 'outdoor'
  | 'tech'
  | 'accessories'

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating'

export interface ProductVariant {
  id: string
  label: string
  inStock: boolean
}

export interface Product {
  id: string
  slug: string
  nameKey: string
  descriptionKey: string
  category: ProductCategory
  price: number
  compareAtPrice?: number
  rating: number
  reviewCount: number
  image: string
  images: string[]
  variants: ProductVariant[]
  stock: number
  badge?: 'new' | 'sale' | 'bestseller'
  featured?: boolean
}

export interface CartItem {
  productId: string
  variantId: string
  quantity: number
}

export interface CartLine extends CartItem {
  product: Product
  variant: ProductVariant
  lineTotal: number
}
