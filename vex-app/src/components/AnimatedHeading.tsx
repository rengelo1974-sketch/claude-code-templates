import { useEffect, useState, CSSProperties } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  style?: CSSProperties
  delay?: number
  charDelay?: number
}

export function AnimatedHeading({
  text,
  className = '',
  style,
  delay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const lines = text.split('\n')
  let runningCount = 0

  return (
    <div className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const lineStart = runningCount
        runningCount += line.length

        return (
          <div key={lineIndex} className="block">
            {line.split('').map((char, charIndex) => {
              const totalIndex = lineStart + charIndex
              const animDelay = totalIndex * charDelay

              return (
                <span
                  key={charIndex}
                  className="inline-block"
                  style={{
                    opacity: started ? 1 : 0,
                    transform: started ? 'translateX(0)' : 'translateX(-18px)',
                    transition: 'opacity 500ms ease, transform 500ms ease',
                    transitionDelay: started ? `${animDelay}ms` : '0ms',
                  }}
                >
                  {char === ' ' ? ' ' : char}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
