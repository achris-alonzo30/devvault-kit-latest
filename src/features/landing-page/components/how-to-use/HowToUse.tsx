"use client";

import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";
import { useRef } from "react";
import { BuyButton } from "@/components/BuyButton";
import { ChipBanner } from "@/components/ChipBanner"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"

export const HowToUse = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]

    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [.3, 1]);
    return (
        <section id="how-to-use" className="relative overflow-hidden">
            <MaxWidthWrapper className="relative flex flex-col items-center py-20 md:py-32">
                {/* HowToUse Header */}
                <div className="flex flex-col justify-center items-center gap-4 max-w-xl mb-4 md:mb-6">
                    <ChipBanner text="IT'S EASY TO GET STARTED" />
                    <h2 className="flex-1 font-extrabold text-xl text-center md:text-3xl lg:text-5xl">
                        Launch Your App Today With Our Easy Setup
                    </h2>
                </div>
                <p className="flex-1 font-medium text-base text-center justify-center md:text-lg  max-w-lg w-full">
                    Start building your app without the stress of complicated setups, thanks to our user-friendly Next.js Boilerplate.
                </p>

                {/* HowToUse Video */}
                <motion.article
                    ref={ref}
                    initial={{
                        filter: "blur(5px)",
                    }}
                    whileInView={{
                        filter: "blur(0px)",
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.25,
                    }}
                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: "800px",
                    }}
                    className="relative h-full w-full sm:w-10/12 md:w-8/12  p-0.5 my-12 overflow-hidden rounded-2xl">
                    <iframe
                        width="100%"
                        height="auto"
                        style={{ aspectRatio: "16/9" }}
                        title="YouTube video player"
                        src={process.env.YT_VID_URL}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    {/* TODO: Use this if you don't have a video yet */}
                    {/* <video
                        autoPlay
                        preload="metadata"
                        className="w-full h-full aspect-auto z-10"
                    >
                        <source src="/coming-soon-clip.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                </motion.article>
                {/* HowToUse CTA */}
                <BuyButton text="I'M READY" kit="Premium Kit" />

            </MaxWidthWrapper>
        </section>
    )
}


// Instructions
/*
This component serves a dual purpose:
1. Demonstrate how to use your product
2. Build trust by showcasing the people behind the product

Key Aspects:
1. Product Demonstration: Clearly show how your product works and its key features.
2. Personal Touch: Include yourself or team members in the video to build trust and connection.
3. Engagement: Use motion effects to draw attention and keep users interested.

Why Show Yourself:
- Builds trust, Creates connection, Humanizes your brand
*/