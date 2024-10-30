"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useCurrentUser } from "@/features/auth/api/useCurrentUser";

import { LogOut } from "lucide-react";

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu"
import { UserButtonLoading } from "./UserButtonLoading";

export const UserButton = () => {
    const { signOut } = useAuthActions();
    const { user, isLoading } = useCurrentUser();

    if (isLoading) {
        return (
            <UserButtonLoading />
        )
    };

    if (!user) return null;

    const avatarFallback = user.name!.charAt(0).toUpperCase();
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative" asChild>
                <Avatar className="size-10 border-2 border-[#fcba28] rounded-full hover:opacity-75 cursor-pointer transition-opacity duration-150">
                    <AvatarImage alt={user.name!} src={user.image!} />
                    <AvatarFallback className="text-foreground bg-background border-2 border-[#fcba28]">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom" className="w-60 bg-background border-none shadow-xl shadow-neutral-900 text-foreground">
                <DropdownMenuItem onClick={() => signOut()} className="h-10 ">
                    <LogOut className="size-4 mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}