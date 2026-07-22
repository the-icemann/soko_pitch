import Navigation from './components/Navigation'
import CoverSlide from './components/slides/CoverSlide'
import ProblemSlide from './components/slides/ProblemSlide'
import SolutionSlide from './components/slides/SolutionSlide'
import MarketSlide from './components/slides/MarketSlide'
import ProductSlide from './components/slides/ProductSlide'
import TechSlide from './components/slides/TechSlide'
import BizModelSlide from './components/slides/BizModelSlide'
import TractionSlide from './components/slides/TractionSlide'
import RoadmapSlide from './components/slides/RoadmapSlide'
import WhyNowSlide from './components/slides/WhyNowSlide'
import TeamSlide from './components/slides/TeamSlide'
import AskSlide from './components/slides/AskSlide'
import ClosingSlide from './components/slides/ClosingSlide'

export default function App() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <main>
        <CoverSlide />
        <ProblemSlide />
        <SolutionSlide />
        <MarketSlide />
        <ProductSlide />
        <TechSlide />
        <BizModelSlide />
        <TractionSlide />
        <RoadmapSlide />
        <WhyNowSlide />
        <TeamSlide />
        <AskSlide />
        <ClosingSlide />
      </main>
    </div>
  )
}
