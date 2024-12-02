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
