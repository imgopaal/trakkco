'use client'

import { useContentStore } from '@/app/store/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FAQSection() {
	const faq = useContentStore(state => state.faq)

	return (
		<section id="faq" className="py-24 bg-black/5">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
						Frequently Asked Questions
					</h2>
					<p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Get answers to common questions about TrakkCo&apos;s features and capabilities
					</p>
				</div>
				<div className="mx-auto max-w-3xl mt-8 md:mt-12">
					<Accordion type="single" collapsible className="w-full">
						{faq.map((item, index) => (
							<AccordionItem key={index} value={`item-${index + 1}`} className="border-zinc-800">
								<AccordionTrigger className="text-white text-lg hover:no-underline text-left">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-zinc-400 text-lg">{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	)
}
