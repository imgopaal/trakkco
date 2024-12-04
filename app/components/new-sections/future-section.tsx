'use client'

import { useContentStore } from '@/app/store/content'

export function FutureSection() {
	const future = useContentStore(state => state.sections.find(s => s.id === 'future'))

	if (!future) return null

	return (
		<section id="future" className="m-auto py-24 bg-gradient-to-br from-purple-600/40 via-purple-700/40 to-purple-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="container px-4 md:px-6 m-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{future.title}</h2>
					<p className="mt-4 text-lg text-muted-foreground">{future.content}</p>
				</div>
			</div>
		</section>
	)
}
