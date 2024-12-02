"use client"
import React from 'react'
import { Check } from 'lucide-react'
import { PricingCardProps, PricingPlan } from '@/global'

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
			<h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
			<div className="flex items-baseline gap-x-2">
				<span className="text-4xl font-bold text-white">${price}</span>
				<span className="text-gray-400">/month</span>
			</div>
		</div>
		<ul className="space-y-4 flex-grow mb-8">
			{features.map((feature, index) => (
				<li key={index} className="flex items-center gap-x-3 text-gray-300">
					<Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
					<span>{feature.text}</span>
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

	const plans: PricingPlan[] = [
		{
			title: 'Starter',
			price: '29',
			ctaText: 'Get Started',
			features: [
				{ text: 'Up to 5 team members', included: true },
				{ text: 'Basic time tracking', included: true },
				{ text: 'Project management', included: true },
				{ text: 'Email support', included: true },
				{ text: 'Mobile app access', included: true },
				{ text: 'Basic reporting', included: true },
			],
		},
		{
			title: 'Professional',
			price: '79',
			isPopular: true,
			ctaText: 'Get Started',
			features: [
				{ text: 'Up to 15 team members', included: true },
				{ text: 'Advanced time tracking', included: true },
				{ text: 'Project & task management', included: true },
				{ text: 'Priority support', included: true },
				{ text: 'Mobile & desktop apps', included: true },
				{ text: 'Advanced analytics', included: true },
				{ text: 'Custom workflows', included: true },
				{ text: 'Team productivity insights', included: true },
			],
		},
		{
			title: 'Enterprise',
			price: '199',
			ctaText: 'Contact Sales',
			features: [
				{ text: 'Unlimited team members', included: true },
				{ text: 'Enterprise-grade security', included: true },
				{ text: 'Custom integrations', included: true },
				{ text: '24/7 dedicated support', included: true },
				{ text: 'All apps & features', included: true },
				{ text: 'Advanced reporting & API', included: true },
				{ text: 'SSO & admin controls', included: true },
				{ text: 'Custom training', included: true },
			],
		},
	]

	return (
		<section id="pricing" className="py-24 relative">
			<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20"></div>
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Choose the perfect plan for your team. All plans include a 14-day free trial.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map(plan => (
						<PricingCard key={plan.title} {...plan} onSelectPlan={handleSelectPlan} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Pricing
