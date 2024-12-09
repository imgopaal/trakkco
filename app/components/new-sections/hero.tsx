'use client'

import { Button } from '@/components/ui/button'
import { useContentStore } from '@/app/store/content'
import Image from 'next/image'
import Dashboard from '../Dashboard'

export function Hero() {
	const hero = useContentStore(state => state.hero)

	return (
		<div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black"></div>
				<div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50 ">
					<Image
						priority
						quality={100}
						src="/hero-bg.avif"
						alt="Background"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
			</div>
			<div className="relative container px-4 md:px-6 m-auto">
				<div className="flex flex-col items-center text-center space-y-8">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">{hero.title}</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-[800px]">{hero.tagline}</p>
					<Button
						size={'lg'}
						className="font-bold bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-lg text-lg transition-all transform hover:scale-105"
					>
						{hero.cta}
					</Button>
				</div>
			</div>
			<Dashboard />
		</div>
	)
}
