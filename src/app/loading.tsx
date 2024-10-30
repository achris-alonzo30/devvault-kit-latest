import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Loading...",
}

export default function Loading() {
    return (
        <main className="h-screen w-full flex items-center justify-center mx-auto bg-background text-foreground">
            <section className="loader">
                <span>&lt;</span>
                <span>LOADING</span>
                <span>/&gt;</span>
            </section>
        </main>
    )
}