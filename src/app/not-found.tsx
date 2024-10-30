import Link from 'next/link';
import type { Metadata } from "next";
import { Logo } from '@/components/Logo';

export const metadata: Metadata = {
    title: "404 - Not Found",
}

// TODO: You can customize this page to your needs

export default async function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-[#272727] text-[#f9f4da]">
            <Logo />
            <div className="text-center mt-5">
                <h1 className="text-4xl md:text-8xl font-bold text-[#f9f4da]">404</h1>
                <h2 className="text-3xl md:text-6xl font-semibold mt-4 mb-6 text-[#fcba28]">Page Not Found</h2>
                <p className="text-2xl md:text-4xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-[#fcba28] text-[#272727] rounded-full text-lg font-semibold hover:bg-[#fcba28] transition-colors duration-300"
                >
                    Go Home
                </Link>
            </div>
        </main>
    )
}