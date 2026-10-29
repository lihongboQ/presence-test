import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { CatalogToolbar } from '../components/CatalogToolbar'
import { EmptyState } from '../components/EmptyState'
import { ProductSkeletonGrid } from '../components/ProductSkeleton'
import { filterAndSortProducts } from '../utils/filterProducts'
import type { ProductCategory, SortOption } from '../types'

const VALID_SORT: SortOption[] = [
  'featured',
  'price-asc',
  'price-desc',
  'rating',
]

function parseCategory(v: string | null): ProductCategory | 'all' {
  if (
    v === 'apparel' ||
    v === 'home' ||
    v === 'outdoor' ||
    v === 'tech' ||
    v === 'accessories'
  ) {
    return v
  }
  return 'all'
}

function parseSort(v: string | null): SortOption {
  if (v && VALID_SORT.includes(v as SortOption)) return v as SortOption
  return 'featured'
}

export function CatalogPage() {
  const { t } = useTranslation()
  const [params, setParams] = useSearchParams()
  const [ready, setReady] = useState(false)
  const [retryToken, setRetryToken] = useState(0)
  const [failed, setFailed] = useState(false)

  const search = params.get('q') ?? ''
  const category = parseCategory(params.get('category'))
  const sort = parseSort(params.get('sort'))

  useEffect(() => {
    let cancelled = false
    const timer = window.setTimeout(() => {
      if (cancelled) return
      if (!products.length) {
        setFailed(true)
        setReady(true)
        return
      }
      setFailed(false)
      setReady(true)
    }, 280)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [search, category, sort, retryToken])

  // Reset ready when query changes so skeleton shows briefly
  const queryKey = `${search}|${category}|${sort}|${retryToken}`
  const [seenKey, setSeenKey] = useState(queryKey)
  if (queryKey !== seenKey) {
    setSeenKey(queryKey)
    setReady(false)
  }

  const filtered = useMemo(
    () =>
      filterAndSortProducts(
        products,
        { search, category, sort },
        (p) => t(p.nameKey),
      ),
    [search, category, sort, t],
  )

  function patchParams(patch: Record<string, string | null>) {
    const next = new URLSearchParams(params)
    for (const [key, value] of Object.entries(patch)) {
      if (!value) next.delete(key)
      else next.set(key, value)
    }
    setParams(next, { replace: true })
  }

  function clearFilters() {
    setParams({}, { replace: true })
  }

  const status = failed ? 'error' : ready ? 'ready' : 'loading'

  return (
    <div className="catalog-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden />
        <div className="hero-content">
          <p className="hero-brand">{t('brand.name')}</p>
          <h1 id="hero-title">{t('hero.title')}</h1>
          <p className="hero-sub">{t('hero.subtitle')}</p>
          <a href="#catalog" className="btn btn-primary hero-cta">
            {t('hero.cta')}
          </a>
        </div>
      </section>

      <section id="catalog" className="catalog-section">
        <div className="section-head">
          <h2>{t('catalog.title')}</h2>
        </div>

        <CatalogToolbar
          category={category}
          sort={sort}
          resultCount={status === 'ready' ? filtered.length : 0}
          onCategory={(c) =>
            patchParams({ category: c === 'all' ? null : c })
          }
          onSort={(s) =>
            patchParams({ sort: s === 'featured' ? null : s })
          }
        />

        {status === 'loading' && (
          <div aria-busy="true" aria-live="polite">
            <p className="sr-only">{t('catalog.loading')}</p>
            <ProductSkeletonGrid />
          </div>
        )}

        {status === 'error' && (
          <EmptyState
            title={t('catalog.error')}
            body=""
            actionLabel={t('catalog.retry')}
            onAction={() => setRetryToken((n) => n + 1)}
          />
        )}

        {status === 'ready' && filtered.length === 0 && (
          <EmptyState
            title={t('catalog.emptyTitle')}
            body={t('catalog.emptyBody')}
            actionLabel={t('catalog.clearFilters')}
            onAction={clearFilters}
          />
        )}

        {status === 'ready' && filtered.length > 0 && (
          <div className="product-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
