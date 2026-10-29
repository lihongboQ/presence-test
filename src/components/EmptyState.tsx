import { Link } from 'react-router-dom'

interface Props {
  title: string
  body: string
  actionLabel?: string
  actionTo?: string
  onAction?: () => void
}

export function EmptyState({
  title,
  body,
  actionLabel,
  actionTo,
  onAction,
}: Props) {
  return (
    <div className="empty-state">
      <h2>{title}</h2>
      <p>{body}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="btn btn-primary">
          {actionLabel}
        </Link>
      )}
      {actionLabel && onAction && !actionTo && (
        <button type="button" className="btn btn-primary" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  )
}
