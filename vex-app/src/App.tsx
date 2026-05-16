import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { HeroSection } from './components/HeroSection'
import { StorySection } from './components/StorySection'
import { ProductsSection } from './components/ProductsSection'

export default function App() {
  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <ScrollProgress />
      <HeroSection />
      <StorySection />
      <ProductsSection />
    </div>
  )
}
