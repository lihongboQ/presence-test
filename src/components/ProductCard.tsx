import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Product } from '../types'
import { formatMoney } from '../utils/format'
import { StarIcon } from './StarIcon'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { t } = useTranslation()
  const name = t(product.nameKey)
  const discount =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? Math.round(
          ((product.compareAtPrice - product.price) / product.compareAtPrice) *
            100,
        )
      : null

  return (
    <article className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card-link">
        <div className="product-card-media">
          <img
            src={product.image}
            alt={name}
            loading="lazy"
            width={640}
            height={800}
          />
          <span className="product-card-veil" aria-hidden />
          {product.badge && (
            <span className={`badge badge-${product.badge}`}>
              {product.badge === 'sale' && discount
                ? `−${discount}%`
                : t(`product.${product.badge}`)}
            </span>
          )}
          {product.stock === 0 && (
            <span className="badge badge-oos">{t('product.outOfStock')}</span>
          )}
        </div>
        <div className="product-card-body">
          <p className="product-card-category">
            {t(`categories.${product.category}`)}
          </p>
          <h3 className="product-card-title">{name}</h3>
          <div className="product-card-meta">
            <p className="product-card-price">
              <span>{formatMoney(product.price)}</span>
              {product.compareAtPrice && (
                <s className="compare-price">
                  {formatMoney(product.compareAtPrice)}
                </s>
              )}
            </p>
            <p
              className="product-card-rating"
              aria-label={`${product.rating} / 5`}
            >
              <StarIcon className="rating-star" />
              <span>{product.rating.toFixed(1)}</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}
