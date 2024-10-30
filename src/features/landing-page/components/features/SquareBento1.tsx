import { Zap } from "lucide-react";
import { CardBentoIcon } from "./CardBentoIcon";
import { CardBentoWrapper } from "./CardBentoWrapper";

export const SquareBento1 = () => {
    return (
        <div className="col-span-2 h-[375px] md:col-span-1 hover:scale-105 transition duration-200 ease-linear">
            <CardBentoWrapper className="flex flex-col bg-[#fcba28]/90">
                <CardBentoIcon icon={Zap} />
                <h3 className="mb-1.5 text-start text-2xl font-bold uppercase text-background">Lightning-Fast Development</h3>
                <p className="mb-6 text-start text-background">Get your project up and running in minutes with our streamlined setup and pre-configured templates.</p>
                <div className=" z-20 px-4 py-2 flex items-center justify-center rounded-lg border bg-foreground">
                    <code className="mx-auto max-w-xl text-center text-background text-base overflow-hidden overflow-ellipsis whitespace-nowrap ">
                        git clone dev-vault
                    </code>
                </div>
            </CardBentoWrapper>
        </div>
    )
}