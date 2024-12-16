"use client"

import { useEffect } from 'react'
import Footer from './components/layout/Footer'
import {
	AboutUsSection,
	ChallengesSection,
	CTASection,
	EdgeSection,
	FAQSection,
	FeaturesSection,
	FutureSection,
	Header,
	Hero,
	TopFeatures,
	WhyTrakkCoSection,
	Pricing
} from './components/new-sections/index'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10"></div>
			<Header />
			<main>
				<Hero />
				<TopFeatures />
				<EdgeSection />
				<ChallengesSection />
				<FeaturesSection />
				<WhyTrakkCoSection />
				<AboutUsSection />
				<Pricing />
				<CTASection />
				<FutureSection />
				<FAQSection />
			</main>
			<Footer />
		</div>
	)
}

export default Home
