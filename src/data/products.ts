import type { Product } from '../types'

/** Local mock catalog — lifestyle essentials for English-speaking markets */
export const products: Product[] = [
  {
    id: 'p01',
    slug: 'linen-overshirt',
    nameKey: 'products.p01.name',
    descriptionKey: 'products.p01.desc',
    category: 'apparel',
    price: 89,
    compareAtPrice: 118,
    rating: 4.7,
    reviewCount: 214,
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
    ],
    variants: [
      { id: 's', label: 'S', inStock: true },
      { id: 'm', label: 'M', inStock: true },
      { id: 'l', label: 'L', inStock: true },
      { id: 'xl', label: 'XL', inStock: false },
    ],
    stock: 42,
    badge: 'sale',
    featured: true,
  },
  {
    id: 'p02',
    slug: 'ceramic-pour-over',
    nameKey: 'products.p02.name',
    descriptionKey: 'products.p02.desc',
    category: 'home',
    price: 48,
    rating: 4.9,
    reviewCount: 502,
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    ],
    variants: [
      { id: 'sand', label: 'Sand', inStock: true },
      { id: 'slate', label: 'Slate', inStock: true },
      { id: 'ink', label: 'Ink', inStock: true },
    ],
    stock: 86,
    badge: 'bestseller',
    featured: true,
  },
  {
    id: 'p03',
    slug: 'trail-daypack',
    nameKey: 'products.p03.name',
    descriptionKey: 'products.p03.desc',
    category: 'outdoor',
    price: 128,
    rating: 4.6,
    reviewCount: 178,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    variants: [
      { id: 'olive', label: 'Olive', inStock: true },
      { id: 'navy', label: 'Navy', inStock: true },
      { id: 'black', label: 'Black', inStock: false },
    ],
    stock: 31,
    featured: true,
  },
  {
    id: 'p04',
    slug: 'noise-cancelling-buds',
    nameKey: 'products.p04.name',
    descriptionKey: 'products.p04.desc',
    category: 'tech',
    price: 159,
    compareAtPrice: 199,
    rating: 4.5,
    reviewCount: 891,
    image:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    ],
    variants: [
      { id: 'white', label: 'White', inStock: true },
      { id: 'graphite', label: 'Graphite', inStock: true },
    ],
    stock: 64,
    badge: 'sale',
  },
  {
    id: 'p05',
    slug: 'merino-crew-socks',
    nameKey: 'products.p05.name',
    descriptionKey: 'products.p05.desc',
    category: 'apparel',
    price: 24,
    rating: 4.8,
    reviewCount: 356,
    image:
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80',
    ],
    variants: [
      { id: 'm', label: 'M', inStock: true },
      { id: 'l', label: 'L', inStock: true },
    ],
    stock: 120,
    badge: 'new',
  },
  {
    id: 'p06',
    slug: 'oak-side-table',
    nameKey: 'products.p06.name',
    descriptionKey: 'products.p06.desc',
    category: 'home',
    price: 249,
    rating: 4.4,
    reviewCount: 67,
    image:
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80',
    ],
    variants: [
      { id: 'natural', label: 'Natural Oak', inStock: true },
      { id: 'walnut', label: 'Walnut', inStock: true },
    ],
    stock: 12,
  },
  {
    id: 'p07',
    slug: 'insulated-bottle',
    nameKey: 'products.p07.name',
    descriptionKey: 'products.p07.desc',
    category: 'outdoor',
    price: 36,
    rating: 4.7,
    reviewCount: 1120,
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
    ],
    variants: [
      { id: 'seafoam', label: 'Seafoam', inStock: true },
      { id: 'coral', label: 'Coral', inStock: true },
      { id: 'steel', label: 'Steel', inStock: true },
    ],
    stock: 200,
    badge: 'bestseller',
    featured: true,
  },
  {
    id: 'p08',
    slug: 'leather-card-holder',
    nameKey: 'products.p08.name',
    descriptionKey: 'products.p08.desc',
    category: 'accessories',
    price: 42,
    rating: 4.6,
    reviewCount: 243,
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    ],
    variants: [
      { id: 'tan', label: 'Tan', inStock: true },
      { id: 'black', label: 'Black', inStock: true },
    ],
    stock: 55,
  },
  {
    id: 'p09',
    slug: 'softshell-jacket',
    nameKey: 'products.p09.name',
    descriptionKey: 'products.p09.desc',
    category: 'apparel',
    price: 168,
    compareAtPrice: 210,
    rating: 4.5,
    reviewCount: 98,
    image:
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
    ],
    variants: [
      { id: 's', label: 'S', inStock: true },
      { id: 'm', label: 'M', inStock: true },
      { id: 'l', label: 'L', inStock: false },
      { id: 'xl', label: 'XL', inStock: true },
    ],
    stock: 28,
    badge: 'sale',
  },
  {
    id: 'p10',
    slug: 'linen-duvet-set',
    nameKey: 'products.p10.name',
    descriptionKey: 'products.p10.desc',
    category: 'home',
    price: 189,
    rating: 4.8,
    reviewCount: 412,
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    ],
    variants: [
      { id: 'queen', label: 'Queen', inStock: true },
      { id: 'king', label: 'King', inStock: true },
    ],
    stock: 19,
    badge: 'new',
  },
  {
    id: 'p11',
    slug: 'camping-lantern',
    nameKey: 'products.p11.name',
    descriptionKey: 'products.p11.desc',
    category: 'outdoor',
    price: 54,
    rating: 4.3,
    reviewCount: 156,
    image:
      'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80',
    ],
    variants: [
      { id: 'default', label: 'Standard', inStock: true },
    ],
    stock: 73,
  },
  {
    id: 'p12',
    slug: 'wireless-charger',
    nameKey: 'products.p12.name',
    descriptionKey: 'products.p12.desc',
    category: 'tech',
    price: 39,
    rating: 4.2,
    reviewCount: 620,
    image:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    ],
    variants: [
      { id: 'matte', label: 'Matte Black', inStock: true },
      { id: 'stone', label: 'Stone', inStock: true },
    ],
    stock: 90,
  },
  {
    id: 'p13',
    slug: 'canvas-tote',
    nameKey: 'products.p13.name',
    descriptionKey: 'products.p13.desc',
    category: 'accessories',
    price: 32,
    rating: 4.9,
    reviewCount: 788,
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    ],
    variants: [
      { id: 'natural', label: 'Natural', inStock: true },
      { id: 'indigo', label: 'Indigo', inStock: true },
    ],
    stock: 150,
    badge: 'bestseller',
  },
  {
    id: 'p14',
    slug: 'wool-beanie',
    nameKey: 'products.p14.name',
    descriptionKey: 'products.p14.desc',
    category: 'apparel',
    price: 28,
    rating: 4.6,
    reviewCount: 301,
    image:
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80',
    ],
    variants: [
      { id: 'charcoal', label: 'Charcoal', inStock: true },
      { id: 'rust', label: 'Rust', inStock: true },
      { id: 'forest', label: 'Forest', inStock: false },
    ],
    stock: 44,
  },
  {
    id: 'p15',
    slug: 'scented-candle-set',
    nameKey: 'products.p15.name',
    descriptionKey: 'products.p15.desc',
    category: 'home',
    price: 58,
    rating: 4.7,
    reviewCount: 265,
    image:
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80',
    ],
    variants: [
      { id: 'coastal', label: 'Coastal Set', inStock: true },
      { id: 'forest', label: 'Forest Set', inStock: true },
    ],
    stock: 38,
    badge: 'new',
  },
  {
    id: 'p16',
    slug: 'polarized-sunglasses',
    nameKey: 'products.p16.name',
    descriptionKey: 'products.p16.desc',
    category: 'accessories',
    price: 96,
    compareAtPrice: 120,
    rating: 4.4,
    reviewCount: 189,
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    ],
    variants: [
      { id: 'tortoise', label: 'Tortoise', inStock: true },
      { id: 'black', label: 'Black', inStock: true },
    ],
    stock: 0,
    badge: 'sale',
  },
  {
    id: 'p17',
    slug: 'portable-speaker',
    nameKey: 'products.p17.name',
    descriptionKey: 'products.p17.desc',
    category: 'tech',
    price: 79,
    rating: 4.5,
    reviewCount: 540,
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    ],
    variants: [
      { id: 'pebble', label: 'Pebble', inStock: true },
      { id: 'midnight', label: 'Midnight', inStock: true },
    ],
    stock: 61,
  },
  {
    id: 'p18',
    slug: 'trail-running-shoes',
    nameKey: 'products.p18.name',
    descriptionKey: 'products.p18.desc',
    category: 'outdoor',
    price: 145,
    rating: 4.6,
    reviewCount: 432,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    ],
    variants: [
      { id: '8', label: 'US 8', inStock: true },
      { id: '9', label: 'US 9', inStock: true },
      { id: '10', label: 'US 10', inStock: true },
      { id: '11', label: 'US 11', inStock: false },
    ],
    stock: 22,
    featured: true,
  },
]

export const categories = [
  'apparel',
  'home',
  'outdoor',
  'tech',
  'accessories',
] as const

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
