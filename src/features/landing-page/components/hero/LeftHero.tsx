
import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import { Trophy, ChevronRight } from "lucide-react";
import { ChipBanner } from "@/components/ChipBanner";
import { BuyButton } from "@/components/BuyButton";
import { CanvasCover } from "@/components/animation/CanvasCover";


export const LeftHero = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: { y: 25, opacity: 0, filter: "blur(5px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.25,
                delay: 0.25,
                ease: "easeInOut",
            }
        }
    }
    return (
        <div className="flex flex-col flex-1 w-full">
            <motion.aside
                initial={{
                    y: 25,
                    opacity: 0,
                    filter: "blur(5px)"
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="flex relative mb-2 justify-center md:justify-start"
            >
                {/* TODO: This is where you add announcement or something like powered by ChatGPT */}
                {/* TODO: Some other website, this is where they add their awards they've received from Product Hunt */}
                <ChipBanner text="YOUR PARTNER IN STARTUP SUCCESS" />
            </motion.aside>
            {/* TODO: This should only be 50-60 characters */}
            {/* TODO: You only got 3-5 seconds to capture attention */}
            {/* TODO: Your headline should create emotional react or grab their attention */}
            {/* TODO: Generate me 10 headlines and compelling brand narrative angle in under 50-60 characters for [YOUR TOPIC] that aligns with [YOUR COMPANY'S] voice and values. */}
            <motion.h1
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="mb-3 mt-3 text-center md:text-start text-xl font-bold leading-tighter md:text-4xl sm:leading-tighter md:leading-tighter lg:leading-tighter">
                {/* TODO: There are 2 animations you can use here, you can use the AnimatedHeading and this you can find them here @/components/animations */}
                <CanvasCover>Save Time and Launch Your App</CanvasCover> with {" "}
                Lightning Speed
            </motion.h1>

            {/* TODO: Subheadline should be 1-2 sentences */}
            {/* TODO: Expand on the headline's promise with specific benefits */}
            {/* TODO: Use action words and address the user's pain points */}
            {/* TODO: Craft me a 10 subheadlines that elaborates on [MAIN BENEFIT] and addresses [USER PAIN POINT], while maintaining [YOUR COMPANY'S] tone. */}
            <motion.p
                initial={{
                    y: 25,
                    opacity: 0,
                    filter: "blur(5px)"
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 1.25,
                    delay: 0.5,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="mb-4 max-w-2xl text-center md:text-start text-sm md:text-md text-foreground lg:text-lg"
            >
                Skip the boring parts and finish your app in days with our <strong>Next.js App Router boilerplate.</strong>
            </motion.p>

            <motion.div
                initial={{
                    y: 25,
                    opacity: 0,
                    filter: "blur(5px)"
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 1.25,
                    delay: 0.75,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="flex my-4 items-center gap-10 justify-center md:justify-start"
            >
                {/* TODO: Call To Action Button */}
                <BuyButton text="TAKE MY MONEY NOW" kit="Premium Kit" />

                {/* TODO: Optional to help them get to know you more */}
                <Link href="/docs" className="group flex tracking-widest items-center gap-2 text-xs md:text-sm font-black text-foreground/80">
                    LEARN MORE
                    <ChevronRight className="size-4 group-hover:translate-x-2 transition-all duration-200 ease-in-out " />
                </Link>
            </motion.div>

            {/* TODO: Add description here to create a scarcity, something they will feel empowered to buy now */}
            {/* TODO: The other way is to add pictures of your clients here to make them buy now or build trusts */}
            <motion.div
                initial={{
                    y: 25,
                    opacity: 0,
                    filter: "blur(5px)"
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 1.25,
                    delay: 1,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="flex items-center gap-1 font-medium justify-center md:justify-start text-foreground/80 text-xs"
            >
                <Trophy className="text-[#fcba28]/80 size-4" />
                <p>Launch your dream app in no time.</p>
            </motion.div>
        </div>
    )
}

// TODO: If you're going to do a waitlist first when you launch your app use this component
// export const LeftHero = () => {
//     return (
//         <div className="flex flex-col flex-1 w-full">
//             <motion.aside
//                 initial={{
//                     y: 25,
//                     opacity: 0,
//                     filter: "blur(5px)"
//                 }}
//                 whileInView={{
//                     y: 0,
//                     opacity: 1,
//                     filter: "blur(0px)"
//                 }}
//                 transition={{
//                     duration: 1.25,
//                     ease: "easeInOut",
//                 }}
//                 viewport={{ once: true }}
//                 className="flex relative mb-2 justify-center md:justify-start"
//             >
//                 <ChipBanner text="YOUR PARTNER IN STARTUP SUCCESS" />
//             </motion.aside>
//             <AnimatedHeading />
//             <motion.p
//                 initial={{
//                     y: 25,
//                     opacity: 0,
//                     filter: "blur(5px)"
//                 }}
//                 whileInView={{
//                     y: 0,
//                     opacity: 1,
//                     filter: "blur(0px)"
//                 }}
//                 transition={{
//                     duration: 1.25,
//                     delay: 0.5,
//                     ease: "easeInOut",
//                 }}
//                 viewport={{ once: true }}
//                 className="mb-4 max-w-2xl text-center md:text-start text-sm md:text-md text-foreground lg:text-lg"
//             >
//                 Join our early access list and be the first to leverage our customizable Next.js App Router boilerplate to launch your dream application.
//             </motion.p>
//             {/* TODO: add the email form */}
//             <SubscriptionForm animated />
//         </div>
//     )
// }