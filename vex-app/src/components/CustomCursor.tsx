import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const smoothRef = useRef({ x: -100, y: -100 })
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }

      const el = document.elementFromPoint(e.clientX, e.clientY)
      const hoverable = el?.closest('button, a, [data-hover]')
      ringRef.current?.classList.toggle('hovering', !!hoverable)
    }

    const animate = () => {
      smoothRef.current.x += (posRef.current.x - smoothRef.current.x) * 0.1
      smoothRef.current.y += (posRef.current.y - smoothRef.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${smoothRef.current.x}px`
        ringRef.current.style.top = `${smoothRef.current.y}px`
      }
      frameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
