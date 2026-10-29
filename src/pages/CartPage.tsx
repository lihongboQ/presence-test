import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { QuantityStepper } from '../components/QuantityStepper'
import { EmptyState } from '../components/EmptyState'
import {
  formatMoney,
  FREE_SHIPPING_THRESHOLD,
} from '../utils/format'

export function CartPage() {
  const { t } = useTranslation()
  const {
    lines,
    itemCount,
    subtotal,
    shipping,
    tax,
    total,
    setQuantity,
    removeItem,
    clearCart,
  } = useCart()
  const { showToast } = useToast()

  if (lines.length === 0) {
    return (
      <div className="page-pad">
        <EmptyState
          title={t('cart.emptyTitle')}
          body={t('cart.emptyBody')}
          actionLabel={t('cart.startShopping')}
          actionTo="/"
        />
      </div>
    )
  }

  return (
    <div className="cart-page page-pad">
      <div className="cart-head">
        <h1>
          {t('cart.title')}{' '}
          <span className="muted">
            ({itemCount} {itemCount === 1 ? t('cart.item') : t('cart.items')})
          </span>
        </h1>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            clearCart()
            showToast(t('toast.cleared'))
          }}
        >
          {t('cart.clear')}
        </button>
      </div>

      <div className="cart-layout">
        <ul className="cart-lines">
          {lines.map((line) => {
            const name = t(line.product.nameKey)
            return (
              <li
                key={`${line.productId}-${line.variantId}`}
                className="cart-line"
              >
                <Link
                  to={`/product/${line.product.slug}`}
                  className="cart-thumb"
                >
                  <img src={line.product.image} alt="" width={120} height={150} />
                </Link>
                <div className="cart-line-body">
                  <div className="cart-line-top">
                    <div>
                      <Link to={`/product/${line.product.slug}`}>
                        <h2>{name}</h2>
                      </Link>
                      <p className="muted">{line.variant.label}</p>
                    </div>
                    <p className="cart-line-price">
                      {formatMoney(line.lineTotal)}
                    </p>
                  </div>
                  <div className="cart-line-actions">
                    <QuantityStepper
                      value={line.quantity}
                      min={1}
                      max={Math.min(99, line.product.stock || 99)}
                      onChange={(n) =>
                        setQuantity(line.productId, line.variantId, n)
                      }
                      label={t('cart.quantity')}
                    />
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => {
                        removeItem(line.productId, line.variantId)
                        showToast(t('toast.removed'))
                      }}
                    >
                      {t('cart.remove')}
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <aside className="cart-summary" aria-label={t('cart.title')}>
          <h2>{t('cart.total')}</h2>
          <dl className="summary-rows">
            <div>
              <dt>{t('cart.subtotal')}</dt>
              <dd>{formatMoney(subtotal)}</dd>
            </div>
            <div>
              <dt>
                {t('cart.shipping')}
                <span className="hint">
                  {shipping === 0
                    ? t('cart.shippingFree')
                    : t('cart.shippingNote')}
                </span>
              </dt>
              <dd>
                {shipping === 0
                  ? t('cart.shippingFree')
                  : formatMoney(shipping)}
              </dd>
            </div>
            <div>
              <dt>
                {t('cart.tax')}
                <span className="hint">{t('cart.taxNote')}</span>
              </dt>
              <dd>{formatMoney(tax)}</dd>
            </div>
            <div className="summary-total">
              <dt>{t('cart.total')}</dt>
              <dd>{formatMoney(total)}</dd>
            </div>
          </dl>
          {subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD && (
            <p className="shipping-progress">
              {t('cart.freeShippingAway', {
                amount: formatMoney(FREE_SHIPPING_THRESHOLD - subtotal),
              })}
            </p>
          )}
          <button type="button" className="btn btn-primary btn-lg btn-block" disabled>
            {t('cart.checkout')}
          </button>
          <p className="checkout-hint">{t('cart.checkoutHint')}</p>
          <Link to="/" className="btn btn-secondary btn-block">
            {t('product.continueShopping')}
          </Link>
        </aside>
      </div>
    </div>
  )
}
