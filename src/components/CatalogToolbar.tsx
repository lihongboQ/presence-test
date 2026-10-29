import { useTranslation } from 'react-i18next'
import { categories } from '../data/products'
import type { ProductCategory, SortOption } from '../types'

interface Props {
  category: ProductCategory | 'all'
  sort: SortOption
  resultCount: number
  onCategory: (c: ProductCategory | 'all') => void
  onSort: (s: SortOption) => void
}

export function CatalogToolbar({
  category,
  sort,
  resultCount,
  onCategory,
  onSort,
}: Props) {
  const { t } = useTranslation()

  return (
    <div className="catalog-toolbar">
      <div className="category-chips" role="list">
        <button
          type="button"
          role="listitem"
          className={`chip ${category === 'all' ? 'is-active' : ''}`}
          onClick={() => onCategory('all')}
        >
          {t('catalog.filterAll')}
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="listitem"
            className={`chip ${category === c ? 'is-active' : ''}`}
            onClick={() => onCategory(c)}
          >
            {t(`categories.${c}`)}
          </button>
        ))}
      </div>

      <div className="toolbar-row">
        <p className="result-count">
          {resultCount === 1
            ? t('catalog.resultsOne')
            : t('catalog.results', { count: resultCount })}
        </p>
        <label className="sort-label">
          <span className="sr-only">{t('catalog.sortBy')}</span>
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value as SortOption)}
            aria-label={t('catalog.sortBy')}
          >
            <option value="featured">{t('catalog.sortFeatured')}</option>
            <option value="price-asc">{t('catalog.sortPriceAsc')}</option>
            <option value="price-desc">{t('catalog.sortPriceDesc')}</option>
            <option value="rating">{t('catalog.sortRating')}</option>
          </select>
        </label>
      </div>
    </div>
  )
}
