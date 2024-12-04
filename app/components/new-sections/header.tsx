'use client'

import { useContentStore } from '@/app/store/content'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

export function Header() {
	const navigation = useContentStore(state => state.navigation)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href)
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
						{/* Logo */}
						<Link href="/" className="flex items-center space-x-2">
							<div className="flex items-center cursor-pointer min-h-16">
								<Image src={'/logo.svg'} height={50} width={120} alt="tracko logo" />
							</div>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex gap-6">
							{navigation.map(item => (
								<Button
									key={item.href}
									variant={'link'}
									onClick={() => scrollToSection(item.href)}
									className="text-gray-300 hover:text-white transition-colors cursor-pointer"
								>
									{item.label}
								</Button>
							))}
						</nav>

						{/* Action Buttons */}
						<div className="hidden lg:flex items-center gap-4">
							<Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
								Sign In
							</Button>
							<Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
								Sign Up
							</Button>
						</div>

						{/* Mobile Menu Toggle */}
						<div className="lg:hidden flex items-center">
							<Button
								variant={'default'}
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="text-white bg-purple-600 hover:bg-purple-700"
							>
								{isMobileMenuOpen ? <IoClose /> : <IoMenu />}
							</Button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Sidebar */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-40 bg-black/90 text-white p-6 lg:hidden">
					<div className="flex flex-col items-start gap-6">
						{navigation.map(item => (
							<Button
								key={item.href}
								variant={'link'}
								onClick={() => {
									setIsMobileMenuOpen(false)
									scrollToSection(item.href)
								}}
								className="text-lg text-gray-300 hover:text-white transition-colors cursor-pointer"
							>
								{item.label}
							</Button>
						))}
						<div className="flex flex-col gap-4 w-full mt-6">
							<Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
								Sign In
							</Button>
							<Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
								Sign Up
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
