import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const text = {
    highlight: "Bring your ideas to life faster",
    rest: " leaving the tedious setup behind for good."
}



export default function AnimatedHeading() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    React.useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: { y: 25, opacity: 0, filter: "blur(5px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.25,
                delay: 0.25,
                ease: "easeInOut",
            }
        }
    }

    const highlightVariants = {
        hidden: { width: "0%" },
        visible: {
            width: "100%",
            transition: {
                duration: 2,
                delay: 1.5,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="mb-3 mt-3 text-center md:text-start text-xl font-bold leading-tighter md:text-4xl sm:leading-tighter md:leading-tighter lg:leading-tighter"
        >
            <span className="relative inline-block px-2 py-2 md:whitespace-nowrap mb-1 text-background">
                <motion.span
                    variants={highlightVariants}
                    className="absolute inset-0 bg-foreground rounded rotate-[0.5deg]"
                    style={{ zIndex: -1 }}
                />
                {text.highlight}
            </span>
            {text.rest}
        </motion.h1>
    )
}