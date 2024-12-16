'use client'

import { useContentStore } from '@/app/store/content'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function TopFeatures() {
	const { title, subtitle, features } = useContentStore(state => state.topFeatures)

	return (
		<section id="top-features" className="py-24 relative">
			<div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">{title}</h2>
					<p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						{subtitle}
					</p>
				</div>
				<Tabs defaultValue={features[0].title} className="w-full mx-auto">
					<div className="relative">
						<TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent">
							{features.map(feature => (
								<TabsTrigger
									key={feature.title}
									value={feature.title}
									className="flex-1 text-white min-w-[20rem] max-w-[22rem] px-4 py-2.5 text-sm md:text-base
                    data-[state=active]:text-white data-[state=active]:bg-purple-900/60 transition-all duration-200 bg-purple-900/30"
								>
									{feature.title}
								</TabsTrigger>
							))}
						</TabsList>
					</div>
					{features.map(feature => (
						<TabsContent key={feature.title} value={feature.title} className="mt-8 md:mt-10 px-4">
							<div className="flex flex-col items-center space-y-6">
								<h3 className="text-2xl md:text-3xl font-bold text-white">{feature.title}</h3>
								<p className="text-zinc-400 text-center max-w-2xl text-base md:text-lg">
									{feature.description}
								</p>
								<div className="w-full max-w-xl space-y-4 mt-6">
									<div className="flex items-start space-x-3">
										<div className="w-5 h-5 rounded-full bg-purple-500 mt-1 flex-shrink-0" />
										<p className="text-zinc-300">Example feature point for {feature.title}</p>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-5 h-5 rounded-full bg-purple-500 mt-1 flex-shrink-0" />
										<p className="text-zinc-300">Another key benefit of this feature</p>
									</div>
								</div>
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	)
}
