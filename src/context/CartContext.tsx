import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getProductById } from '../data/products'
import type { CartItem, CartLine } from '../types'
import {
  estimateShipping,
  estimateTax,
} from '../utils/format'

const STORAGE_KEY = 'cove-cart-v1'

interface CartContextValue {
  items: CartItem[]
  lines: CartLine[]
  itemCount: number
  subtotal: number
  shipping: number
  tax: number
  total: number
  addItem: (productId: string, variantId: string, quantity?: number) => void
  setQuantity: (productId: string, variantId: string, quantity: number) => void
  removeItem: (productId: string, variantId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (i) =>
        typeof i.productId === 'string' &&
        typeof i.variantId === 'string' &&
        typeof i.quantity === 'number' &&
        i.quantity > 0,
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() =>
    typeof window === 'undefined' ? [] : loadCart(),
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const lines = useMemo(() => {
    const result: CartLine[] = []
    for (const item of items) {
      const product = getProductById(item.productId)
      if (!product) continue
      const variant = product.variants.find((v) => v.id === item.variantId)
      if (!variant) continue
      result.push({
        ...item,
        product,
        variant,
        lineTotal: product.price * item.quantity,
      })
    }
    return result
  }, [items])

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.lineTotal, 0),
    [lines],
  )
  const shipping = estimateShipping(subtotal)
  const tax = estimateTax(subtotal)
  const total = Math.round((subtotal + shipping + tax) * 100) / 100
  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  )

  const addItem = useCallback(
    (productId: string, variantId: string, quantity = 1) => {
      setItems((prev) => {
        const idx = prev.findIndex(
          (i) => i.productId === productId && i.variantId === variantId,
        )
        if (idx >= 0) {
          const next = [...prev]
          next[idx] = {
            ...next[idx],
            quantity: next[idx].quantity + quantity,
          }
          return next
        }
        return [...prev, { productId, variantId, quantity }]
      })
    },
    [],
  )

  const setQuantity = useCallback(
    (productId: string, variantId: string, quantity: number) => {
      setItems((prev) => {
        if (quantity <= 0) {
          return prev.filter(
            (i) => !(i.productId === productId && i.variantId === variantId),
          )
        }
        return prev.map((i) =>
          i.productId === productId && i.variantId === variantId
            ? { ...i, quantity }
            : i,
        )
      })
    },
    [],
  )

  const removeItem = useCallback((productId: string, variantId: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.productId === productId && i.variantId === variantId),
      ),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const value = useMemo(
    () => ({
      items,
      lines,
      itemCount,
      subtotal,
      shipping,
      tax,
      total,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
    }),
    [
      items,
      lines,
      itemCount,
      subtotal,
      shipping,
      tax,
      total,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
