import { BuyButton } from "@/components/BuyButton"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"


export const CTA = () => {
    return (
        <section id="cta" className="relative overflow-hidden bg-neutral-900 border-t-3xl border-neutral-900">
            <MaxWidthWrapper className="relative flex flex-col items-center justify-center space-y-6 py-20 md:py-30">
                <hgroup className="relative z-20 flex items-center flex-col justify-center w-full gap-6">
                    <h2 className="flex-1 font-extrabold text-xl text-center md:text-4xl mb-2 max-w-lg">
                        Save time and Build Fast
                    </h2>
                    <p className="flex-1 font-medium text-base text-center md:text-lg  max-w-lg w-full mb-8">
                        Don&apos;t wait any longer. Seize this opportunity to transform your ideas into reality with our Next.js Boilerplates.
                    </p>
                </hgroup>

                <BuyButton text="I'M READY" kit="Premium Kit" />
            </MaxWidthWrapper>
        </section>
    )
}


// TODO: If you're first launching your app by gathering waitlist emails, use this CTA
// export const CTA = () => {
//     return (
//         <section id="cta" className="relative overflow-hidden bg-neutral-900 border-t-3xl border-neutral-900">
//             <MaxWidthWrapper className="relative grid grid-cols-1 md:grid-cols-2 space-y-6 py-20 md:py-30">
//                 <hgroup className="relative z-20 flex items-center md:items-start flex-col justify-center md:justify-start w-full gap-6">
//                     <h2 className="flex-1 font-extrabold text-xl text-center md:text-start md:text-4xl mb-2 max-w-lg">
//                         Save time, avoid the hassle, and launch your app in days
//                     </h2>
//                     <p className="flex-1 font-medium text-base text-center md:text-start md:text-lg  max-w-lg w-full mb-8">
//                         Don&apos;t wait any longer. Seize this opportunity to transform your ideas into reality with our essential toolkit.
//                     </p>
//                 </hgroup>

//                 <SubscriptionForm />
//             </MaxWidthWrapper>
//         </section>
//     )
// }


// Instructions:
/*
The CTA component is a critical element of your landing page and it usually located above the footer and
in between the Pricing and Footer or FAQ and Footer:
1. Prompt visitors to take a specific action (e.g., sign up, start a free trial, make a purchase)
2. Summarize your value proposition
3. Create a sense of urgency or excitement

Key Aspects:
1. Clear Message: Communicate the main benefit or reason to act.
2. Strong Visual Appeal: Use design elements that draw attention.
3. Compelling Action Text: Use action-oriented, persuasive language.
4. Urgency: Consider adding elements that encourage immediate action.

Implementation Tips (Use the same instruction I gave you in building your hero)
Headline:
   TODO: Keep it short, clear, and benefit-focused. 
   TODO: Use action words that resonate with your target audience.

Subheadline (optional):
   TODO: Provide a brief supporting statement that reinforces the main message.
*/