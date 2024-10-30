import { MicrosoftClarity } from './MicrosoftClarity'
import { GoogleAnalytics } from '@next/third-parties/google'


export const Analytics = () => {
    return (
        <>
            <GoogleAnalytics gaId={process.env.GA_ID!} />
            <MicrosoftClarity />
        </>
    )
}