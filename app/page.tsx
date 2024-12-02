import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Features from './components/Features'
import TechStack from './components/TechStack'
import BookDemo from './components/sections/BookDemo'
import Footer from './components/layout/Footer'
import Pricing from './components/sections/Pricing'

function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10"></div>
			<Navbar />
			<main>
				<Hero />
				<Dashboard />
				<Features />
				<TechStack />
				<Pricing />
				<BookDemo />
			</main>
			<Footer />
		</div>
	)
}

export default Home
