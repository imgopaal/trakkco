'use client'

import { useContentStore } from '@/app/store/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ChallengesSection() {
	const challenges = useContentStore(state => state.sections.find(s => s.id === 'challenges'))

	if (!challenges) return null

	return (
		<section id="challenges" className="py-24 bg-black/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="container px-4 md:px-6 m-auto">
					<h2
						className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-once="true"
					>
						{challenges.title}
					</h2>
					<p
						className="mt-4 text-lg text-muted-foreground"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="800"
						data-aos-once="true"
					>
						{challenges.content}
					</p>
					<div
						className="grid gap-6 mt-8 md:grid-cols-3"
						data-aos="fade-up"
						data-aos-delay="300"
						data-aos-duration="800"
						data-aos-once="true"
					>
						{challenges.challenges !== undefined &&
							challenges.challenges.map((challenge, index) => (
								<Card
									key={index}
									className="bg-purple-700/10 hover:bg-purple-700/30 cursor-pointer border-purple-400/80 transition-all duration-300 ease-in-out"
									data-aos="fade-up"
									data-aos-delay={400 + index * 200}
									data-aos-duration="800"
									data-aos-once="true"
								>
									<CardHeader>
										<CardTitle>{challenge.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p>{challenge.description}</p>
									</CardContent>
								</Card>
							))}
					</div>
					<p
						className="mt-8 text-lg"
						data-aos="fade-up"
						data-aos-delay="500"
						data-aos-duration="800"
						data-aos-once="true"
					>
						{challenges.solution}
					</p>
					<p
						className="mt-4 text-lg text-muted-foreground"
						data-aos="fade-up"
						data-aos-delay="600"
						data-aos-duration="800"
						data-aos-once="true"
					>
						{challenges.compassion}
					</p>
				</div>
			</div>
		</section>
	)
}
