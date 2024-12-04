import Footer from './components/layout/Footer'
import {
	AboutUsSection,
	ChallengesSection,
	CTASection,
	EdgeSection,
	FeaturesSection,
	FutureSection,
	Header,
	Hero,
	WhyTrakkCoSection,
} from './components/new-sections/index'

import Pricing from './components/sections/Pricing'

function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10"></div>
			<Header />
			<main>
				<Hero />
				<EdgeSection />
				<ChallengesSection />
				<FeaturesSection />
				<WhyTrakkCoSection />
				<AboutUsSection />
				<Pricing />
				<CTASection />
				<FutureSection />
			</main>
			<Footer />
		</div>
	)
}

export default Home
