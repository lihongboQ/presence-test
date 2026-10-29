import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCart } from '../context/CartContext'
import { useState, type FormEvent } from 'react'

export function Header() {
  const { t, i18n } = useTranslation()
  const { itemCount } = useCart()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const urlQuery = params.get('q') ?? ''
  const [draft, setDraft] = useState(urlQuery)
  const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery)

  if (urlQuery !== lastUrlQuery) {
    setLastUrlQuery(urlQuery)
    setDraft(urlQuery)
  }

  function onSearch(e: FormEvent) {
    e.preventDefault()
    const next = new URLSearchParams()
    if (draft.trim()) next.set('q', draft.trim())
    const category = params.get('category')
    const sort = params.get('sort')
    if (category) next.set('category', category)
    if (sort) next.set('sort', sort)
    navigate({ pathname: '/', search: next.toString() })
  }

  function toggleLang() {
    void i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label={t('brand.name')}>
          <span className="brand-mark" aria-hidden />
          <span className="brand-name">{t('brand.name')}</span>
        </Link>

        <form className="header-search" onSubmit={onSearch} role="search">
          <label className="sr-only" htmlFor="site-search">
            {t('nav.searchPlaceholder')}
          </label>
          <input
            id="site-search"
            type="search"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={t('nav.searchPlaceholder')}
            autoComplete="off"
          />
          <button type="submit" className="btn btn-ghost search-btn">
            {t('nav.shop')}
          </button>
        </form>

        <div className="header-actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={t('nav.language')}
          >
            {i18n.language === 'es' ? 'ES' : 'EN'}
          </button>
          <NavLink to="/cart" className="cart-link">
            <span className="cart-label">{t('nav.cart')}</span>
            <span className="cart-badge" aria-hidden={itemCount === 0}>
              {itemCount > 99 ? '99+' : itemCount}
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
