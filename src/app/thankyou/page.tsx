import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Thank you!",
}

export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
            <Image
                width={200}
                height={200}
                src="/thankyou.png"
                alt="Thank you image"
                className="object-cover"
            />
            <h2 className="text-2xl md:text-3xl text-center font-semibold mt-4 mb-2 text-[#fcba28]">
                    Welcome aboard! <span className="underline">You&apos;re In!</span>
                </h2>
                <p className="text-base md:text-lg text-foreground font-medium mb-6 text-center">
                    Thank you for signing up! We&apos;re excited to have you on board.
                </p>
            <Link
                href="/"
                className="font-black tracking-widest text-xs md:text-sm w-fit px-8 py-2 bg-[#fcba28]/90 hover:bg-[#fcba28]/80 rounded-full text-background transition duration-200 ease-linear">
                Go Home
            </Link>
        </main>
    )
}
