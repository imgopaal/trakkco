'use client'
import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { navItems } from '@/app/consts'

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			const navbarHeight = 64 // height of the fixed navbar
			const elementPosition = element.getBoundingClientRect().top
			const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
		}
	}

	return (
		<>
			<nav className="fixed w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center cursor-pointer">
							<Image src={'/logo.svg'} height={50} width={120} alt="tracko logo" />
						</div>
						<div className="hidden md:block">
							<div className="flex items-center space-x-8">
								{navItems.map(item => (
									<a
										key={item.label}
										href={item.href}
										onClick={e => {
											if (item.scroll) {
												e.preventDefault()
												scrollToSection(item.href.substring(1))
											}
										}}
										className="text-gray-300 hover:text-white transition-colors cursor-pointer"
									>
										{item.label}
									</a>
								))}
								<button className="text-gray-300 hover:text-white px-3 py-2">Sign In</button>
								<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
									Sign Up
								</button>
							</div>
						</div>
						<div className="md:hidden">
							<button onClick={() => setIsMobileMenuOpen(true)}>
								<Menu className="h-6 w-6 text-white" />
							</button>
						</div>
					</div>
				</div>
			</nav>
			<MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
		</>
	)
}

export default Navbar
