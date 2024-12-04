export interface PricingFeature {
	text: string
	included: boolean
}

export interface PricingPlan {
	title: string
	price: string
	isPopular?: boolean
	features: PricingFeature[]
	ctaText: string
}

export interface PricingCardProps extends PricingPlan {
	onSelectPlan: (plan: string) => void
}

export interface NavItem {
	label: string
	href: string
}

export interface Feature {
	title: string
	description: string
	icon?: React.ComponentType<{ className?: string }>
}

export interface PricingTier {
	name: string
	price: string
	period: string
	description: string
	features: string[]
	buttonText: string
	buttonVariant?: 'default' | 'outline'
}

export interface Section {
	id: string
	title: string
	subtitle?: string
	content?: string
	futureVision?: string
	guarantee?: {
		title: string
		content: string
		cta: string
	}
	challenges?: {
		title: string
		description: string
	}[]
	solution?: string
	compassion?: string
	features?: {
		title: string
		description: string
	}[]
	benefits?: {
		title: string
		description: string
	}[]
	points?: {
		title: string
		description: string
	}[]
	conclusion?: string
	supportingText?: string
	buttonText?: string
}

export interface ContentStore {
	navigation: NavItem[]
	hero: {
		title: string
		tagline: string
		cta: string
	}
	sections: Section[]
	pricing: {
		title: string
		description: string
		tiers: PricingTier[]
	}
}
