import { PricingPlan } from '@/global'

export const navItems = [
	{ label: 'Product', href: '#dashboard', scroll: true },
	{ label: 'Pricing', href: '#pricing', scroll: true },
	{ label: 'Resources', href: '#' },
]

export const plans: PricingPlan[] = [
	{
		title: 'Core',
		price: '180.00',
		ctaText: 'Get Started',
		features: [
			{ text: 'Up to 5 Team Members', included: true },
			{ text: 'Care Plan Workflows', included: true },
			{ text: 'Risk Assessment Workflows', included: true },
			{ text: 'Reports Workflows', included: true },
			{
				text: 'Document Generation: Instantly create professional and compliant care documents.',
				included: true,
			},
			{
				text: 'Real-Time Document Updating: Make edits seamlessly, with changes reflected instantly across your system.',
				included: true,
			},
			{
				text: 'Ticket and Email Support: Get responsive assistance when you need it.',
				included: true,
			},
		],
	},
	{
		title: 'Pro',
		price: 'coming-soon',
		ctaText: 'Learn More',
		features: [
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
		],
	},
	{
		title: 'Enterprise',
		price: 'coming-soon',
		ctaText: 'Learn More',
		features: [
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
			{ text: 'mock', included: false },
		],
	},
]
