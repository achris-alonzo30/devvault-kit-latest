"use client";

import {
    motion,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { LINKS } from "@/features/landing-page/lib/constants";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { UserButton } from "../features/auth/components/UserButton";
import { UserButtonLoading } from "../features/auth/components/UserButtonLoading";

export const Header = () => {
    const router = useRouter();
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.header
            initial={{
                opacity: 0,
                y: "-100%",
            }}
            animate={{
                opacity: 1,
                y: "0%",
            }}
            transition={{
                duration: 1.25,
                ease: "easeInOut",
            }}
            className={cn("fixed left-0 right-0 top-0 z-50 py-6 bg-background transition-colors duration-300 ease-in-out",
                scrolled && "bg-background/95 backdrop-blur-lg border-b border-background/50"
            )}
        >
            <MaxWidthWrapper>
                <nav className="flex items-center justify-between">
                    <ul className="flex flex-1 items-center justify-between gap-12 w-full">
                        {/* TODO: Add the logo here */}
                        <Logo className="flex-shrink-0" />
                        {/* TODO: Add the links here */}
                        {/* TODO: go to the @/lib/constants file and update your links there */}
                        {/* The reason why I added it there because this variable is being used to for MobileMenu component */}
                        <div className="hidden md:flex flex-1 items-center justify-end gap-6 lg:gap-12">
                            {LINKS.map((l, i) => (
                                <NavLink key={i} href={l.href} text={l.text} />
                            ))}
                        </div>
                    </ul>

                    <ul className="hidden md:flex flex-1 items-center gap-6 justify-end">
                        <Link
                            target="_blank"
                            href="https://x.com/0dev_vault"
                        >
                            <FaXTwitter className="size-6 text-muted-foreground hover:text-[#fcba28] transition duration-200 ease-in-out" />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://linkedin.com/in/lonzochris/"
                        >
                            <FaLinkedin className="size-6 text-muted-foreground hover:text-[#fcba28] transition duration-200 ease-in-out cursor-pointer" />
                        </Link>

                        {/* TODO: Use this to show a loading state */}
                        <AuthLoading>
                            <UserButtonLoading />
                        </AuthLoading>
                        {/* TODO: Use this to show an unauthenticated state */}
                        <Unauthenticated>
                            <button onClick={() => router.push("/auth")} className="px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent border-2 border-[#fcba28] hover:bg-[#fcba28] text-[#fcba28] hover:text-background transition duration-200 ease-in-out">
                                Login
                            </button>
                        </Unauthenticated>
                        {/* TODO: Use this to show an authenticated state */}
                        <Authenticated>
                            <UserButton />
                        </Authenticated>
                    </ul>

                    {/* Add the mobile menu here */}
                    <MobileMenu />
                </nav>
            </MaxWidthWrapper>
        </motion.header>
    )
}