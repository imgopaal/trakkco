'use client'

import { useContentStore } from '@/app/store/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutUsSection() {
	const aboutUs = useContentStore(state => state.sections.find(s => s.id === 'about-us'))

	if (!aboutUs) return null

	return (
		<section id="about-us" className="py-24 bg-gradient-to-br from-purple-900/10 via-background to-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="container px-4 md:px-6 m-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{aboutUs.title}</h2>
					<p className="mt-4 text-lg text-muted-foreground">{aboutUs.content}</p>
					<div className="grid gap-6 mt-8 md:grid-cols-3">
						{aboutUs.points !== undefined &&
							aboutUs.points.map((point, index) => (
								<Card
									key={index}
									className="bg-purple-700/10 hover:bg-purple-700/30 cursor-pointer border-purple-400/80 transition-all duration-300 ease-in-out"
								>
									<CardHeader>
										<CardTitle>{point.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p>{point.description}</p>
									</CardContent>
								</Card>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}
