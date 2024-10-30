"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { FiChevronDown } from "react-icons/fi";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

const questions = [
    {
        id: 1,
        question: "What is DevVault SaaS Kit and how does it help with startup development?",
        answer: "It is a toolkit for building startups quickly, including features like Next.js, Stripe payment integration, email via Resend, database like ConvexDB, and I'll be adding more features soon. It offers SEO optimization and web analytics to help you scale your project efficiently."
    },
    {
        id: 2,
        question: "Can I customize the DevVault SaaS Kit to fit my startup's unique needs?",
        answer: "Yes, it is fully customizable. From UI modifications to adding integrations like database options, it's designed to adapt to your startup's growth and specific requirements."
    },
    {
        id: 3,
        question: "Is the DevVault SaaS Kit beginner-friendly for new developers?",
        answer: "Absolutely! Whether you’re a seasoned developer or just starting out, it is beginner-friendly and comes with comprehensive documentation to guide you through the development process."
    },
    {
        id: 4,
        question: "How fast can I launch a startup using DevVault’s Next.js SaaS Kit?",
        answer: "I have created a documentation on how to deploy your app to production and with DevVault's SaaS Kit, you can launch a fully functional startup in just a few days, saving weeks of coding time. It's optimized for quick startup launches with a ready-to-use tech stack."
    },
    {
        id: 5,
        question: "Which payment systems can I integrate with the DevVault Starter Kit (Stripe or Lemon Squeezy)?",
        answer: "Currently it integrates seamlessly with Stripe, for the future I will add option using Lemon Squeezy, so it allows you to choose the best payment gateway for your needs."
    },
    {
        id: 6,
        question: "Do you offer a money-back guarantee or refund policy on the DevVault SaaS Kit?",
        answer: "Yes, we offer a 14-day refund policy. If it doesn't meet your expectations within two weeks, you can request a full refund."
    },
    {
        id: 7,
        question: "What kind of technical support do you offer for DevVault Starter Kit users?",
        answer: "You can reach out to me personally: achris.alonzo30@gmail.com"
    },
    {
        id: 8,
        question: "Can I use the DevVault SaaS Kit to build a custom website for my startup?",
        answer: "Yes! If your needs go beyond the kit. You can contact me directly."
    },
    {
        id: 9,
        question: "How do I receive updates and new features for the DevVault SaaS Kit?",
        answer: "After purchasing, you'll automatically receive updates, including new features and improvements via email."
    }
];


export const FAQ = () => {
    return (
        <section className="px-4 py-12">
            <MaxWidthWrapper>
                <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <hgroup className="flex  flex-col gap-2  mt-6">
                        <h3 className="mb-4 text-3xl text-center md:text-start font-bold">
                            Frequently asked questions
                        </h3>
                        {/* TODO: Replace your contact info here */}
                        <p className="font-medium text-base text-center md:text-start md:text-lg max-w-md">
                            I am here to help you with any questions you may have. If you don&apos;t find what you&apos;re looking for. Please contact <Link className="text-[#fcba28] font-bold hover:underline" href="mailto:achris.alonzo30@gmail.com">me</Link>.
                        </p>
                    </hgroup>
                    <aside>
                        {questions.map((q, i) => (
                            <Question key={i} title={q.question} defaultOpen={q.id === 1}>
                                {q.answer}
                            </Question>
                        ))}
                    </aside>
                </article>
            </MaxWidthWrapper>
        </section>
    );
};

const Question = ({
    title,
    children,
    defaultOpen = false,
}: {
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
}) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className="border-b-[1px] border-b-slate-300"
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex w-full items-center justify-between gap-4 py-6"
            >
                <span className="text-[#fcba28]  text-left text-lg font-bold">
                    {title}
                </span>
                <motion.span
                    variants={{
                        open: { rotate: "180deg" },
                        closed: { rotate: "0deg" },
                    }}
                >
                    <FiChevronDown className="text-2xl text-[#fcba28]" />
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: open ? height : "0px",
                    marginBottom: open ? "24px" : "0px",
                }}
                className="overflow-hidden text-foreground"
            >
                <p ref={ref}>{children}</p>
            </motion.div>
        </motion.div>
    );
};

// Instructions
/*
The FAQ component addresses common questions about your product, helping to:
1. Provide quick answers to potential customers
2. Reduce support inquiries
3. Improve SEO and drive organic traffic

QUICK TIP: SEO-Driven Question Generation:
To generate SEO-friendly questions and improve your search rankings:

Use Google Search:
   TODO: Type a question about your app into Google search.
   TODO: Look at the "People also ask" section for related questions.
   TODO: Check the autocomplete suggestions as you type. 
   If you see questions similar to what you were going to ask, prioritize these. 
   These questions are likely frequently searched and can help your SEO.

Use Keyword Research Tools:
   - Tools like Answer the Google Keyword Planner, Public, Ahrefs, or SEMrush can provide question ideas based on keywords.

Implementation Tips:
Question Structure:
   TODO: Use natural language for questions, as if a real person is asking.
   TODO: Start with question words: What, How, Why, When, Where, Who.

2. Answer Format:
   TODO: Keep answers concise but informative.
   TODO: Use simple language and avoid jargon.
   TODO: Include links to more detailed information when necessary.

*/
