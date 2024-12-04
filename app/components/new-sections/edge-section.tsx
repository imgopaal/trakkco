'use client'

import { useContentStore } from '@/app/store/content'
import { Button } from '@/components/ui/button'

export function EdgeSection() {
	const edge = useContentStore(state => state.sections.find(s => s.id === 'edge'))

	if (!edge) return null

	return (
		<section id="edge" className="py-24 bg-gradient-to-br bg-transparent">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="container px-4 md:px-6 m-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{edge.title}</h2>
					<p className="mt-4 text-lg text-muted-foreground">{edge.content}</p>
					<p className="mt-4 text-lg text-muted-foreground">{edge.futureVision}</p>
					<div className="mt-8 p-6 bg-purple-500 rounded-lg backdrop-blur-sm">
						<h3 className="text-2xl font-semibold">{edge?.guarantee?.title || ''}</h3>
						<p className="mt-2 text-white">{edge?.guarantee?.content || ''}</p>
						<Button className="mt-4">{edge?.guarantee?.cta || ''}</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
