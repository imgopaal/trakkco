'use client'

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useContentStore } from "@/app/store/content"

export function Pricing() {
  const pricing = useContentStore((state) => state.pricing)

  return (
    <section id="pricing" className="py-24 bg-black/5">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {pricing.title}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            {pricing.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {pricing.tiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="flex items-baseline text-2xl font-semibold">
                  {tier.price}
                  <span className="ml-1 text-xl font-normal text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="grid gap-4 flex-1">
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.buttonVariant}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

