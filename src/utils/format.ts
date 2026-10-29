const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export function formatMoney(amount: number): string {
  return usd.format(amount)
}

/** Contiguous US estimate: free shipping over $75, else $6.99 flat */
export const FREE_SHIPPING_THRESHOLD = 75
export const FLAT_SHIPPING = 6.99
export const ESTIMATED_TAX_RATE = 0.08

export function estimateShipping(subtotal: number): number {
  if (subtotal <= 0) return 0
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING
}

export function estimateTax(subtotal: number): number {
  return Math.round(subtotal * ESTIMATED_TAX_RATE * 100) / 100
}
