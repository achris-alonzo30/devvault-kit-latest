"use client";

import { LeftHero } from "./LeftHero";
import { RightHero } from "./RightHero";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"

export const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <MaxWidthWrapper className="relative z-20 flex items-center justify-between pb-16 pt-32 md:pb-40 md:pt-40 min-h-screen">
                <LeftHero />
                <RightHero />
            </MaxWidthWrapper>
        </section>
    )
}