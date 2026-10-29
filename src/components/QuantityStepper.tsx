interface Props {
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
  label: string
  id?: string
}

export function QuantityStepper({
  value,
  min = 1,
  max = 99,
  onChange,
  label,
  id,
}: Props) {
  return (
    <div className="qty-stepper" role="group" aria-label={label}>
      <button
        type="button"
        className="qty-btn"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        −
      </button>
      <input
        id={id}
        className="qty-input"
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        aria-label={label}
        onChange={(e) => {
          const n = Number(e.target.value)
          if (Number.isNaN(n)) return
          onChange(Math.min(max, Math.max(min, n)))
        }}
      />
      <button
        type="button"
        className="qty-btn"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        +
      </button>
    </div>
  )
}
