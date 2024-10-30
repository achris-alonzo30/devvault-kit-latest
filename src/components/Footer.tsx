import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="flex flex-col justify-end mt-auto border-t border-foreground/50 relative overflow-hidden bg-neutral-900">
            <MaxWidthWrapper className="container flex flex-col items-center justify-between p-6 space-y-4 md:space-y-0 md:flex-row">
                <p className="text-sm text-foreground font-medium">
                    {/* TODO: Replace App Name */}
                    © <span className="font-bold">App Name</span> - {year}
                </p>
                <div className="flex items-center gap-4">
                    {/* TODO: Add more links to your needs */}
                    <Link
                        href="/disclosure"
                    >
                        <p className="text-sm text-foreground hover:text-[#fcba28] transition duration-200 ease-in-out">
                            Disclosure
                        </p>
                    </Link>
                    <Link
                        href="/privacy-policy"
                    >
                        <p className="text-sm text-foreground hover:text-[#fcba28] transition duration-200 ease-in-out">
                            Privacy Policy
                        </p>
                    </Link>
                </div>



                <div className="flex items-center gap-4">
                    {/* TODO: Add more social media links */}
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
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}