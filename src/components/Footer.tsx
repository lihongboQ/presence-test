import { useTranslation } from 'react-i18next'

const YEAR = 2026

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="site-footer">
      <p>{t('footer.rights', { year: YEAR })}</p>
      <p className="footer-meta">{t('footer.currency')}</p>
    </footer>
  )
}
