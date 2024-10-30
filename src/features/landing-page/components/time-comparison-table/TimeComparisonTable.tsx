"use client";

import {
    motion,
    useInView,
    useAnimation,
} from 'framer-motion';
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"

const tasks = [
    { name: "Setting up authentication", scratch: "5 hours", kit: "15 minutes" },
    { name: "Designing and coding the landing page", scratch: "7+ hours", kit: "30 minutes" },
    { name: "Integrating payment systems", scratch: "6 hours", kit: "20 minutes" },
    { name: "Integrating emails and designing templates", scratch: "5 hours", kit: "20 minutes" },
    { name: "Database setup and configuration", scratch: "5 hours", kit: "10 minutes" },
    { name: "Implementing user role permissions", scratch: "2 hours", kit: "10 minutes" },
    { name: "Ensuring mobile responsiveness", scratch: "3 hours", kit: "Already optimized" },
    { name: "Adding SEO and meta tags", scratch: "2 hours", kit: "Pre-configured" },
    { name: "Configuring analytics and monitoring", scratch: "4 hours", kit: "10 minutes" },
]

export const TimeComparisonTable = () => {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                opacity: { duration: 0.01 }
            }
        }
    };

    return (
        <section id="time-comparison-table" className="min-h-screen flex items-center justify-center bg-[#272727] p-4">
            <MaxWidthWrapper className="relative z-20 w-full max-w-4xl space-y-8 pb-16 pt-32">
                <h2 className="text-3xl font-bold text-center text-[#f9f4da]">DevVault SaaS Kits Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#FF652F] text-[#f9f4da]">
                                <th className="p-3 text-left">Task</th>
                                <th className="p-3 text-center">Building From Scratch</th>
                                <th className="p-3 text-center">Using DevVault SaaS Kits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-[#272727]" : "bg-[#2f2f2f]"}>
                                    <td className="p-3 text-[#f9f4da] border-b border-[#3f3f3f]">{task.name}</td>
                                    <td className="p-3 text-center text-[#CFCFCF] border-b border-[#3f3f3f]">{task.scratch}</td>
                                    <td className="p-3 text-center text-[#fcba28] font-semibold border-b border-[#3f3f3f]">{task.kit}</td>
                                </tr>
                            ))}
                            <tr className="bg-[#2f2f2f] font-bold">
                                <td className="p-3 text-[#f9f4da]">Total Time Spent</td>
                                <td className="p-3 text-center text-[#CFCFCF]">30+ hours</td>
                                <td className="p-3 text-center text-[#fcba28]">Less than 2 hours</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-[#3f3f3f] p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#f38ba3] mb-4">Time Saved: 30+ hours</h3>
                    <p className="text-[#f9f4da] leading-relaxed">
                        With our <strong>Next.js App Router boilerplate</strong>, developers can drastically reduce tedious setup time 
                        from over 30 hours to less than 2 hours, empowering them to 
                        <strong className="underline text-[#fcba28]">focus on building and launching their dream SaaS application rapidly.</strong>
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-[#f9f4da]">
                    <span className="text-lg line-through">Building From Scratch</span>
                    <ArrowRight className="text-[#FF652F] w-8 h-8 rotate-90 md:rotate-0" />
                    <div ref={ref} className="relative inline-block">
                        <span className="text-lg font-bold text-[#fcba28] z-10 relative px-2 py-1">
                            Using DevVault SaaS Kit
                        </span>
                        <motion.svg
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            width="200%"
                            height="200%"
                            viewBox="0 0 360 80"
                            initial="hidden"
                            animate={controls}
                        >
                            <motion.path
                                d="M20,40 C20,10 340,0 340,40 C340,70 20,80 20,40"
                                fill="transparent"
                                strokeWidth="2"
                                stroke="#FF652F"
                                variants={draw}
                                custom={0}
                            />
                        </motion.svg>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

// Instructions
/*
This component creates a visually appealing section that highlights 
the benefits of using your SaaS product compared to alternative solutions.

For example: My SaaS highlihts the benefits of you SAVING A LOT OF TIME. 
That's why I built a time comparison table

Purpose:
- Showcase the key advantages of your SaaS product
- Provide a clear, quantitative or qualitative comparison for potential customers
- Reinforce the value proposition of your product

Implementation tips:
    TODO: Focus on the most impactful benefits that set your product apart
    TODO: Use concrete examples or metrics where possible
    TODO: Consider adding icons or illustrations to make the comparison more visually engaging
    TODO: Ensure the language resonates with your target audience

*/