import Link from "next/link"

interface NavLinkProps {
    href: string;
    text: string;
}

export const NavLink = ({
    href,
    text
}: NavLinkProps) => {
    return (
        <Link href={href} className="text-base font-semibold hover:underline whitespace-nowrap">
            {text}
        </Link>
    )
}