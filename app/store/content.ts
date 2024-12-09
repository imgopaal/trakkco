import { ContentStore } from '@/global'
import { create } from 'zustand'

export const useContentStore = create<ContentStore>(() => ({
	navigation: [
		{ label: 'The TrakkCo Edge', href: '#edge' },
		{ label: 'Challenges', href: '#challenges' },
		{ label: 'Features', href: '#features' },
		{ label: 'Why TrakkCo', href: '#why-trakkco' },
		{ label: 'About Us', href: '#about-us' },
		{ label: 'Pricing', href: '#pricing' },
	],
	hero: {
		title: 'Your Expertise, Supercharged by AI',
		tagline: 'Precision, compliance, and control—all guided by you.',
		cta: 'Get Started - 30 Days Risk Free',
	},
	sections: [
		{
			id: 'edge',
			title: 'Your Expertise, Elevated by AI',
			content:
				"Care documentation shouldn't be a battle between automation and control. With TrakkCo, it's not. TrakkCo is designed to enhance your expertise, placing care coordinators and office staff firmly in the driver's seat. Every AI-powered suggestion, every refined document, every compliance check—fully guided by you. With TrakkCo, you hold the power to create seamless, precise, and fully personalized documentation while maintaining full control over every detail. It's not just automation; it's an edge that transforms your experience into actionable brilliance.",
			futureVision:
				"TrakkCo is more than a tool—it's a step into the future of care. Imagine a world where every care decision is precise, compliant, and personal. Together, we're shaping a brighter future for care documentation, one interaction at a time.",
			guarantee: {
				title: 'Your Peace of Mind, Guaranteed',
				content:
					"We're confident that TrakkCo will transform how you manage care documentation. But we want you to experience it risk-free. That's why we offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund every penny—no questions asked.",
				cta: 'Try TrakkCo Today with Confidence',
			},
		},
		{
			id: 'challenges',
			title: 'Turn Complexity Into Simplicity',
			content: "In today's care environment, challenges like these demand expert solutions:",
			challenges: [
				{ title: 'Ever-Growing Paperwork', description: 'Manual documentation saps time and energy.' },
				{
					title: 'Compliance Complexity',
					description: 'Meeting standards while maintaining clarity can feel impossible.',
				},
				{
					title: 'Consistency Challenges',
					description: 'Translating team expertise into seamless, client-ready outputs is an uphill battle.',
				},
			],
			solution:
				'TrakkCo is the solution. It ensures every plan, risk assessment, and report is structured, compliant, and completely customizable—guided entirely by the people who know best: you and your team.',
			compassion:
				'Compassion in Action: By taking care of the technical details, TrakkCo helps you focus on the heart of care—building trust, understanding individual needs, and delivering services that truly make a difference.',
		},
		{
			id: 'features',
			title: 'Your Expertise. Your Insights. TrakkCo Does the Rest.',
			features: [
				{
					title: 'Precision at Every Step',
					description:
						'AI suggestions are powered by your expertise, giving you the tools to refine, approve, or customize every detail.',
				},
				{
					title: 'Empowered Collaboration',
					description:
						'TrakkCo works alongside your team like a trusted assistant, enhancing—not replacing—your decision-making.',
				},
				{
					title: 'Tailored Care Plans',
					description:
						'Craft professional, compliant plans that reflect your understanding of each service user.',
				},
				{
					title: 'Smart Risk Management',
					description:
						'Proactively identify risks and receive actionable suggestions—all within your control.',
				},
				{
					title: 'Effortless Adjustments',
					description:
						"Tweak and approve every output to ensure it aligns with your team's high standards and care philosophies.",
				},
			],
		},
		{
			id: 'why-trakkco',
			title: 'A Tool That Amplifies, Not Automates',
			content:
				"TrakkCo isn't just about getting the job done—it's about doing it your way. Every feature is designed to reflect your expertise and amplify your unique voice in care documentation.",
			benefits: [
				{
					title: 'Human Expertise First',
					description:
						'AI works as an extension of your knowledge, providing suggestions you can refine, reject, or approve.',
				},
				{
					title: 'Full Visibility',
					description: 'Stay informed and in control with transparent workflows and real-time validation.',
				},
				{
					title: 'Customizable Outputs',
					description:
						"Make every document uniquely yours—every care plan, risk assessment, and report reflects your team's expertise.",
				},
			],
			conclusion:
				'With TrakkCo, your insights drive the process, ensuring the final outputs always align with your standards.',
		},
		{
			id: 'about-us',
			title: 'Built for Care Professionals, by Care Innovators',
			content:
				"At TrakkCo, we understand the challenges of care documentation because we've worked alongside care teams to design a solution that truly meets your needs.",
			points: [
				{
					title: 'Trusted Process',
					description:
						'Every feature has been crafted with feedback from care professionals, ensuring TrakkCo aligns with real-world workflows.',
				},
				{
					title: 'Future-Proof Design',
					description: "As regulations evolve, TrakkCo evolves with them—so you're always a step ahead.",
				},
				{
					title: 'Commitment to Care',
					description:
						'Our mission is to empower teams like yours to focus on what matters most: delivering exceptional care.',
				},
			],
		},
		{
			id: 'cta',
			title: 'Take Control of Your Documentation—And Transform Care',
			buttonText: 'Book Your Free Demo Today!',
			supportingText:
				'Discover how TrakkCo enhances your expertise, saves time, and empowers your team to lead in care. Schedule a demo to see how TrakkCo works with you—not for you.',
		},
		{
			id: 'future',
			title: 'Your Vision, Powered by TrakkCo',
			content:
				"Care documentation is evolving, and TrakkCo is here to ensure your team is always ahead of the curve. By combining your expertise with the precision of AI, TrakkCo empowers you to create care plans and reports that aren't just compliant—they're transformative. The future of care documentation starts right here. With TrakkCo, you're not just improving workflows—you're shaping the next generation of care documentation. Together, we're building a world where expertise meets precision, and every interaction counts. Take control of the future. With TrakkCo, your team leads the way in care innovation.",
		},
	],
	pricing: {
		title: 'Simple, Transparent Pricing',
		description: 'Choose the perfect plan for your team. All plans include a 30-day free trial.',
		tiers: [
			{
				name: 'Starter',
				price: '$29',
				period: '/month',
				description: 'Up to 5 team members',
				features: [
					'Basic time tracking',
					'Project management',
					'Email support',
					'Mobile app access',
					'Basic reporting',
				],
				buttonText: 'Get Started',
				buttonVariant: 'outline',
			},
			{
				name: 'Professional',
				price: '$79',
				period: '/month',
				description: 'Up to 15 team members',
				features: [
					'Advanced time tracking',
					'Project & task management',
					'Priority support',
					'Mobile & desktop apps',
					'Advanced analytics',
					'Custom workflows',
					'Team productivity insights',
				],
				buttonText: 'Get Started',
				buttonVariant: 'default',
			},
			{
				name: 'Enterprise',
				price: '$199',
				period: '/month',
				description: 'Unlimited team members',
				features: [
					'Enterprise-grade security',
					'Custom integrations',
					'24/7 dedicated support',
					'AI-based features',
					'Advanced reporting & API',
					'SSO & active controls',
					'Custom training',
				],
				buttonText: 'Contact Sales',
				buttonVariant: 'outline',
			},
		],
	},
}))
