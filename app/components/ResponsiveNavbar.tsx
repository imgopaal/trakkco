import React from 'react'
import { Menu } from 'lucide-react'
import Image from 'next/image'

const ResponsiveNavbar = () => {
	return (
		<nav className="fixed w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Image src={'/logo.svg'} height={50} width={120} alt="tracko logo" />
					</div>
					<div className="hidden md:block">
						<div className="flex items-center space-x-8">
							{['Product', 'Pricing', 'About', 'Resources', 'Download'].map(item => (
								<a key={item} href="#" className="text-gray-300 hover:text-white transition-colors">
									{item}
								</a>
							))}
							<button className="text-gray-300 hover:text-white px-3 py-2">Sign In</button>
							<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
								Sign Up
							</button>
						</div>
					</div>
					<div className="md:hidden">
						<Menu className="h-6 w-6 text-white" />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default ResponsiveNavbar
