import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
	const socialLinks = [
		{ icon: <Github className="h-5 w-5" />, href: '#' },
		{ icon: <Twitter className="h-5 w-5" />, href: '#' },
		{ icon: <Linkedin className="h-5 w-5" />, href: '#' },
	]

	const footerLinks = [
		{ title: 'Product', links: ['Features', 'Pricing', 'Documentation', 'Updates'] },
		{ title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
		{ title: 'Legal', links: ['Terms', 'Privacy', 'Security', 'Support'] },
	]

	return (
		<footer className="bg-black/30 backdrop-blur-lg border-t border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center cursor-pointer mb-2">
							<Image src={'/logo.svg'} height={50} width={120} alt="tracko logo" />
						</div>{' '}
						<p className="text-gray-400 mb-4">Modern time tracking and accuracy platform for teams.</p>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className="text-gray-400 hover:text-white transition-colors"
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>
					{footerLinks.map((section, index) => (
						<div key={index}>
							<h4 className="text-white font-semibold mb-4">{section.title}</h4>
							<ul className="space-y-2">
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a href="#" className="text-gray-400 hover:text-white transition-colors">
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-8 pt-8 border-t border-white/10">
					<p className="text-center text-gray-400">
						© {new Date().getFullYear()} trakkco. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
