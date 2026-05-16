import { useRef, ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  strength?: number
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    btn.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    btn.style.transition = 'transform 0.15s ease'
  }

  const handleLeave = () => {
    const btn = ref.current
    if (!btn) return
    btn.style.transform = 'translate(0, 0)'
    btn.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
  }

  return (
    <button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-hover
    >
      {children}
    </button>
  )
}
