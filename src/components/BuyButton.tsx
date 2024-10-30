"use client";

import { toast } from "sonner";
import { useAction } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../convex/_generated/api";
import { useCurrentUser } from "@/features/auth/api/useCurrentUser";


interface BuyButtonProps {
    text: string;
    kit: "Starter Kit" | "Premium Kit"
}

// TODO: Use this for CTA button
export const BuyButton = ({ text, kit }: BuyButtonProps) => {
    const router = useRouter();
    const { user } = useCurrentUser();
    const pay = useAction(api.stripe.pay);

    // The button have a function attached to lead them to pay now
    const handlePurchase = async (productType: "Starter Kit" | "Premium Kit") => {
        if (!user) {
            toast.error("Please login first");
            localStorage.setItem("buyIntent", productType);
            router.push("/auth");
            return;
        }

        try {
            const url = await pay({
                email: user.email,
                productType,
            });

            if (url) {
                router.push(url);
            }
        } catch (error) {
            console.error('Payment error:', error);
            toast.error("Failed to process payment");
        }

    }
    return (
        <button
            onClick={() => handlePurchase(kit === "Starter Kit" ? "Starter Kit" : "Premium Kit")}
            className="font-black tracking-widest text-xs md:text-sm w-fit px-8 py-2 bg-[#fcba28]/90 hover:bg-[#fcba28]/80 rounded-full text-background transition duration-200 ease-linear">
            {text}
        </button>
    )
}