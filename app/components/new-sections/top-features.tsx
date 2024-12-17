'use client'

import { useContentStore } from '@/app/store/content'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function TopFeatures() {
	const { title, subtitle, features } = useContentStore(state => state.topFeatures)

	return (
		<section id="top-features" className="py-24 relative">
			<div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
					<h2
						className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-once="true"
					>
						{title}
					</h2>
					<p
						className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="800"
						data-aos-once="true"
					>
						{subtitle}
					</p>
				</div>
				<Tabs defaultValue={features[0].title} className="w-full mx-auto">
					<div className="relative">
						<TabsList className="w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 bg-transparent !m-0 !p-0 border-0">
							{features.map((feature) => (
								<TabsTrigger
									key={feature.title}
									value={feature.title}
									className={`
										relative px-4 py-2.5 text- truncate
										text-white hover:text-zinc-300
										data-[state=active]:text-purple-300 
										data-[state=active]:after:content-['']
										data-[state=active]:after:absolute 
										data-[state=active]:after:bottom-0 
										data-[state=active]:after:left-0
										data-[state=active]:after:w-full 
										data-[state=active]:after:h-0.5
										data-[state=active]:after:bg-purple-500
										transition-all duration-200
										rounded-none
										`}
								>
									<span className="block text-md font-medium">{feature.title}</span>
								</TabsTrigger>
							))}
						</TabsList>
						<div className="mt-0 w-full h-px bg-zinc-800" />
					</div>
					{features.map(feature => (
						<TabsContent key={feature.title} value={feature.title} className="mt-8 md:mt-10">
							<div className="flex flex-col items-start max-w-3xl mx-auto">
								<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h3>
								<p className="text-zinc-400 text-base md:text-lg mb-8">{feature.description}</p>
								<div className="w-full space-y-4">
									{[1, 2, 3].map((item, index) => (
										<div key={index} className="flex items-center gap-3">
											<div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center">
												<svg
													className="w-3 h-3 text-white"
													fill="none"
													strokeWidth="3"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 13l4 4L19 7"
													/>
												</svg>
											</div>
											<span className="text-zinc-300">
												Feature point {item} for {feature.title}
											</span>
										</div>
									))}
								</div>
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	)
}