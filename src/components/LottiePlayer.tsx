import dynamic from 'next/dynamic'

const DotLottieReact = dynamic(
    () =>
        import('@lottiefiles/dotlottie-react').then(
            (mod) => mod.DotLottieReact
        ),
    {
        ssr: false,
    }
)

interface LottiePlayerProps {
    className?: string
    style?: React.CSSProperties
    autoplay?: boolean
    loop?: boolean
}

// TODO: Store your lottie json in public folder
// Go to this link to get your lottie files: https://lottiefiles.com/

export const LottiePlayer = ({
    style = {},
    className = '',
    ...rest
}: LottiePlayerProps) => {
    return (
        <DotLottieReact
            autoplay
            loop
            className={className}
            src="/hero-lottie.json"
            style={{ width: '100%', height: '100%', ...style }}
            {...rest}
        />
    )
}