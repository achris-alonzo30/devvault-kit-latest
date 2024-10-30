
import {
  FiX,
  FiMenu,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";
import { Logo } from "./Logo";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS } from "@/features/landing-page/lib/constants";
import { BuyButton } from "./BuyButton";

const MobileMenuLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {

  return (
    <div className="relative text-foreground">
      <Link
          href={href}
          className="group flex w-full items-center justify-between border-b  py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight className="group-hover:rotate-[-45deg] transform duration-200 ease-linear" />
        </Link>
    </div>
  );
};

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block md:hidden z-[999]">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu className="text-[#fcba28]" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-background"
          >
            <div className="flex items-center justify-between p-6">
              <Logo />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-foreground" />
              </button>
            </div>
            <div className="h-screen overflow-hidden p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex bg-background p-6 w-full">
              <div className="flex items-center justify-between w-full gap-3">
                <BuyButton text="I'M READY" kit="Premium Kit" />
                <Link href="/docs" className="group flex tracking-widest items-center gap-2 text-xs md:text-sm font-black text-foreground/80">
                  LEARN MORE
                  <ChevronRight className="size-4 group-hover:translate-x-2 transition-all duration-200 ease-in-out " />
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};