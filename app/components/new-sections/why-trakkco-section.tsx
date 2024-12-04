'use client'

import { useContentStore } from '@/app/store/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WhyTrakkCoSection() {
	const whyTrakkCo = useContentStore(state => state.sections.find(s => s.id === 'why-trakkco'))

	if (!whyTrakkCo) return null

	return (
		<section id="why-trakkco" className="py-24 bg-black/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="container px-4 md:px-6 m-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{whyTrakkCo.title}</h2>
					<p className="mt-4 text-lg text-muted-foreground">{whyTrakkCo.content}</p>
					<div className="grid gap-6 mt-8 md:grid-cols-3">
						{whyTrakkCo.benefits !== undefined &&
							whyTrakkCo.benefits.map((benefit, index) => (
								<Card
									key={index}
									className="bg-purple-700/10 hover:bg-purple-700/30 cursor-pointer border-purple-400/80 transition-all duration-300 ease-in-out"
								>
									<CardHeader>
										<CardTitle>{benefit.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p>{benefit.description}</p>
									</CardContent>
								</Card>
							))}
					</div>
					<p className="mt-8 text-lg">{whyTrakkCo.conclusion}</p>
				</div>
			</div>
		</section>
	)
}
