import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProductBySlug } from '../data/products'
import { QuantityStepper } from '../components/QuantityStepper'
import { EmptyState } from '../components/EmptyState'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { formatMoney } from '../utils/format'

export function ProductDetailPage() {
  const { slug = '' } = useParams()
  const { t } = useTranslation()
  const { addItem } = useCart()
  const { showToast } = useToast()
  const product = getProductBySlug(slug)

  const [sessionSlug, setSessionSlug] = useState(slug)
  const [variantId, setVariantId] = useState(
    () =>
      product?.variants.find((v) => v.inStock)?.id ??
      product?.variants[0]?.id ??
      '',
  )
  const [qty, setQty] = useState(1)
  const [adding, setAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  if (slug !== sessionSlug) {
    setSessionSlug(slug)
    const next = getProductBySlug(slug)
    setVariantId(
      next?.variants.find((v) => v.inStock)?.id ?? next?.variants[0]?.id ?? '',
    )
    setQty(1)
    setJustAdded(false)
  }

  if (!product) {
    return (
      <div className="page-pad">
        <EmptyState
          title={t('product.notFoundTitle')}
          body={t('product.notFoundBody')}
          actionLabel={t('product.back')}
          actionTo="/"
        />
      </div>
    )
  }

  const item = product
  const name = t(item.nameKey)
  const selected =
    item.variants.find((v) => v.id === variantId) ?? item.variants[0]
  const canBuy =
    item.stock > 0 && !!selected?.inStock && qty >= 1 && qty <= item.stock

  function handleAdd() {
    if (!canBuy || !selected) return
    setAdding(true)
    window.setTimeout(() => {
      addItem(item.id, selected.id, qty)
      showToast(t('toast.added', { name }))
      setJustAdded(true)
      setAdding(false)
      window.setTimeout(() => setJustAdded(false), 2400)
    }, 220)
  }

  const stockLabel =
    item.stock === 0
      ? t('product.outOfStock')
      : item.stock <= 10
        ? t('product.lowStock', { count: item.stock })
        : t('product.inStock')

  return (
    <div className="detail-page page-pad">
      <Link to="/" className="back-link">
        ← {t('product.back')}
      </Link>

      <div className="detail-layout">
        <div className="detail-gallery">
          <img src={item.image} alt="" width={900} height={1100} />
          {item.badge && (
            <span className={`badge badge-${item.badge}`}>
              {t(`product.${item.badge}`)}
            </span>
          )}
        </div>

        <div className="detail-info">
          <p className="detail-category">{t(`categories.${item.category}`)}</p>
          <h1>{name}</h1>
          <p className="detail-rating">
            <span aria-hidden>★</span> {item.rating.toFixed(1)}{' '}
            <span className="muted">
              · {t('product.reviews', { count: item.reviewCount })}
            </span>
          </p>

          <p className="detail-price">
            {formatMoney(item.price)}
            {item.compareAtPrice && (
              <s className="compare-price">
                {formatMoney(item.compareAtPrice)}
              </s>
            )}
          </p>

          <p className={`stock-pill ${item.stock === 0 ? 'is-out' : ''}`}>
            {stockLabel}
          </p>

          <fieldset className="variant-field">
            <legend>{t('product.size')}</legend>
            <div className="variant-grid">
              {item.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className={`variant-btn ${variantId === v.id ? 'is-active' : ''} ${!v.inStock ? 'is-disabled' : ''}`}
                  disabled={!v.inStock}
                  aria-pressed={variantId === v.id}
                  onClick={() => setVariantId(v.id)}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="qty-block">
            <label htmlFor="detail-qty">{t('product.quantity')}</label>
            <QuantityStepper
              id="detail-qty"
              value={qty}
              min={1}
              max={Math.max(1, Math.min(99, item.stock || 1))}
              onChange={setQty}
              label={t('product.quantity')}
            />
          </div>

          <div className="detail-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              disabled={!canBuy || adding}
              onClick={handleAdd}
            >
              {adding
                ? t('product.adding')
                : justAdded
                  ? t('product.added')
                  : t('product.addToCart')}
            </button>
            {justAdded && (
              <Link to="/cart" className="btn btn-secondary btn-lg">
                {t('product.viewCart')}
              </Link>
            )}
          </div>

          <p className="shipping-note">{t('product.shippingNote')}</p>

          <div className="detail-desc">
            <h2>{t('product.description')}</h2>
            <p>{t(item.descriptionKey)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
