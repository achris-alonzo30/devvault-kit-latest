import Image from "next/image";


import {
    User,
    Layers,
    Palette,
    BookOpen,
    LifeBuoy,
    Settings,
    Megaphone,
    Proportions,
} from "lucide-react";
import { CardBentoIcon } from "./CardBentoIcon";
import { CardBentoWrapper } from "./CardBentoWrapper";


export const TowerBento = () => {
    return (
        <div className="cols-span-1 h-[600px] lg:col-span-4 lg:h-[600px] hover:scale-105 transition duration-200 ease-linear">
            <CardBentoWrapper className="flex flex-col bg-[#FF652F]">
                <CardBentoIcon icon={Palette} />
                <h3 className="mb-2 text-2xl font-bold uppercase text-background">Beautiful Interface</h3>
                <p className="mb-8 text-background">
                    Style your application effortlessly with TailwindCSS and Shadcn-UI for stunning, responsive designs.
                </p>
                {/* <CornerBlur /> */}
                <Mockup />
            </CardBentoWrapper>
        </div>
    )
}

const Mockup = () => (
    <div className="absolute -bottom-4 left-6 h-[340px] w-full overflow-hidden rounded-xl border border-zinc-700 bg-background sm:h-[370px]">
        <MockupTopBar />
        <div className="flex h-full w-full">
            <MockupSidebar />
            <MockupMain />
        </div>
    </div>
);


const MockupSidebar = () => (
    <div className="h-full w-30 border-r border-zinc-700 bg-zinc-900 p-2">
        <div className="flex items-center mb-4">
            <Image src="/logo.svg" alt="Dev Vault Logo" width={25} height={25} />
            <p className="text-foreground text-xs">Vault</p>
        </div>
        <div className="space-y-2 flex flex-col items-start">
            <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
                <User className="size-4" />
                Profile
            </div>
            <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
                <BookOpen className="size-4" />
                Resources
            </div>
            <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
                <Proportions className="size-4" />
                Templates
            </div>
            <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
                <Layers className="size-4" />
                Components
            </div>
            <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
                <Settings className="size-4" />
                Settings
            </div>
            <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
                <LifeBuoy className="size-4" />
                Help Center
            </div>
            <div className="flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600">
                <Megaphone className="size-4" />
                Feedback
            </div>
        </div>
    </div>
);


const MockupTopBar = () => (
    <div className="flex gap-1 border-b border-zinc-700 bg-background p-2">
        <div className="size-2 rounded-full bg-red-600"></div>
        <div className="size-2 rounded-full bg-yellow-600"></div>
        <div className="size-2 rounded-full bg-green-600"></div>
    </div>
);

const MockupMain = () => {

    return (
        <div className="relative w-full">
            <div className="relative z-0 w-full p-4">
                <div className="w-full border-b border-zinc-700 text-foreground pb-2 text-xs font-semibold">
                    Premium Templates
                </div>
                <div className="w-full h-full grid grid-cols-3 gap-4 my-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div key={i} className="border border-zinc-700 rounded-lg bg-neutral-900 animate-pulse h-[50px] w-full"/>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-1/4 z-10 bg-gradient-to-b from-zinc-950/0 via-zinc-950/90 to-zinc-950" />
        </div>
    );
};
