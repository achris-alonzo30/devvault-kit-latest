import { cn } from "@/lib/utils";
import { MdEmail } from "react-icons/md";
import { TbEaseInOut } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { PiCreditCardFill } from "react-icons/pi";
import { SiGoogleanalytics } from "react-icons/si";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaDatabase, FaRocket } from "react-icons/fa6";



export const Highlights = () =>  {
  const highlights = [
    {
      title: "Next.js Framework",
      description:
        "Build scalable applications effortlessly with the powerful Next.js framework.",
      icon: <RiNextjsFill className="size-8" />,
    },
    {
      title: "Email Integration",
      description:
        "Simplify email communication with seamless integration using Resend.",
      icon: <MdEmail className="size-8" />,
    },
    {
      title: "Payment Solutions",
      description:
        "Easily accept payments with Stripe or Lemon Squeezy integration.",
      icon: <PiCreditCardFill className="size-8" />,
    },
    {
      title: "Secure Authentication",
      description: "Implement secure user authentication using NextAuth or Clerk for hassle-free login.",
      icon: <IoShieldCheckmark className="size-8" />,
    },
    {
      title: "Verstile Database",
      description: "Choose from various databases to fit your app’s unique needs.",
      icon: <FaDatabase className="size-8" />,
    },
    {
      title: "SEO Optimization",
      description:
        "Boost visibility with built-in SEO features powered by Next.js.",
      icon: <FaRocket className="size-8" />,
    },
    {
      title: "Web Analytics",
      description:
        "Track user behavior effortlessly with Google Analytics and Microsoft Clarity integration.",
      icon: <SiGoogleanalytics className="size-8" />,
    },
    {
        title: "Ease of use",
        description:
          "It's as easy as using an Apple, and as expensive as buying one.",
        icon: <TbEaseInOut className="size-8" />,
      },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {highlights.map((feature, index) => (
        <Highlight key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Highlight = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-background pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-background pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#fcba28]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-foreground group-hover/feature:bg-[#fcba28] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
