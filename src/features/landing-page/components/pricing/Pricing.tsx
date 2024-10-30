import { cn } from "@/lib/utils";
import { Check, Zap } from "lucide-react";
import { RiNotionFill } from "react-icons/ri";
import { BuyButton } from "@/components/BuyButton";
import { ChipBanner } from "@/components/ChipBanner"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

const packages = [
    {
        name: "Starter Kit",
        originalPrice: 149,
        price: 99,
        features: [
            "Next.js boilerplate",
            "SEO optimization",
            "Resend email integration",
            "Stripe integration",
            "ConvexDB integration",
            "Authentication system",
            "Basic components",
            "Only DevVault Template",
        ],
    },
    {
        name: "Premium Kit",
        originalPrice: 199,
        price: 149,
        popular: true,
        features: [
            { text: "Everything in Starter, PLUS:", icon: "Zap" },
            { text: "Must-Have Dev Resources (Notion Template)", icon: "Notion" },
            "Premium Components",
            "Framer Motion animations",
            "All Future Templates",
            "Premium Documentation",
            "Future Updates",
            "Priority support",
        ],
    },
];

export const Pricing = () => {

    return (
        <section id="pricing" className="relative overflow-hidden">
            <MaxWidthWrapper className="flex flex-col items-center py-20 md:py-32">
                <div className="flex flex-col justify-center items-center gap-4 max-w-xl mb-4 md:mb-6">
                    <ChipBanner text="PRICING" />
                    <h2 className="flex-1 font-extrabold text-xl text-center md:text-3xl lg:text-5xl">
                        Affordable Plans for Every Startup
                    </h2>
                </div>
                <p className="flex-1 font-medium text-base text-center justify-center md:text-lg  max-w-lg w-full">
                    Don&apos;t miss out on the opportunity to kickstart your journey. Invest in your future today with our <strong>DevVaul SaaS kits</strong>.
                </p>

                {/* TODO: Update the lg:grid-cols-2 if you added more packages in the array */}
                <article className="mt-16 grid max-w-lg grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-2">
                    {packages.map((pkg) => {
                        return (
                            <div
                                key={pkg.name}
                                className={cn("relative flex flex-col justify-between rounded-3xl p-8 shadow-xl xl:p-10",
                                    pkg.popular ? "bg-foreground text-background ring-4 ring-[#f38ba3]" : "bg-neutral-900 text-foreground")}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                        <p className="rounded-full uppercase font-foreground bg-[#f38ba3] px-4 py-1 text-xs font-semibold leading-5 text-primary shadow-md">
                                            Most Popular
                                        </p>
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-lg font-semibold leading-8 mb-4">{pkg.name}</h3>
                                    <div className="mt-6 flex items-baseline gap-x-2 mb-2">
                                        <span className="text-sm line-through opacity-50">${pkg.originalPrice}</span>
                                        <span className="text-4xl font-black">${pkg.price}</span>
                                        <span className="text-sm font-semibold">USD</span>
                                    </div>
                                    <p className="text-sm leading-6 opacity-70 font-semibold">
                                        ONE TIME PAYMENT
                                    </p>
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className={cn("flex gap-x-3 font-medium",  pkg.popular && "font-semibold")}>
                                                {typeof feature === 'string' ? (
                                                    <>
                                                        <Check className={cn("h-6 w-5 flex-none",
                                                            pkg.popular ? "text-background" : "text-foreground")} aria-hidden="true" />
                                                        {feature}
                                                    </>
                                                ) : feature.icon === "Zap" ? (
                                                    <>
                                                        <Zap className={cn("h-6 w-5 flex-none animate-pulse font-bold",
                                                            pkg.popular ? "text-[#fcba28]" : "text-foreground")} aria-hidden="true" />
                                                        {feature.text}
                                                    </>
                                                ) : feature.icon === "Notion" ? (
                                                    <>
                                                        <RiNotionFill className={cn("h-6 w-5 flex-none",
                                                            pkg.popular ? "text-background" : "text-foreground")} aria-hidden="true" />
                                                        {feature.text}
                                                    </>
                                                ) : null}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8 flex flex-col items-center">
                                    <BuyButton text="START BUILDING" kit={pkg.name as "Starter Kit" | "Premium Kit"} />
                                    <p className="text-sm font-bold text-center text-foreround mt-2">
                                        Use on Unlimited Projects
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </article>
            </MaxWidthWrapper>
        </section>
    )
}


// Instructions
/*
This component displays your product's pricing packages. 

Key Aspects:
1. Clear Package Differentiation: Clearly show the differences between packages.
2. Highlight Value: Emphasize the value proposition of each package.
3. Flexible Structure: Design the component to easily accommodate price and feature changes.
4. Visual Appeal: Use design elements to make the pricing attractive and easy to understand.

Pricing Strategy and A/B Testing:
- Initial Pricing: It's okay to start with lower prices or match competitors. The goal is to enter the market and gain traction.
- Competitor Analysis: Research your competitors' pricing and features. Use this as a baseline, then improve upon it.
- A/B Testing: Your initial prices are not set in stone. Plan to conduct A/B tests to find the optimal price points.
- Value-Based Pricing: As you build a great product and strong marketing, you can adjust prices based on the value you provide.

Dynamic Pricing Structure:
   TODO: Store pricing data in a separate file or database for easy updates.
   TODO: Clearly list features for each package.
   TODO: Highlight unique features of higher-tier packages.

*/