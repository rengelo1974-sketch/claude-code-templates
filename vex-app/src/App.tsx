import { useState } from 'react'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { IntroScreen } from './components/IntroScreen'
import { HeroSection } from './components/HeroSection'
import { StorySection } from './components/StorySection'
import { ProductsSection } from './components/ProductsSection'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <ScrollProgress />
      {!introComplete && <IntroScreen onComplete={() => setIntroComplete(true)} />}
      <HeroSection />
      <StorySection />
      <ProductsSection />
    </div>
  )
}
