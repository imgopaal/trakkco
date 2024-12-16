'use client'
import { plans } from '@/app/consts'
import { PricingCardProps } from '@/global'
import { Check } from 'lucide-react'
import React from 'react'

const PricingCard: React.FC<PricingCardProps> = ({
	title,
	price,
	features,
	isPopular = false,
	ctaText,
	onSelectPlan,
}) => (
	<div
		className={`relative bg-purple-900/20 backdrop-blur-xl rounded-2xl border ${
			isPopular ? 'border-purple-500' : 'border-purple-500/20'
		} p-8 flex flex-col h-full`}
	>
		{isPopular && (
			<div className="absolute -top-4 left-1/2 -translate-x-1/2">
				<span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
			</div>
		)}
		<div className="mb-8">
			<div className="flex justify-between">
				<h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
				{price === 'coming-soon' && (
					<div className="bg-purple-900/50 text-white text-sm rounded-full py-[2px] h-6 px-2 flex items-center justify-center">
						Coming soon
					</div>
				)}
			</div>

			<div
				className={
					price === 'coming-soon'
						? 'animate-pulse bg-purple-800 opacity-10 text-purple-800 py-[2px] h-6 mt-3 rounded-lg'
						: `flex items-baseline gap-x-2`
				}
			>
				{price !== 'coming-soon' && (
					<>
						<span className="text-4xl font-bold text-white">${price}</span>
						<span className="text-gray-400">/ month</span>
					</>
				)}
			</div>
		</div>
		<ul className="space-y-4 flex-grow mb-8">
			{features.map((feature, index) => (
				<li key={index} className="flex items-center gap-x-3 text-gray-300">
					<Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
					<span
						className={
							feature.text === 'mock'
								? 'animate-pulse bg-purple-800 opacity-10 text-purple-800 text-sm pl-1 py-[2px] w-full rounded-lg'
								: ''
						}
					>
						{feature.text}
					</span>
				</li>
			))}
		</ul>
		<button
			onClick={() => onSelectPlan(title)}
			className={`w-full py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
				isPopular
					? 'bg-purple-600 hover:bg-purple-700 text-white'
					: 'bg-purple-900/50 hover:bg-purple-900/70 text-white'
			}`}
		>
			{ctaText}
		</button>
	</div>
)

const Pricing: React.FC = () => {
	const handleSelectPlan = (planTitle: string) => {
		console.log(`Selected plan: ${planTitle}`)
		// Add your plan selection logic here
	}

	return (
		<section id="pricing" className="py-24 relative">
			<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20"></div>
			<div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Choose the perfect plan for your team. All plans include a 14-day free trial.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<div
							key={plan.title}
							data-aos="fade-up"
							data-aos-delay={`${index * 150}`}
							data-aos-duration="800"
							data-aos-once="true"
						>
							<PricingCard
								key={plan.title}
								{...plan}
								onSelectPlan={handleSelectPlan}
								data-aos="fade-up"
								data-aos-delay={200 + index * 150}
								data-aos-duration="800"
								data-aos-once="true"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Pricing
