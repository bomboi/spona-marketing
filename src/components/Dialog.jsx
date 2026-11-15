import { useEffect, useRef } from 'react'

export default function Dialog({ labelledBy, onClose, className = '', children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const elementFocusedBefore = document.activeElement
    document.body.classList.add('has-open-dialog')
    dialogRef.current?.focus()

    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('has-open-dialog')
      elementFocusedBefore?.focus?.()
    }
  }, [onClose])

  return (
    <div className="dialog-backdrop" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div ref={dialogRef} className={`dialog ${className}`} role="dialog" aria-modal="true" tabIndex={-1} aria-labelledby={labelledBy}>
        {children}
      </div>
    </div>
  )
}
