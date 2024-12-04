import React from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { navItems } from '@/app/consts'

interface MobileMenuProps {
	isOpen: boolean
	onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			const navbarHeight = 64
			const elementPosition = element.getBoundingClientRect().top
			const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
			onClose()
		}
	}

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50">
			<div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
			<div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-purple-900/90 backdrop-blur-xl p-6">
				<div className="flex items-center justify-between mb-8">
					<Image src={'/logo.svg'} height={50} width={120} alt="tracko logo" />
					<button onClick={onClose} className="text-white">
						<X className="h-6 w-6" />
					</button>
				</div>
				<nav className="space-y-4">
					{navItems.map(item => (
						<a
							key={item.label}
							href={item.href}
							onClick={e => {
								e.preventDefault()
								if (item.scroll) {
									scrollToSection(item.href.substring(1))
								}
							}}
							className="block text-lg text-gray-300 hover:text-white transition-colors"
						>
							{item.label}
						</a>
					))}
				</nav>
				<div className="mt-8 space-y-4">
					<button className="w-full text-gray-300 hover:text-white px-3 py-2">Sign In</button>
					<button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
						Sign Up
					</button>
				</div>
			</div>
		</div>
	)
}

export default MobileMenu
