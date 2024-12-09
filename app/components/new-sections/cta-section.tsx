'use client'
import { useContentStore } from '@/app/store/content'
import { Button } from '@/components/ui/button'

export function CTASection() {
	const cta = useContentStore(state => state.sections.find(s => s.id === 'cta'))

	if (!cta) return null

	return (
		<section id="cta" className="py-24 bg-black/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="container px-4 md:px-6 m-auto text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{cta.title}</h2>
					<p className="mt-4 text-lg text-muted-foreground">{cta.supportingText}</p>

					<Button className="mt-8 bg-purple-900 hover:bg-purple-700" size="lg">
						{cta.buttonText}
					</Button>
				</div>
			</div>
		</section>
	)
}
