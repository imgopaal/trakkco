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
		{ label: 'FAQs', href: '#faq' },
	],
	hero: {
		title: 'Your Expertise, Supercharged by AI',
		tagline:
			'No more headaches, no more manual paperwork. Just smarter care documentation powered by AI and driven by you.',
		cta: 'Get Started - 30 Days Risk Free',
	},
	sections: [
		{
			id: 'edge',
			title: 'Your Team. Empowered by AI',
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
			content: 'Goodbye Documentation Headaches.',
			challenges: [
				{
					title: 'Overwhelmed by Paperwork?',
					description: 'Manual Care Plans and Reports take time. Let TrakkCo do the heavy lifting.',
				},
				{
					title: 'Navigating CQC Complexity?',
					description: 'Keep your documentation compliant with AI-powered precision.',
				},
				{
					title: 'Consistency Challenges',
					description: 'Align your team’s efforts into professional, standardized outputs.',
				},
			],
			// solution:
			// 	'TrakkCo is the solution. It ensures every plan, risk assessment, and report is structured, compliant, and completely customizable—guided entirely by the people who know best: you and your team.',
			// compassion:
			// 	'Compassion in Action: By taking care of the technical details, TrakkCo helps you focus on the heart of care—building trust, understanding individual needs, and delivering services that truly make a difference.',
		},
		{
			id: 'features',
			title: 'Features That Put You in Control.',
			features: [
				{
					title: 'Smart Risk Assessments',
					description:
						'Collaborate with AI to identify risks based on your expertise and predefined triggers. TrakkCo provides actionable suggestions to mitigate potential issues, ensuring every decision is grounded in safety and compliance.',
				},
				{
					title: 'Real-Time CQC Validation',
					description:
						'Stay compliant effortlessly. With built-in checks, TrakkCo flags any gaps in your documentation and provides actionable suggestions to meet CQC standards before you finalize.',
				},
				{
					title: 'Effortless Refinement',
					description:
						'Review every AI-suggested document, tweak the language, adjust details, or regenerate sections with a single click. It’s not about what TrakkCo does for you—it’s about what you and TrakkCo achieve together.',
				},
				// {
				// 	title: 'Smart Risk Management',
				// 	description:
				// 		'Proactively identify risks and receive actionable suggestions—all within your control.',
				// },
				// {
				// 	title: 'Effortless Adjustments',
				// 	description:
				// 		"Tweak and approve every output to ensure it aligns with your team's high standards and care philosophies.",
				// },
			],
		},
		{
			id: 'why-trakkco',
			title: 'Documentation That Works With You.',
			content:
				"TrakkCo isn't just about getting the job done—it's about doing it your way. Every feature is designed to reflect your expertise and amplify your unique voice in care documentation.",
			benefits: [
				{
					title: 'Empower Your Team',
					description: 'AI amplifies your expertise without replacing it.',
				},
				{
					title: 'Collaborative Workflows',
					description: 'Full visibility and control over every Care Plan, Risk Assessment, and Report.',
				},
				{
					title: 'Custom Outputs',
					description: 'Tailor documentation to match your team’s high standards.',
				},
			],
			// conclusion:
			// 	'With TrakkCo, your insights drive the process, ensuring the final outputs always align with your standards.',
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
	faq: [
		{
			question: "What is TrakkCo's primary purpose?",
			answer: 'TrakkCo is an AI-powered care documentation system designed to streamline the creation of care plans, risk assessments, incident reports, and compliance documents. It ensures these documents are professional, ready for regulatory compliance, and customised to meet specific care requirements.',
		},
		{
			question: 'How does TrakkCo ensure compliance with care documentation standards?',
			answer: 'TrakkCo incorporates built-in compliance checks based on current regulatory standards, such as the up-to-date CQC guidelines. It validates inputs in real-time, ensuring all required information is accurate and complete before finalizing any documentation.',
		},
		{
			question: 'What makes TrakkCo user-friendly for care agency staff?',
			answer: 'TrakkCo uses a structured, step-by-step approach to gather information. It provides examples, rephrases unclear questions, and adapts prompts based on previous answers, ensuring users feel supported and confident throughout the documentation process.',
		},
		{
			question: 'Can TrakkCo keep all care documentation organised?',
			answer: 'Yes, TrakkCo stores all generated documents—such as care plans, risk assessments, and reports—in one central, accessible system. This ensures that records are easy to retrieve, securely managed, and consistently updated to reflect the most recent information.',
		},
	],
	topFeatures: {
		title: "TrakkCo's Top Features",
		subtitle:
			'Create, manage, and document – effortlessly. Powerful tool designed to streamline care agency workflows.',
		features: [
			{
				title: 'Care Plan Walkthroughs',
				description:
					'Step-by-step guidance to create clear, compliant care plans tailored to every service user.',
			},
			{
				title: 'Risk Assessment Suggestions',
				description:
					'Proactively identify risks and receive actionable mitigation strategies with intuitive prompts.',
			},
			{
				title: 'Incident Report Walkthroughs',
				description:
					'Simplify incident reporting with structured workflows that capture all essential details.',
			},
			{
				title: 'Compliment & Comment Reports',
				description: 'Document positive feedback and general observations effortlessly for a balanced record.',
			},
			{
				title: 'Automated Document Generation',
				description:
					'Instantly generate professional, ready-to-use care plans, reports, and assessments with a single click.',
			},
			{
				title: 'Real-Time Updates to Documentation',
				description:
					'Make instant updates by simply telling your AI assistant the changes – watch them seamlessly incorporated into the documents.',
			},
			{
				title: 'Centralised Document Management',
				description:
					'Keep all generated care plans, risk assessments, and reports in one secure, organised place.',
			},
		],
	},
}))
